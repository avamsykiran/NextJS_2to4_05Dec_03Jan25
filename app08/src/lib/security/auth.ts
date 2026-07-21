import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import * as adbUserDAL from "../data-access-layer/adbUsersDAL";

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    Credentials({
      name: "Credentials",
      // Define the schema of credentials you expect
      credentials: {
        username: { label: "Username", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.username || !credentials?.password) {
          return null; 
        }

        const username = credentials.username as string;
        const password = credentials.password as string;

        // 1. Fetch the user from your database
        const user = await adbUserDAL.getUserByName(username);

        // 2. If no user or they signed up with OAuth before
        if (!user || !user.password) {
          return null;
        }       

        // 3. Verify the password matches the hash
        const isValid = await bcrypt.compare(password, user.password);

        if (!isValid) {
          return null;
        }

        // 4. Return the user object (it gets saved into the JWT session)
        return {
          ...user,password:undefined
        };
      }
    })
  ],
  // 💡 Crucial: Credentials provider MANDATES utilizing JWT strategy
  session: {
    strategy: "jwt" 
  },
  pages: {
    signIn: "/login", // Redirect to your custom login page
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
      }
      return session;
    }
  }
});