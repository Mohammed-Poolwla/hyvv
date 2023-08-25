import React from "react";

import { Text } from "@chakra-ui/react";

export interface IOrderStarted {}

const OrderStarted: React.FC<IOrderStarted> = () => {
  return (
    <div className="rounded-md border-l-4 border-[#08657E] bg-white p-4 shadow-md">
      <Text fontSize="16px" className="font-semibold text-hyvv-title-2">
        Order Started for Dennis Callis
      </Text>
      <Text fontSize="14px" className="font-medium text-hyvv-description">
        Contrary to popular belief, Lorem Ipsum is not simply random text
      </Text>
    </div>
  );
};

export default OrderStarted;
