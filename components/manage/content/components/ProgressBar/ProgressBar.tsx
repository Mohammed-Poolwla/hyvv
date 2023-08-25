import React from "react";

import { Progress, Text } from "@chakra-ui/react";

export interface IProgressBar {
  value: number;
}

const ProgressBar: React.FC<IProgressBar> = ({ value }) => {
  return (
    <>
      <Text fontSize="12px" color="#1e1e1e" className="mr-1">
        {value}%
      </Text>
      <Progress
        colorScheme="green"
        size="xs"
        flex="1"
        borderRadius="2xl"
        value={value}
        css={{ "&>div": { transitionProperty: "all" } }}
      />
    </>
  );
};

export default ProgressBar;
