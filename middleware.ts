import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  // Log the request path
  console.log(`Request: ${request.method} ${request.nextUrl.pathname}`)

  // Continue to the next middleware or route handler
  return NextResponse.next()
}

export const config = {
  matcher: "/api/:path*",
}
