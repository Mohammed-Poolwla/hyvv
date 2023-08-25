
import { buffer } from 'micro';
import { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';


const stripe = new Stripe((process.env.STRIPE_SECRET_KEY), {
  
  apiVersion: '2022-11-15',
});


interface InvoicePaidEvent extends Stripe.Event {
  data: Stripe.Invoice;
}

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handleWebhook(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const sig = req.headers['stripe-signature'];


  let event
  try {
    const buf = await buffer(req);
    const payload = buf.toString();
    event = stripe.webhooks.constructEvent(
      payload,
      sig as string,
     process.env.STRIPE_WEBHOOK_SECRET_KEY as string

    ) as InvoicePaidEvent;
  } catch (err: any) {
    console.log(`Webhook Error: ${err.message}`);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }
const session=event.object.data
  // Handle the event
  switch (event.type) {

    case 'customer.subscription.created':
      // Handle subscription creation


      
      break;
      case 'invoice.paid':
        
      console.log(session)
      break;

    case 'customer.subscription.updated':
      // Handle subscription update



      break;
    case 'customer.subscription.deleted':
      // Handle subscription cancellation
      break;
    
    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  res.status(200).json({ received: true });
}

