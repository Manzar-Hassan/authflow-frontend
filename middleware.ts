import { NextRequest, NextResponse } from "next/server";
import { createRouteMatcher } from "@manzar-hassan/authflow";

const isPublicRoute = createRouteMatcher(["/signin", "/signup"]);

export function middleware(request: NextRequest) {
  const { nextUrl } = request;
  const token = request.cookies.get("access_token")?.value;

  if (token && isPublicRoute(nextUrl.pathname)) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  if (isPublicRoute(nextUrl.pathname)) {
    return NextResponse.next();
  }

  if (!token) {
    return NextResponse.redirect(new URL("/signin", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
  ],
};
