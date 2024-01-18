import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(request) {
  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  });
  if (!token) {
    if (
      request.nextUrl.pathname.startsWith("/admin") ||
      request.nextUrl.pathname.startsWith("/profile")
    ) {
      return NextResponse.redirect(new URL("/", request.url));
    }
    return;
  }
  switch (token.role) {
    case "user":
      if (request.nextUrl.pathname.startsWith("/admin")) {
        return NextResponse.redirect(new URL("/", request.url));
      }
      break;
    // case "admin":
    //   if (request.nextUrl.pathname.startsWith("/admin")) {
    //     return NextResponse.redirect(new URL("/admin", request.url));
    //   }
    //   break;
    // default:
    //   return NextResponse.redirect(new URL("/login", request.url));
  }
}
export const config = {
  matcher: [
    // Match all routes except the ones that start with /login and api and the static folder
    "/((?!api|_next/static|_next/image|favicon.ico|login).*)",
  ],
};
