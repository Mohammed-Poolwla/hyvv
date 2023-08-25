import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Input,
  InputGroup,
  InputLeftAddon,
  InputLeftElement,
  InputRightAddon,
  Select,
  Text,
} from "@chakra-ui/react";
import Flags from "country-flag-icons/react/3x2";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

import { useAppStore } from "../../lib/store";

import { getCountryOption } from "../../utils/functions/options";

export interface IPhoneNumber {
  countryId: string;
}

export interface IPriceInput {
  price: number;
  setPrice: Dispatch<SetStateAction<number>>;
}

export const PhoneNumberInput: React.FC<IPhoneNumber> = ({ countryId }) => {
  const { setContactNumber, freelancerProfileData } = useAppStore();

  const countryOption = getCountryOption();
  const [selectedCountry, setSelectedCountry] = useState<string>(countryId);
  const [number, setNumber] = useState<string>("1");

  useEffect(() => {
    setSelectedCountry(countryId);
    handlePhoneCode(countryId);
  }, [countryId]);

  const FlagItem = (countryId: string) => {
    const Component = Flags[countryId];
    return <Component title={countryId} className="h-7 w-8" />;
  };

  const handleCountry = (e: any) => {
    setSelectedCountry(e.target.value);
    handlePhoneCode(e.target.value);
  };

  const handlePhoneCode = (value: string) => {
    const item: any = countryOption.find((item) => item.isoCode === value);
    setNumber(item.phoneCode);
  };

  const handleContactNumber = (e) => {
    setContactNumber(e.target.value);
  };

  return (
    <InputGroup className="flex gap-x-2">
      <InputLeftElement width="4.5rem">
        <Select
          top="8px"
          left="0"
          zIndex={2}
          bottom={0}
          opacity={0}
          height="100%"
          position="absolute"
          onChange={handleCountry}
        >
          {countryOption.map((option, index) => (
            <option value={option.isoCode} key={index}>
              {option.name}
            </option>
          ))}
        </Select>
        <Flex pl={2} width="100%" alignItems="center">
          <Box mr="10px" width="50%" flex={1}>
            {FlagItem(selectedCountry)}
          </Box>
        </Flex>
      </InputLeftElement>
      <InputLeftElement width="2.5rem" className="absolute ml-16">
        <Text className="mt-[1px] font-semibold text-gray-500">{`+${number}`}</Text>
      </InputLeftElement>
      <Input
        pl="6.8rem"
        type="tel"
        pattern="[\+0-9]+"
        placeholder="Phone Number"
        value={freelancerProfileData.personalInfo.contactNumber}
        onChange={handleContactNumber}
      />
    </InputGroup>
  );
};

const unitList = ["$", "£", "¥", "€"];

export const PriceInput: React.FC<IPriceInput> = ({ price, setPrice }) => {
  const [unit, setUnit] = useState<string>("$");

  const handleUnit = (e: any) => {
    setUnit(e.target.value);
  };

  const handleUpPrice = () => {
    setPrice(price + 1);
  };

  const handleDownPrice = () => {
    setPrice(price === 0 ? 0 : price - 1);
  };

  const handlePrice = (e: any) => {
    setPrice(Number(e.target.value));
  };

  return (
    <InputGroup>
      <InputLeftAddon bgColor="white" sx={{ paddingRight: 0 }}>
        <Select
          defaultValue={unit}
          size="md"
          opacity={0}
          onChange={handleUnit}
          sx={{ paddingLeft: 4, paddingRight: 4 }}
        >
          {unitList.map((item, index) => (
            <option value={item} key={index}>
              {item}
            </option>
          ))}
        </Select>
        <Flex className="absolute z-10 text-lg font-semibold text-gray-500">
          <Box flex={1}>{unit}</Box>
        </Flex>
      </InputLeftAddon>
      <Input value={price} type="number" onChange={handlePrice} />
      <InputRightAddon bgColor="white">
        <Box className="flex cursor-pointer flex-col">
          <ChevronUpIcon onClick={handleUpPrice} />
          <ChevronDownIcon onClick={handleDownPrice} />
        </Box>
      </InputRightAddon>
    </InputGroup>
  );
};
