import React from "react";

import { Button, Text } from "@chakra-ui/react";

import { BsArrowUpRight } from "react-icons/bs";

export interface IWeekly {}

const Weekly: React.FC<IWeekly> = () => {
  return (
    <div className="rounded-md border">
      <div className="flow-root p-4">
        <div className="float-left">
          <Text fontSize="24px" className="font-bold text-hyvv-title-2">
            Weekly
          </Text>
          <Text
            fontSize="14px"
            className="font-Manrope font-medium text-hyvv-description"
          >
            Next billing date is 02 April 2023
          </Text>
        </div>
        <div className="float-right flex">
          <Text
            fontSize="20px"
            className="mb-auto mt-auto font-semibold text-hyvv-title-2"
          >
            $
          </Text>
          <Text fontSize="42px" className="font-bold text-hyvv-title-2">
            320
          </Text>
        </div>
      </div>
      <div className="flow-root rounded-b-md bg-gray-100 p-4">
        <Button variant="link" colorScheme="red" className="float-left">
          Cancel Renewal
        </Button>
        <Button
          variant="link"
          rightIcon={<BsArrowUpRight />}
          className="float-right"
        >
          Update Billing
        </Button>
      </div>
    </div>
  );
};

export default Weekly;
