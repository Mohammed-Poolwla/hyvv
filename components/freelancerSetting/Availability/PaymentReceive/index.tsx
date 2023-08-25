import { Text } from "@chakra-ui/react";

import PaymentRadioGroup from "./PaymentRadioGroup";

import BankIcon from "../../../icons/BankIcon";
import HyvvIcon from "../../../icons/HyvvIcon";
import Paypal2Icon from "../../../icons/Paypal2Icon";

const paymentMethods = [
  {
    icon: <HyvvIcon className="mb-auto mr-1 mt-auto" />,
    title: "Hyvv Direct Payment",
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text",
    isBestRate: true,
  },
  {
    icon: <Paypal2Icon className="mb-auto mr-1 mt-auto" />,
    title: "PayPal",
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text",
    isBestRate: true,
  },
  {
    icon: <BankIcon className="mb-auto mr-1 mt-auto" />,
    title: "Bank / Debit Card",
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text",
    isBestRate: true,
  },
];

const PaymentReceive = () => {
  return (
    <div>
      <Text fontSize="18px" className="font-semibold text-hyvv-title-1">
        Payment Receive
      </Text>
      <Text fontSize="14px" className="text-hyvv-description">
        Contrary to popular belief, Lorem Ipsum is not simply random text.
      </Text>
      <PaymentRadioGroup paymentMethods={paymentMethods} />
    </div>
  );
};

export default PaymentReceive;
