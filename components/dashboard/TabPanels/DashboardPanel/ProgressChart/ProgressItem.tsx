import React from "react";

import { Progress, Text } from "@chakra-ui/react";

export interface IProgressItem {
  title: string;
  progress: number;
}

const ProgressItem: React.FC<IProgressItem> = ({ title, progress }) => {
  return (
    <div className="pl-8 pr-8 pt-2 pb-2">
      <div className="mb-1 flex">
        <Text as="b">{title}</Text>
        <Text color="#c8c8c8" className="ml-1">
          {progress}%
        </Text>
      </div>
      <Progress
        backgroundColor="#ffffff"
        height="16px"
        borderRadius="5px"
        value={progress}
      />
    </div>
  );
};

export default ProgressItem;
