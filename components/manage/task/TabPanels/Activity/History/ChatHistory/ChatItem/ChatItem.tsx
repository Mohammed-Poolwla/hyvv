import React from "react";

import Image from "next/image";

import { Avatar, Collapse, Text, useDisclosure } from "@chakra-ui/react";
import { Step, StepIndicator, StepSeparator } from "@chakra-ui/stepper";

import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";

import { IHistory } from "../ChatHistory";

const ChatItem: React.FC<IHistory> = ({
  avatar,
  sender,
  to,
  time,
  message,
  images,
}) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Step className="w-full">
      <StepIndicator className="border-none">
        <Avatar name={sender} src={avatar} />
      </StepIndicator>

      <div className="flex w-full flex-col">
        <div
          className="mt-2 flow-root cursor-pointer border-b"
          onClick={onToggle}
        >
          <div className="float-left ml-2 flex gap-1 pb-4">
            <Text fontSize="16px" className="font-semibold text-hyvv-main">
              {sender}
            </Text>
            <Text fontSize="16px" className="font-medium text-hyvv-description">
              sent {to} a message
            </Text>
            <Text
              fontSize="14px"
              className="ml-1 font-semibold text-hyvv-description"
            >
              {time}
            </Text>
          </div>
          <div className="float-right flex">
            {!isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
          </div>
        </div>

        <Collapse in={!isOpen} className="mb-4 ml-2 mt-4" animateOpacity>
          <Text fontSize="14px" className="text-[#2E2C34]">
            {message}
          </Text>
          <div className="flex w-full gap-2 overflow-x-auto pb-2 pt-2">
            {images !== undefined
              ? images.map((image, index) => (
                  <Image
                    alt="image"
                    src={image}
                    width="100"
                    height="100"
                    key={index}
                  />
                ))
              : null}
          </div>
        </Collapse>
      </div>

      <StepSeparator className="border border-dashed border-white bg-none" />
    </Step>
  );
};

export default ChatItem;
