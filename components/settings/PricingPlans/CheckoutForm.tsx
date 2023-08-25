import { Button } from "@chakra-ui/react";
import {
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { useSession } from "next-auth/react";
import { useState } from "react";

const CheckoutForm = ({ finalPayment = true, callBack }) => {
  const { data } = useSession();
  const stripe = useStripe();
  const elements = useElements();
  const { NEXTAUTH_URL } = process.env;
  const [error, setError] = useState(undefined);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event: any) => {
    // We don't want to let default form submission happen here,
    // which would refresh the page.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }
    const finalPaymentUrl = finalPayment
      ? "/account?payment=done"
      : "/checkout/thankyou";
    setIsLoading(true);

    const result = await stripe.confirmPayment({
      //`Elements` instance that was used to create the Payment Element
      elements,
      redirect: "if_required",
      confirmParams: {
        return_url: `http://localhost:3000/startup/dashboard`,
        // return_url: `https://sevennup.vercel.app${finalPaymentUrl}`,
        payment_method_data: {
          billing_details: {
            phone: data?.user.phone_number || "",
            email: data?.user.email || "",
          },
        },
      },
    });

    if (result.error) {
      // Show error to your customer (for example, payment details incomplete)
      setError(result.error.message);
      console.log(result.error.message);
    } else {
      // Your customer will be redirected to your `return_url`. For some payment
      // methods like iDEAL, your customer will be redirected to an intermediate
      // site first to authorize the payment, then redirected to the `return_url`.
    }
    setIsLoading(false);
    callBack()
    
  };

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <form>
      <PaymentElement />
      <Button
        className="mt-4 w-full"
        onClick={handleSubmit}
        colorScheme="blue"
        isLoading={isLoading}
        loadingText="Submitting"
      >
        Submit
      </Button>
    </form>
  );
};

export default CheckoutForm;
