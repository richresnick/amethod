import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // For development/preview, allow access to most routes
  if (process.env.NODE_ENV !== "production") {
    return NextResponse.next()
  }

  // Protected routes that require authentication
  const protectedRoutes = ["/dashboard", "/profile", "/videos"]

  // Routes that should redirect to dashboard if already logged in
  const authRoutes = ["/login", "/signup"]

  // Simple check for auth token in localStorage (this won't work server-side)
  // In a real app, you'd check for HTTP-only cookies or session tokens

  // For now, just allow all routes in preview mode
  return NextResponse.next()
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}
