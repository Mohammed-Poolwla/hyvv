import React from "react";

import { Text } from "@chakra-ui/react";

export interface IDetailItem {
  leftText: string;
  rightText: string;
  hiddenBorder?: boolean;
}

const DetailItem: React.FC<IDetailItem> = ({
  leftText,
  rightText,
  hiddenBorder,
}) => {
  return (
    <div
      className={`flex justify-between ${
        hiddenBorder !== true ? "border-b" : null
      } p-3`}
    >
      <Text fontSize="16px" className="font-medium text-hyvv-description">
        {leftText}
      </Text>
      <Text fontSize="16px" className="font-semibold text-hyvv-title-2">
        {rightText}
      </Text>
    </div>
  );
};

export default DetailItem;
