import React, { ReactNode } from "react";

import { Text } from "@chakra-ui/react";
import {
  Step,
  StepIndicator,
  Stepper,
  StepSeparator,
  useSteps,
} from "@chakra-ui/stepper";

export interface ITaskItem {
  title: string;
  date: string;
  icon: ReactNode;
  hiddenBorder?: boolean;
}

export interface ITaskHistory {
  taskHistories: Array<ITaskItem>;
}

const TaskHistory: React.FC<ITaskHistory> = ({ taskHistories }) => {
  const { activeStep } = useSteps({
    index: -1,
    count: taskHistories.length,
  });

  return (
    <Stepper
      index={activeStep}
      size="lg"
      orientation="vertical"
      className="p-4"
    >
      {taskHistories.map((step, index) => (
        <Step className="w-full" key={index}>
          <StepIndicator className="border-none">{step.icon}</StepIndicator>

          <div
            className={`mb-4 mt-2 flex w-full gap-2 ${
              step.hiddenBorder ?? "border-b"
            } pb-8`}
          >
            <Text fontSize="16px" className="font-semibold text-hyvv-title-2">
              {step.title}
            </Text>
            <Text
              fontSize="14px"
              className="pt-[0.05rem] font-medium text-hyvv-description"
            >
              {step.date}
            </Text>
          </div>

          <StepSeparator className="border border-dashed border-white bg-none" />
        </Step>
      ))}
    </Stepper>
  );
};

export default TaskHistory;
