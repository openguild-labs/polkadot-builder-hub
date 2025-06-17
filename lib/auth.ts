import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "@/db"; // your drizzle instance
import { user, account, session, verification } from "@/db/schema/auth-schema";
import { admin } from "better-auth/plugins";

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg", // or "mysql", "sqlite"
    schema: {
      user: user,
      account: account,
      session: session,
      verification: verification,
    },
  }),
  socialProviders: {
    github: {
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
      mapProfileToUser: (profile) => {
        return {
          firstName: profile.name.split(" ")[0],
          lastName: profile.name.split(" ")[1],
        };
      },
    },
  },
  trustedOrigins: [
    "http://localhost:3080",
    "https://polakdot-builders.vercel.app",
    "https://build.openguild.wtf",
    "https://www.polkadotbuilders.com",
  ],
  plugins: [admin()],
});
