import React, { useEffect, useState } from "react";

import { Text } from "@chakra-ui/react";

import { BsCheck2Circle, BsFillCheckSquareFill } from "react-icons/bs";

import SelectableTree from "../../../../../base/TreeView/SelectableTree";
import { trpc } from "../../../../../../utils/trpc";
import { countItemsWithoutChildren } from "../../../../../../utils/loops/onSelect";
import {
  list_to_tree,
  roundFloatToWholeNum,
} from "../../../../../../utils/functions/convert";
export interface ITaskList {
  parentData: any;
  childData: any[];
}

const TaskList: React.FC<ITaskList> = ({ parentData, childData }) => {
  const [progress, setProgress] = useState(0);
  const [selectedIds, setSelectedIds] = useState([]);
  const childTreeData = [
    ...list_to_tree(JSON.parse(JSON.stringify(childData))),
  ];
  const allCount = countItemsWithoutChildren(childTreeData);
  const updateManyBuildMutation = trpc.build.updateMany.useMutation();
  useEffect(() => {
    if (childData) {
      setSelectedIds(
        childData
          .filter((item) => item.checked)
          .map((item) => {
            return item.id;
          })
      );
    }
  }, [childData]);
  const setSelectedIdsFunc = (ids: string[]) => {
    updateManyBuildMutation.mutate({
      idList: ids,
      topParentId: parentData?.id,
      checked: true,
    });
    setProgress(Math.ceil((ids.length / allCount) * 100));
  };
  return (
    <div className="rounded-md bg-white p-4 shadow-md">
      <div className="ml-[6px] flow-root">
        <div className="float-left flex gap-2">
          <BsCheck2Circle size="24px" />
          <Text
            fontSize="14px"
            className="font-Manrope font-semibold text-hyvv-title-2"
          >
            Task List
          </Text>
        </div>
        <div className="float-right">{progress} %</div>
      </div>
      <SelectableTree
        data={childData}
        className="mt-5"
        selectedIds={selectedIds}
        setSelectedIds={setSelectedIdsFunc}
        topParent={
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-200">
              <BsFillCheckSquareFill size="14px" color="#84818A" />
            </div>
            <Text
              fontSize="28px"
              className="font-Manrope font-semibold text-hyvv-title-2"
            >
              {parentData?.title}
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
