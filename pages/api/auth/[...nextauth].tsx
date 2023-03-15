import NextAuth from "next-auth/next";
import { NextApiHandler } from "next";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github"

interface GoogleProviderConfig {
  clientId: string;
  clientSecret: string;
  callbackUrl: string;
  scope: string;
}

interface GitHubProviderConfig {
  clientId: string;
  clientSecret: string;
  callbackUrl: string;
}


export default NextAuth({
  secret: process.env.SECRET,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackUrl: `${process.env.NEXTAUTH_URL}/api/auth/callback/google`,
      scope:'user'
    } as GoogleProviderConfig),
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      callbackUrl: `${process.env.NEXTAUTH_URL}/api/auth/callback/github`,
    } as GitHubProviderConfig),
  ],
});