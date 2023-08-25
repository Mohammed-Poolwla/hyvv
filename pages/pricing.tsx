import { HStack, Spinner, VStack } from "@chakra-ui/react";
import PricingCard from "../components/cards/PricingCard/PricingCard";
import MarketingLayout from "../components/layouts/MarketingLayout/MarketingLayout";
import { NextPageWithLayout } from "./page";
//const initStripe = require("stripe");

interface PricingPageProps {
  plans: any;
  redirect: any;
}

const Pricing: NextPageWithLayout<PricingPageProps> = ({ plans }) => {
  if (!plans) {
    return <Spinner />;
  }
  return (
    <div className="grid">
      <VStack mt={2}>
        <HStack>
          {plans.map(({ id, interval, price }) => {
            return (
              <PricingCard
                key={`pricing-card-${id}`}
                price={price}
                id={id}
                interval={interval}
                to={"/api/auth/signup"}
                name={interval === "month" ? "Monthly Plan" : "Annual Plan"}
                description={
                  interval === "month"
                    ? "The perfect option for Founders that want to give us a try or that do not want to part with too much cash up front."
                    : "The plan for the Founder that know's what they want. Plus save 10% over the cost of the year compared to the Monthly Plan!"
                }
              />
            );
          })}
        </HStack>
      </VStack>
    </div>
  );
};

export default Pricing;

Pricing.getLayout = (page) => {
  return <MarketingLayout>{page}</MarketingLayout>;
};

export const getServerSideProps = async ({ _req, _res }) => {
  // const stripe = initStripe(process.env.STRIPE_SECRET_KEY);
  // const { data: prices } = await stripe.prices.list();

  // const session = getSession(req, res);
  // if (session) {
  //   return {
  //     redirect: {
  //       permanent: false,
  //       destination: "/",
  //     },
  //     props: {},
  //   };
  // }

  // const plans = await Promise.all(
  //   prices.map(async (price) => {
  //     const product = await stripe.products.retrieve(price.product);
  //     return {
  //       id: price.id,
  //       name: product.name,
  //       price: price.unit_amount,
  //       interval: price.recurring.interval,
  //       currency: price.currency,
  //     };
  //   })
  // );

  return {
    props: {
      // plans,
    },
  };
};
