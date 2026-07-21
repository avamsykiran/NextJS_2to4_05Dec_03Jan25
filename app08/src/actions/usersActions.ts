"use server";

import { AdbUser } from "@/lib/models/AdbUser";
import { signIn } from "@/lib/security/auth";
import { AuthError } from "next-auth";

export async function loginServerAction(username: string, password: string) {
    try {
        await signIn("credentials", {
            username,
            password,
            redirectTo: "/contacts", // Where to go after success
        });
    } catch (error) {
        if (error instanceof AuthError) {
            switch (error.type) {
                case "CredentialsSignin":
                    return { error: "Invalid credentials." };
                default:
                    return { error: "Something went wrong." };
            }
        }
        // ⚠️ Mandatory: Next.js redirects work by throwing a special error. 
        // You MUST rethrow it or the redirect to /contacts will fail.
        throw error;
    }
}

export async function registerServerAction(u: AdbUser) {

}
