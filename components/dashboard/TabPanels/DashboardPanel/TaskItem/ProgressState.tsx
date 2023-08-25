import React from "react";

import { Text } from "@chakra-ui/react";

import { FcCheckmark } from "react-icons/fc";
import { RiContrastLine } from "react-icons/ri";

export interface IProgressState {
  progressState: string;
}

const ProgressState: React.FC<IProgressState> = ({ progressState }) => {
  let color = "#3c8ef9";
  let bgColor = "bg-blue-200";

  if (progressState === "Completed") {
    color = "#019939";
    bgColor = "bg-green-200";
  } else if (progressState === "On Hold") {
    color = "#ec980c";
    bgColor = "bg-orange-200";
  }

  return (
    <div className={"flex rounded-md p-1" + " " + bgColor}>
      {progressState === "Completed" ? (
        <FcCheckmark className="mt-auto mb-auto" />
      ) : progressState === "On Hold" ? (
        <RiContrastLine color={color} className="mt-auto mb-auto" />
      ) : (
        <RiContrastLine color={color} className="mt-auto mb-auto" />
      )}
      <Text fontSize="xs" color={color} className="pl-1">
        {progressState}
      </Text>
    </div>
  );
};

export default ProgressState;
