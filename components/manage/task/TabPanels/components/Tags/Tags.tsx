import React from "react";

import { Tag, Text } from "@chakra-ui/react";

import { BsThreeDots } from "react-icons/bs";

const tags = [
  "LinkedIn",
  "Marketing",
  "2023",
  "CPA",
  "3A",
  "3P",
  "Digital marketing",
  "Sales",
  "Fintech",
];

export interface ITags {}

const Tags: React.FC<ITags> = () => {
  return (
    <div className="flex flex-col gap-4 rounded-md bg-white p-4 shadow-md">
      <div className="flow-root">
        <div className="float-left">
          <Text fontSize="18px" className="font-semibold text-hyvv-title-1">
            Tags
          </Text>
        </div>
        <div className="float-right">
          <BsThreeDots />
        </div>
      </div>
      <div>
        {tags.map((tag, index) => (
          <Tag
            borderRadius="full"
            colorScheme="blue"
            className="m-1"
            bgColor="#C0C0C0"
            key={index}
          >
            <Text fontSize="12px" className="p-2 text-white">
              {tag}
            </Text>
          </Tag>
        ))}
      </div>
    </div>
  );
};

export default Tags;
