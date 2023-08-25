import { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";

// Initialize Stripe with your API key
const stripe = new Stripe(`${process.env.STRIPE_SECRET_KEY}`, {
  apiVersion: "2022-11-15",
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      const { customerId } = req.body;

      const session = await stripe.billingPortal.sessions.create({
        customer: "cus_O5yg7uZ6skCTJv", // will need to update this to use the customer ID from the database
        return_url: `${req.headers.host}/account`,
      });

      res.status(200).json({ url: session.url });
    } catch (error) {
      console.error(error.message);
      res.status(500).json({ error: "An error occurred" });
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}
