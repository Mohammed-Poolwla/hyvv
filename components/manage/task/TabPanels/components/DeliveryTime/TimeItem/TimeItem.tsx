import React from "react";

import { Text } from "@chakra-ui/react";

export interface ITimeItem {
  name: string;
  description: string;
  showBorder?: boolean;
}

const TimeItem: React.FC<ITimeItem> = ({ name, description, showBorder }) => {
  return (
    <div
      className={`flex flex-col items-center justify-center ${
        showBorder === true ? "border-r" : null
      }`}
    >
      <Text fontSize="28px" className="font-bold text-hyvv-title-1">
        {name}
      </Text>
      <Text
        fontSize="14px"
        className="font-Manrope font-medium text-hyvv-description"
      >
        {description}
      </Text>
    </div>
  );
};

export default TimeItem;
