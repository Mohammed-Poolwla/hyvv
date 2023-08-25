import React, { Dispatch, SetStateAction } from "react";

import {
  Box,
  Text,
  Step,
  StepDescription,
  StepIndicator,
  Stepper,
  StepSeparator,
  StepStatus,
  StepTitle,
} from "@chakra-ui/react";

import { BsCheck, BsFillRecordCircleFill } from "react-icons/bs";

export interface IStep {
  title: string;
  description: string;
  subLevel?: number;
}

export interface IFreelancerStepper {
  steps: Array<IStep>;
  activeStep: number;
  setActiveStep: Dispatch<SetStateAction<number>>;
}

const FreelancerStepper: React.FC<IFreelancerStepper> = ({
  steps,
  activeStep,
}) => {
  return (
    <Stepper
      index={activeStep}
      orientation="vertical"
      size="sm"
      colorScheme="main"
      rowGap={0}
    >
      {steps.map((step, index) => {
        return (
          <Step key={index}>
            <div className="flex flex-col items-center">
              <StepIndicator sx={{ border: "none" }}>
                <StepStatus
                  complete={<BsCheck size={26} color="#fff" />}
                  active={<BsFillRecordCircleFill size={26} color="#08657E" />}
                  incomplete={
                    <BsFillRecordCircleFill size={26} color="#C5C8CF" />
                  }
                />
              </StepIndicator>
              <StepSeparator
                as={Box}
                sx={{
                  position: "inherit !important",
                  maxHeight: "100% !important",
                  background: "#",
                  width: "0px !important",
                  borderColor: "#c5c8cf",
                  borderWidth: "1px",
                }}
                css={{
                  "&[data-status=complete]": {
                    borderColor: "#08657e",
                  },
                  "&[data-status=active]": {
                    borderColor: "#08657e",
                    borderStyle: "dashed",
                  },
                }}
              />
            </div>

            <Box flexShrink="1" className="w-full pr-10">
              <StepTitle
                className={`font-Manrope font-bold ${
                  index <= activeStep ? "text-[#08657E]" : "text-[#2E2C34]"
                }`}
                as={Text}
                sx={{ fontWeight: "bold", fontSize: "15px" }}
              >
                {step.title}
              </StepTitle>
              <StepDescription
                as={Text}
                className="break-words pb-4"
                sx={{ fontSize: "14px", color: "#667085" }}
              >
                {step.description}
              </StepDescription>
            </Box>
          </Step>
        );
      })}
    </Stepper>
  );
};

const titleStyles = {
  notSelected: "",
  selected: "font-Manrope text-hyvv-main",
};

export default FreelancerStepper;
