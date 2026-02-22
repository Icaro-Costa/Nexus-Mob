import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Nexus Account",
            credentials: {
                username: { label: "Username", type: "text", placeholder: "Icaro" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                // Mock authentication
                if (credentials?.username === "Icaro" && credentials?.password === "nexus") {
                    return {
                        id: "1",
                        name: "Icaro",
                        email: "icaro@nexus.com",
                        image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Icaro&backgroundColor=1f2937",
                    };
                }
                return null;
            }
        })
    ],
    pages: {
        signIn: '/', // Using the splash page as the entry point
    },
    session: {
        strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET || "nexus-super-secret-key-for-dev",
};
