import React, { Dispatch, SetStateAction } from "react";

import { Text } from "@chakra-ui/react";

import AvailableFreelancerCard from "../../../../cards/AvailableFreelancerCard/AvailableFreelancerCard";

import { IAvailableFreelancerCard } from "../../../../cards/AvailableFreelancerCard/AvailableFreelancerCard";

export interface ISetFreelancer {
  availableFreelancers: Array<IAvailableFreelancerCard>;
  setAccepted: Dispatch<SetStateAction<boolean>>;
  setSelectedUser: Dispatch<SetStateAction<number>>;
  treeData: Array<any>;
}

const SetFreelancer: React.FC<ISetFreelancer> = ({
  availableFreelancers,
  setAccepted,
  setSelectedUser,
  treeData,
}) => {
  return (
    <div className="flex h-full flex-col gap-2 p-4">
      <Text fontSize="18px" className="font-Manrope font-semibold">
        Available Freelancer
      </Text>
      <Text fontSize="14px" className="text-hyvv-description">
        There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some form, by injected humour.
      </Text>
      {availableFreelancers.map((availableFreelancer, index) => {
        return (
          <AvailableFreelancerCard
            avatar={availableFreelancer.avatar}
            name={availableFreelancer.name}
            successRate={availableFreelancer.successRate}
            bidRate={availableFreelancer.bidRate}
            setAccepted={setAccepted}
            treeData={treeData}
            selectedUser={index}
            setSelectedUser={setSelectedUser}
            key={index}
          />
        );
      })}
    </div>
  );
};

export default SetFreelancer;
