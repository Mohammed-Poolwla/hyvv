import React from "react";

import { CloseButton, Text } from "@chakra-ui/react";

import moment from "moment";

import CalendarIcon from "../../../../icons/CalendarIcon";

export interface IExperienceItem {
  companyName: string;
  position: string;
  startDate: Date;
  endDate: Date;
  currentRole: boolean;
}

const ExperienceItem: React.FC<IExperienceItem> = ({
  companyName,
  position,
  startDate,
  endDate,
  currentRole,
}) => {
  return (
    <div className="rounded-md border p-4">
      <div className="flow-root">
        <div className="float-left">
          <Text fontSize="16px" className="font-bold text-hyvv-main">
            {companyName}
          </Text>
        </div>
        <div className="float-right flex ">
          <div className="mb-auto mt-auto flex">
            <CalendarIcon />
            <Text fontSize="12px" className="ml-1 text-hyvv-description">
              {moment(startDate.toLocaleString()).format("MMMM DD, YYYY")} -{" "}
              {currentRole
                ? "Current"
                : moment(endDate.toLocaleString()).format("MMMM DD, YYYY")}
            </Text>
          </div>
          <CloseButton size="sm" />
        </div>
      </div>
      <Text fontSize="12px" className="text-hyvv-description">
        {position}
      </Text>
    </div>
  );
};

export default ExperienceItem;
