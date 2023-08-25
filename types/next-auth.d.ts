import NextAuth from "next-auth"

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      /** The user's postal address. */
      name?: string;
      first_name?: string;
      middle_name?: string;
      last_name?: string;
      email: string;
      image?: string
      token: string
      id: string
      phone_number?: string
      stripe_customer_id: null | string
      accountTypes: string[] | object
    }
  }
}