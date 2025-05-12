import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Middleware runs only on routes that include "private" in the path
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  // Try to read token cookie
  const token = request.cookies.get("token")?.value;

  // If accessing a "private" route without a token, redirect to login
  if (pathname.includes("private") && !token) {
    const loginUrl = new URL("/auth/login", request.url);
    return NextResponse.redirect(loginUrl);
  }

  // Otherwise, continue as normal
  return NextResponse.next();
}

export const config = {
  // Apply middleware only to paths containing "private"
  matcher: [
    "/:path*private/:path*"
  ],
};
