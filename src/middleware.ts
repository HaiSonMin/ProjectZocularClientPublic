
// middleware.ts
import { CONST_VALUES } from '@/constants'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Kiểm tra token đăng nhập một cách ngắn gọn

 

  return request.cookies.has(CONST_VALUES?.TOKEN)
  ? NextResponse.redirect(new URL('/', request.url))
  : NextResponse.next()
}

 export const config = {
  matcher: ['/auth/login/:path*']
}