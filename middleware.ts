import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware({
  // Public routes that don't require authentication
  // publicRoutes: [
  //   "/",
  //   "/shop(.*)",
  //   "/products/(.*)",
  //   "/collections/(.*)",
  //   "/about",
  //   "/contact",
  //   "/sign-in(.*)",
  //   "/sign-up(.*)",
  // ],
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
