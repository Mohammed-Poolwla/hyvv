import React, { Dispatch, SetStateAction } from "react";

import { Box, Input, Select, Text } from "@chakra-ui/react";

import { PriceInput } from "../../../inputs";

import { BsInfoCircle } from "react-icons/bs";

export interface IServiceItem {
  serviceTitle: string;
  setServiceTitle: Dispatch<SetStateAction<string>>;
  servicePrice: number;
  setServicePrice: Dispatch<SetStateAction<number>>;
}

const ServiceItem: React.FC<IServiceItem> = ({
  serviceTitle,
  setServiceTitle,
  servicePrice,
  setServicePrice,
}) => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-4">
        <Box className="col-span-2 flex flex-col gap-y-1">
          <Text className="flex items-center gap-x-3 font-medium">
            Service Title
            <BsInfoCircle color="gray" />
          </Text>
          <Input
            placeholder="Service Title"
            size="md"
            value={serviceTitle}
            onChange={(e) => setServiceTitle(e.target.value)}
          />
        </Box>
        <Box className="flex flex-col gap-y-1">
          <Text className="flex items-center gap-x-3 font-medium">
            Service Price
            <BsInfoCircle color="gray" />
          </Text>
          <PriceInput price={servicePrice} setPrice={setServicePrice} />
        </Box>
        <Box className="flex flex-col gap-y-1">
          <Text className="flex items-center gap-x-3 font-medium">
            Frequency
            <BsInfoCircle color="gray" />
          </Text>
          <Select placeholder="Select Proficiency" size="md"></Select>
        </Box>
      </div>
    </div>
  );
};

export default ServiceItem;
