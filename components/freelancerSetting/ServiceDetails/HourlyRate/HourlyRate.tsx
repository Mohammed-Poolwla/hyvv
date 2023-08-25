import { Input, InputGroup, InputLeftAddon, Text } from "@chakra-ui/react";

import { ChevronDownIcon } from "@chakra-ui/icons";

import { useAppStore } from "../../../../lib/store";

const HourlyRate = () => {
  const { setHourlyRate, freelancerProfileData } = useAppStore();

  return (
    <div className="rounded-md border p-4">
      <Text fontSize="18px" className="font-bold text-hyvv-main">
        Hourly Rate
      </Text>
      <Text fontSize="12px" className="mb-2 text-hyvv-description">
        The amount of money charges for one hour of the work.
      </Text>
      <InputGroup>
        <InputLeftAddon bgColor="white">
          <Text fontSize="16px" className="font-semibold text-hyvv-description">
            $
          </Text>
          <ChevronDownIcon color="#84818A" className="ml-1" />
        </InputLeftAddon>
        <Input
          type="number"
          value={freelancerProfileData.serviceDetails.hourlyRate}
          onChange={(e) => setHourlyRate(parseFloat(e.target.value))}
        />
      </InputGroup>
    </div>
  );
};

export default HourlyRate;
