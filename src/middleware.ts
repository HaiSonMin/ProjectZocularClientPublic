"use server";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { CONST_VALUES } from "./constants/values.constant";
import { cookies } from "next/headers";
import { IBaseResponse } from "./interfaces/common/IResponse.interface";
import { CONST_APIS } from "./constants";
import { CONSTANT_ALWAYS_ROUTES } from "./constants/route.constant";
import { IRole } from "./interfaces/models";

export async function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;
    const referrer = request.headers.get("referer");
    let response: NextResponse = NextResponse.next();

    const token = request.cookies.get(CONST_VALUES.TOKEN);

    // Chuyển hướng từ trang gốc về home
    if (pathname === "/") {
        return NextResponse.redirect(new URL("/home", request.url));
    }

    // Xử lý chuyển hướng xác thực
    if (!token && pathname.startsWith("/home")) {
        return NextResponse.redirect(new URL("/auth/login", request.url));
    }

    if (token && pathname.startsWith("/auth")) {
        return NextResponse.redirect(new URL("/home", request.url));
    }

    // Bỏ qua kiểm tra role nếu không có token hoặc không phải route home
    if (token && pathname.startsWith("/home") && referrer !== pathname) {
        try {
            // Lấy thông tin người dùng
            const resGetMe = await fetch(
                `${CONST_APIS.VERSION_V1}/${CONST_APIS.FEATURES.COMMON.AUTH}/${CONST_APIS.FEATURES.AUTH.GET_ME}`,
                {
                    headers: {
                        "Content-Type": "application/json",
                        Cookie: cookies().toString(),
                    },
                    credentials: "include",
                    cache: "no-store",
                }
            );

            if (resGetMe.status === 406) {
                console.log("Delete token");
                response.cookies.delete("token");
                return response;
            }

            const me = (await resGetMe.json()) as IBaseResponse<any>;

            // Bỏ qua kiểm tra role cho admin
            if (me?.metadata?.user_isRootAdmin) {
                return response;
            }

            // Lấy danh sách role của người dùng
            const sources =
                (me?.metadata?.user_roles as Array<IRole>)?.flatMap((role) =>
                    role.role_featuresRoles.map(
                        (featureRole) => featureRole.source
                    )
                ) || [];

            const roles = [...sources, ...CONSTANT_ALWAYS_ROUTES];

            // Trường hợp đặc biệt cho social-list
            if (pathname.includes("/home/social-list")) {
                return response;
            }

            // Lấy role từ đường dẫn
            const pathParts = pathname.split("/").filter(Boolean);
            const detailsRole = pathname.endsWith("/")
                ? pathParts[pathParts.length - 2]
                : pathParts[pathParts.length - 1];

            // Kiểm tra quyền truy cập
            if (!roles.includes(detailsRole)) {
                console.log("User forbidden");
                return NextResponse.redirect(new URL("/home", request.url));
            }
        } catch (error) {
            console.error("Middleware error:", error);
            response.cookies.delete("token");
            return NextResponse.redirect(new URL("/home", request.url));
        }
    }

    return response;
}

export const config = {
    matcher: [
        {
            source: "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
        },
        "/:path*",
        "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
    ],
};
