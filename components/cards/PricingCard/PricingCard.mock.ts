import { IPricingCard } from "./PricingCard";

const base: IPricingCard = {
  id: "1231312312312312",
  interval: "year",
  description: "This pricing package is the one for you",
  name: "Annual Plan",
  price: 10000,
  to: "/",
};

export const mockPricingCardProps = {
  base,
};
