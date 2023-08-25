import { NextApiRequest, NextApiResponse } from "next";
import NextAuth from "next-auth";
import CredentialsProvider, {
  CredentialInput,
} from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

import Services from "../../../services";

const createOptions = (req: NextApiRequest) => ({
  pages: {
    signIn: `/auth/login`,
  },
  providers: [
    GoogleProvider({
      name: "google",
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        let errmesg = "";
        try {
          const user = await Services.post("/api/auth/login", {
            email: credentials.username,
            password: credentials.password,
          }).catch((err) => {
            
            errmesg = err.response.data.message;
            throw new Error(JSON.stringify({ errors: errmesg, status: false }));
          });

          if (user.status === 200 && user) {
            return user.data.user;
          } else {
            return false;
          }
        } catch (error) {
          console.error(error);
          return false;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, account, user }) {
      if (account) {
        if (account.provider === "google") {
          try {
            const userResponse = await Services.post("/api/auth/signup", {
              source: "google",
              email: token.email,
            });
            console.log("jwt", userResponse.data.userData);
            return {
              accessToken: account.access_token,
              accessTokenExpires: Date.now() + (account.expires_at ?? 0) * 1000,
              refreshToken: account.refresh_token,
              user: userResponse.data.userData,
            };
          } catch (error) {
            console.log("jwt", error);
          }
        }

        return {
          accessToken: account.access_token,
          accessTokenExpires: Date.now() + (account.expires_at ?? 0) * 1000,
          refreshToken: account.refresh_token,
          user: user,
        };
      }
      if (req.query.update) {
        token.user = { ...token.user, ...req.query };
        return token;
      }
      return token;
    },

    async session({ session, token }) {
      return { ...session, token: token.user.token, user: token.user };
    },

    async signIn(params: {
      user: any;
      account: any;
      profile?: any;
      email?: { verificationRequest?: boolean };
      credentials?: Record<string, CredentialInput>;
    }): Promise<boolean> {
      if (params.account.provider === "google") {
        try {
          await Services.post("/api/auth/signup", {
            source: "google",
            email: params.profile.email,
          });
        } catch (error) {
          console.log("signIn", error);
        }

        return true;
      }
      return true;
    },

    // async signIn({ account, profile }) {
    //   if (account.provider === 'google') {
    //     await Services.post('/api/v1/signup', {
    //       name: profile.name,
    //       email: profile.email,
    //     });
    //     return true;
    //   }
    //   return true;
    // },
  },
  secret: process.env.SECRET,
  debug: true,
  
});

export default async (req: NextApiRequest, res: NextApiResponse) => {
  return NextAuth(req, res, createOptions(req));
};
