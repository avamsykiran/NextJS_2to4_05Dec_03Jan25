export { auth as middleware } from "@/lib/security/auth";

export const config = {
    // Only execute auth checks on these specific routes
    matcher: ["/contacts/:path*","/api/contacts/:path*"],
};