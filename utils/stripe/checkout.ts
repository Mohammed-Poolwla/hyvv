import getStripe from "./get-stripe";

const stripeCheckout = async ({ lineItems }) => {
  const stripe = await getStripe();

  await stripe.redirectToCheckout({
    mode: "subscription",
    lineItems,
    successUrl: `${window.location.origin}?session_id={CHECKOUT_SESSION_ID}`,
    cancelUrl: window.location.origin,
  });
};

export default stripeCheckout;
