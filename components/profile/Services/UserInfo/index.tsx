import React from "react";

import { Avatar, Button, Text } from "@chakra-ui/react";

import { useAppStore } from "../../../../lib/store";

import PositionIcon from "../../../icons/PositionIcon";

export interface IUserInfo {}

const UserInfo: React.FC<IUserInfo> = () => {
  const { freelancerProfileData } = useAppStore();

  return (
    <div className="rounded-md bg-white shadow-md">
      <div className="flex border-b p-4">
        <Avatar
          size="lg"
          src={freelancerProfileData.personalInfo.profilePicture}
          name={
            freelancerProfileData.personalInfo.firstName +
            " " +
            freelancerProfileData.personalInfo.lastName
          }
        />
        <div className="grid grid-rows-2 pl-1">
          <Text fontSize="18px" color="#2a2044" className="pl-1 font-bold">
            {freelancerProfileData.personalInfo.firstName +
              " " +
              freelancerProfileData.personalInfo.lastName}
          </Text>
          <div className="mt-auto flex">
            <PositionIcon color="#08657e" />
            <Text fontSize="14px" color="#08657e" className="font-bold">
              {freelancerProfileData.personalInfo.currentCity +
                " , " +
                freelancerProfileData.personalInfo.country}
            </Text>
          </div>
        </div>
      </div>
      <div className="p-4">
        <Button variant="outline" className="w-full">
          Hire Now
        </Button>
      </div>
    </div>
  );
};

export default UserInfo;
