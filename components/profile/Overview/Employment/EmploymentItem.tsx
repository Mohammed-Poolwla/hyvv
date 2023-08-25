import React from "react";

import { Box, Collapse, Text, useDisclosure } from "@chakra-ui/react";

import { BsFillSquareFill } from "react-icons/bs";

import moment from "moment";

import { EmploymentHistoryItem } from "../../../../lib/slices/freelancerProfileSlice";
import CalendarIcon from "../../../icons/CalendarIcon";

export interface Item {
  data: EmploymentHistoryItem;
}

const EmploymentItem: React.FC<Item> = ({ data }) => {
  const { isOpen, onToggle } = useDisclosure();

  const { companyName, position, startDate, endDate, jobDescription } = data;

  return (
    <div className="border-1 overflow-hidden rounded-lg border border-[#ebebeb] bg-white">
      <div className="text-ml flex w-full gap-x-2 border-b border-[#ebebeb] bg-[#f7f7f7] px-7 py-3 font-semibold">
        <BsFillSquareFill className="mt-2 text-[#08657E]" size={"15px"} />
        <Box>
          <Text className="font-bold text-[#08657E]">{companyName}</Text>
          <Text className="text-base font-medium text-gray-500">
            {position}
          </Text>
        </Box>
      </div>
      <div className="flex w-full items-center gap-x-2 border-b border-[#ebebeb] px-7 py-1 text-xl font-semibold text-[#84818A]">
        <CalendarIcon />
        <Text className="text-base font-medium ">
          {moment(startDate).format("MMMM DD, YYYY")} -{" "}
          {moment(endDate).format("MMMM DD, YYYY")}
        </Text>
      </div>
      <div className="flex w-full flex-col px-7 py-3 text-base font-medium">
        <Collapse startingHeight={25} in={isOpen} className="text-[#84818a]">
          {jobDescription}
        </Collapse>
        <Text
          className="text-md cursor-pointer font-bold text-[#08657E] underline"
          onClick={onToggle}
        >
          View Details
        </Text>
      </div>
    </div>
  );
};

export default EmploymentItem;
