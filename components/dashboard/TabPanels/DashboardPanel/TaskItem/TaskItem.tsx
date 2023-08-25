import React, { ReactNode } from "react";

import { Text } from "@chakra-ui/react";

import { BiMessage } from "react-icons/bi";
import { TbTargetArrow } from "react-icons/tb";

import ProgressBar from "./ProgressBar";
import ProgressState from "./ProgressState";

export interface ITaskItem {
  icon: ReactNode;
  title: string;
  progressState: string;
  progress: number;
  messages: number;
  startDate: string;
}

const TaskItem: React.FC<ITaskItem> = ({
  icon,
  title,
  progressState,
  progress,
  messages,
  startDate,
}) => {
  return (
    <div className="mt-2 rounded-md border border-gray-300">
      <div className="flow-root p-2">
        <div className="float-left flex">
          {icon}
          <Text as="b" className="ml-1">
            {title}
          </Text>
        </div>
        <div className="float-right">
          <ProgressState progressState={progressState} />
        </div>
      </div>
      <div className="flow-root rounded-b-md bg-gray-100 p-1">
        <div className="float-left flex p-1">
          <Text color="#84818a">{progress}% Complete</Text>
          <ProgressBar value={progress} />
        </div>
        <div className="float-right flex p-1">
          <BiMessage color="#2d2b32" className="mt-auto mb-auto" />
          <Text color="#2d2b32" className="ml-1">
            {messages}
          </Text>
          <TbTargetArrow color="#2d2b32" className="mt-auto mb-auto ml-1" />
          <Text color="#2d2b32" className="ml-1">
            {startDate}
          </Text>
        </div>
      </div>
    </div>
  );
};

export default TaskItem;
