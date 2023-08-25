import React, { Dispatch, SetStateAction } from "react";

import Image from "next/image";

import { Text } from "@chakra-ui/react";

import Stepper from "./Stepper";

import { IStep } from "./Stepper";

export interface ISidebar {
  steps: Array<IStep>;
  activeStep: number;
  setActiveStep: Dispatch<SetStateAction<number>>;
}

const Sidebar: React.FC<ISidebar> = ({ steps, activeStep, setActiveStep }) => {
  return (
    <div className="h-full p-8">
      <Image src="/hyvv-small.png" width={61} height={47} alt="" />
      <Text className="font-Manrope text-[28px] font-bold text-[#2e2c34]">
        Welcome, Robyn G.
      </Text>
      <Text className="text-[14px] font-medium text-[#667085]">
        Great to have you on-board this platform! We &apos;re excited to welcome
        you to our community of freelancers!
      </Text>
      <hr className="my-6 border-[#e5e5e5]" />
      <Text className="font-Manrope text-[16px] font-bold text-[#1D1D1D]">
        Let&apos;s get you started
      </Text>
      <Text className="mb-6 text-[12px] text-[#667085]">
        Get personalized feedback to get more from the platform
      </Text>
      <Stepper
        steps={steps}
        activeStep={activeStep}
        setActiveStep={setActiveStep}
      />
    </div>
  );
};

export default Sidebar;
