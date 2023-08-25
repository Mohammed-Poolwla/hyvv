import React from "react";

import { Text } from "@chakra-ui/react";

import { BsCheck2Circle, BsFillCheckSquareFill } from "react-icons/bs";

import TreeView from "../../../base/TreeView/StaticTreeView";

export interface ITaskList {
  title: string | string[];
  treeData: Array<any>;
}

const TaskList: React.FC<ITaskList> = ({ title, treeData }) => {
  return (
    <div className="rounded-md bg-white p-4 shadow-md">
      <div className="flex gap-2">
        <BsCheck2Circle size="24px" />
        <Text
          fontSize="14px"
          className="font-Manrope font-semibold text-hyvv-title-2"
        >
          Task List
        </Text>
      </div>

      <TreeView
        data={treeData}
        className="mt-5"
        topParent={
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-200">
              <BsFillCheckSquareFill size="14px" color="#84818A" />
            </div>
            <Text
              fontSize="28px"
              className="font-Manrope font-semibold text-hyvv-title-2"
            >
              {title}
            </Text>
            <Text
              fontSize="28px"
              className="font-Manrope font-semibold text-hyvv-description"
            >
              #42903
            </Text>
          </div>
        }
      />
    </div>
  );
};

export default TaskList;
