import {
  Button,
  Grid,
  GridItem,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { BsCheckCircleFill, BsStarFill } from "react-icons/bs";
import { FiArrowUpRight } from "react-icons/fi";
import PlanModal from "../PlanModal";
const PlanList = [
  {
    title: "Starter",
    description: "Perfect for starter",
    price: { monthly: 0, yearly: 0 },
    state: "enable",
    service: {
      data_api: false,
      team_member: 1,
      could_storage: "1GB",
      vision_history: false,
      sharing_permissions: false,
      team_libraries: false,
      snippets: true,
    },
  },
  {
    title: "Small Team",
    description: "For Creative Individuals",
    price: { monthly: 49, yearly: 30 },
    state: "current",
    service: {
      data_api: true,
      team_member: 3,
      could_storage: "5GB",
      vision_history: true,
      sharing_permissions: false,
      team_libraries: false,
      snippets: true,
    },
  },
  {
    title: "Organization",
    description: "Perfect for a small Team",
    price: { monthly: 79, yearly: 60 },
    state: "recommend",
    popular: true,
    service: {
      data_api: true,
      team_member: 10,
      could_storage: "10GB",
      vision_history: true,
      sharing_permissions: true,
      team_libraries: true,
      snippets: true,
    },
  },
  {
    title: "Enterprise",
    description: "Perfect for Whole Team",
    price: { monthly: 120, yearly: 100 },
    state: "enable",
    service: {
      data_api: true,
      team_member: "Unlimited",
      could_storage: "Unlimited",
      vision_history: true,
      sharing_permissions: true,
      team_libraries: true,
      snippets: true,
    },
  },
];

const TeamPlan = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <div className="flex flex-1 flex-col items-stretch rounded-lg border border-[#e4e4e4]">
        <div className="flex flex-1 items-center justify-between rounded-t-lg p-4">
          <div className="flex flex-col gap-y-1">
            <div className="flex gap-x-3">
              <h3 className="text-[20px] font-bold">Team Plan</h3>
              <span className="flex items-center rounded-full bg-hyvv-main px-4 py-1 text-[12px] text-[#fff]">
                Monthly
              </span>
            </div>

            <p className="text-[12px] text-[#84818A]">
              Next billing date is 02 July 2023
            </p>
          </div>
          <div className="flex items-center">
            <span className="self-start text-[14px] font-semibold">$</span>
            <span className="hei text-[35px] font-bold leading-[35px]">49</span>
            <span className="self-end text-[14px] font-semibold">/m</span>
          </div>
        </div>
        <div className="flex items-center justify-between rounded-b-lg bg-[#f6f6f6] p-4 text-[15px]">
          <p className="cursor-pointer font-semibold text-[#ff3b30]">
            Cancel Renewal
          </p>
          <div className="flex items-center ">
            <p className="cursor-pointer font-semibold" onClick={onOpen}>
              Change plan
            </p>
            <FiArrowUpRight />
          </div>
        </div>
      </div>
      <PlanModal isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default TeamPlan;
