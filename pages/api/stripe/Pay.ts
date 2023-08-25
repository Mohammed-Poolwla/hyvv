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
      // const {email}=req.body
      const session = await stripe.checkout.sessions.create({
        // customer_email:email,
        payment_method_types: ["card"],
        mode: "subscription",
        line_items: [
          {
            price: `${process.env.MONTHLY_PAYMENT_PRICE_ID}`,
            quantity: 1,
          },
        ],
        success_url: `${req.headers.host}/success`,
        cancel_url: `${req.headers.host}/cancel`,
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
