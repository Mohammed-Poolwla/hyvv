import React from "react";

import { Text } from "@chakra-ui/react";

import { ChevronDownIcon } from "@chakra-ui/icons";
import CalendarIcon from "../../../../../icons/CalendarIcon";

import TimeItem from "./TimeItem/TimeItem";

export interface IDeliveryTime {}

const DeliveryTime: React.FC<IDeliveryTime> = () => {
  return (
    <div className="rounded-md bg-white shadow-md">
      <div className="flex items-center gap-2 p-4">
        <Text fontSize="18px" className="font-semibold text-hyvv-title-1">
          Delivery Time
        </Text>
        <ChevronDownIcon boxSize="24px" />
      </div>
      <div className="grid grid-cols-4 p-4">
        <TimeItem name="5" description="Days" showBorder />
        <TimeItem name="12" description="Hours" showBorder />
        <TimeItem name="32" description="Minutes" showBorder />
        <TimeItem name="03" description="Seconds" />
      </div>
      <div className="flex items-center gap-1 rounded-b-md border-t border-[#e2e2e2] bg-[#f9f9f9] p-3 text-hyvv-description">
        <CalendarIcon className="text-hyvv-description" />
        <Text fontSize="14px" className="font-medium text-hyvv-description">
          Task Frequency:{" "}
        </Text>
        <Text fontSize="14px" className="font-semibold text-hyvv-main">
          Weekly
        </Text>
      </div>
    </div>
  );
};

export default DeliveryTime;
