import React from "react";

import { Avatar, Text } from "@chakra-ui/react";

import { ExternalLinkIcon } from "@chakra-ui/icons";
import { BsThreeDots } from "react-icons/bs";
import DetailItem from "./DetailItem/DetailItem";

export interface IOrderDetails {}

const OrderDetails: React.FC<IOrderDetails> = () => {
  return (
    <div className="rounded-md bg-white p-4 shadow-md">
      <div className="flex items-center justify-between">
        <Text fontSize="18px" className="font-semibold text-hyvv-title-1">
          Order Details
        </Text>
        <BsThreeDots color="#84818A" />
      </div>
      <div className="mt-4 flex gap-2 rounded-md bg-[#f1f4f4] p-3">
        <Avatar src="/avatar2.png" name="Dennis Callis" size="lg" />
        <div className="flex w-full justify-between">
          <div className="flex flex-col gap-1">
            <Text fontSize="16px" className="font-medium text-hyvv-description">
              Freelancer Assigned
            </Text>
            <Text fontSize="20px" className="font-semibold text-hyvv-main">
              Dennis Callis
            </Text>
          </div>
          <ExternalLinkIcon />
        </div>
      </div>
      <div className="mt-4">
        <DetailItem leftText="Final Price" rightText="$350" />
        <DetailItem leftText="Order date" rightText="May 8, 4:48 AM" />
        <DetailItem leftText="Delivery date" rightText="May 12" />
        <DetailItem
          leftText="Order number"
          rightText="#FO32G722KF07"
          hiddenBorder
        />
      </div>
    </div>
  );
};

export default OrderDetails;
