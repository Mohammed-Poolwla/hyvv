import React from "react";

import { Input, InputGroup, InputLeftAddon, Text } from "@chakra-ui/react";

import { ChevronDownIcon } from "@chakra-ui/icons";

import { ProviderType } from "../../../../../lib/slices/freelancerProfileSlice";
import { useAppStore } from "../../../../../lib/store";

import { BsDribbble, BsLinkedin } from "react-icons/bs";

const dribbbleIcon = (
  <BsDribbble
    className="rounded-full bg-[#EA4C89] text-[#C32361]"
    size="20px"
  />
);
const linkedinIcon = <BsLinkedin className="text-[#0A66C2]" size="20px" />;

export interface ILinkInput {
  provider: ProviderType;
  link: string;
  index: number;
}

const LinkInput: React.FC<ILinkInput> = ({ provider, link, index }) => {
  const { changePortfolioItem } = useAppStore();

  const changeLink = (e) =>
    changePortfolioItem(index, provider, e.target.value);

  return (
    <div className="mt-4">
      <InputGroup>
        <InputLeftAddon bgColor="white">
          {provider === "Dribbble" ? dribbbleIcon : linkedinIcon}
          <Text
            fontSize="16px"
            className="ml-1 font-semibold text-hyvv-description"
          >
            {provider}
          </Text>
          <ChevronDownIcon color="#84818A" className="ml-1" />
        </InputLeftAddon>
        <Input value={link} onChange={changeLink} />
      </InputGroup>
    </div>
  );
};

export default LinkInput;
