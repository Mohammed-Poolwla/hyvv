import React, { Dispatch, SetStateAction } from "react";

import { Button, Collapse, Text, useDisclosure } from "@chakra-ui/react";

import { ChevronDownIcon } from "@chakra-ui/icons";

import BadgeAvatar from "../FreelancerCard/BadgeAvatar/BadgeAvatar";

import TreeView from "../../base/TreeView/StaticTreeView";
import SuccessIcon from "../../icons/SuccessIcon";

export interface IAvailableFreelancerCard {
  avatar: string;
  name: string;
  successRate: number;
  bidRate: number;
  setAccepted?: Dispatch<SetStateAction<boolean>>;
  treeData?: Array<any>;
  selectedUser?: number;
  setSelectedUser?: Dispatch<SetStateAction<number>>;
}

const AvailableFreelancerCard: React.FC<IAvailableFreelancerCard> = ({
  avatar,
  name,
  successRate,
  bidRate,
  setAccepted,
  treeData,
  selectedUser,
  setSelectedUser,
}) => {
  const { isOpen, onToggle } = useDisclosure();

  const handleAccept = () => {
    setAccepted(true);
    setSelectedUser(selectedUser);
  };

  return (
    <div className="rounded-md border">
      <div className="flex gap-2 p-4">
        <BadgeAvatar avatar={avatar} isOnline={true} />
        <div className="flow-root w-full">
          <div className="float-left flex flex-col gap-1">
            <Text fontSize="16px" className="font-semibold">
              {name}
            </Text>
            <div className="flex">
              <SuccessIcon />
              <Text fontSize="12px" color="#27ae60" className="font-Manrope">
                {successRate}% Success Rate
              </Text>
            </div>
          </div>
          <div className="float-right">
            <Text fontSize="13px" className="font-medium text-hyvv-description">
              Bid Rate
            </Text>
            <Text fontSize="20px" className="font-bold text-hyvv-title-1">
              $ {bidRate}
            </Text>
          </div>
        </div>
      </div>
      <div className={`border-t ${isOpen ? "p-4" : "p-2"}`}>
        <div
          className={`flex cursor-pointer gap-1 ${isOpen ? "hidden" : ""}`}
          onClick={onToggle}
        >
          <Text
            fontSize="14px"
            className="m-auto font-medium text-hyvv-description"
          >
            View Offer
            <ChevronDownIcon className="mb-auto ml-1 mt-auto" />
          </Text>
        </div>
        <Collapse in={isOpen} animateOpacity>
          <div className="h-full min-h-[1px]">
            <TreeView data={treeData} />
            <div className="flex gap-x-4">
              <Button
                variant="outline"
                colorScheme="red"
                className="flex-1"
                onClick={onToggle}
              >
                Reject
              </Button>
              <Button
                colorScheme="main"
                className="flex-1"
                onClick={handleAccept}
              >
                Accept & Continue
              </Button>
            </div>
          </div>
        </Collapse>
      </div>
    </div>
  );
};

export default AvailableFreelancerCard;
