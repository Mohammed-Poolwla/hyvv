import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

export default function Stripe({ intent, callBack }) {
  const options = {
    // passing the client secret obtained from the server
    clientSecret: intent,
  };

  return (
    <Elements stripe={stripePromise} options={options}>
      <CheckoutForm callBack={callBack} />
    </Elements>
  );
}
