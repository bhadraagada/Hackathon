import { NextResponse } from 'next/server';  // Import the Next.js response helper
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isPublicRoute = createRouteMatcher([
  "/sign-in(.*)",
  "/sign-up(.*)",
  "/",
  "/about",
  "/features",
  "/impact",
  "/contact",
  "/track",
  "/cabfare",
  "/sos",
  "/SosConfirm",
  "/report-scam",
  "/chatroom"
]);

export default clerkMiddleware((auth, req) => {
  // Allow public routes to be accessible without auth
  if (isPublicRoute(req)) {
    return NextResponse.next();  // Continue processing the request
  }

  // Protect other routes
  return auth().protect();
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
