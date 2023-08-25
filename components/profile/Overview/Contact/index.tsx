import NextLink from "next/link";

import { Link, Text } from "@chakra-ui/react";

import { BsBehance, BsDribbble, BsLinkedin } from "react-icons/bs";

import { useAppStore } from "../../../../lib/store";
import { IoMail } from "react-icons/io5";
import { HiPhone } from "react-icons/hi";

const SiteIcon = {
  LinkedIn: <BsLinkedin className="text-[#0A66C2]" size={"25px"} />,
  Behance: <BsBehance size={"25px"} />,
  Dribbble: (
    <BsDribbble
      className="rounded-full bg-[#EA4C89] text-[#C32361]"
      size={"25px"}
    />
  ),
};

const Contact = () => {
  const { freelancerProfileData } = useAppStore();

  return (
    <div className="flex w-full flex-col gap-2 rounded-lg bg-white p-5 text-xl shadow-md">
      <Text className="font-bold">Contact</Text>
      <div className="flex flex-col gap-y-3">
        <div className="flex items-center gap-x-2">
          <div className="rounded-full border border-[#dadada] p-2 text-[#84818a]">
            <IoMail size={"25px"} />
          </div>
          <div className="flex flex-col gap-y-1">
            <span className="text-[16px] font-medium leading-none text-[#747474]">
              Email
            </span>
            <span className="text-[18px] font-medium leading-none text-[#020202]">
              renasaevu@bej.edu
            </span>
          </div>
        </div>
        <div className="flex items-center gap-x-2">
          <div className="rounded-full border border-[#dadada] p-2 text-[#84818a]">
            <HiPhone size={"25px"} />
          </div>
          <div className="flex flex-col gap-y-1">
            <span className="text-[16px] font-medium leading-none text-[#747474]">
              Phone
            </span>
            <span className="text-[18px] font-medium leading-none text-[#020202]">
              (636) 296-7838
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
