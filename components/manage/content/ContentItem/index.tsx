import React from "react";

import { AddIcon } from "@chakra-ui/icons";
import { Button, Text } from "@chakra-ui/react";

import { Draggable, ResponderProvided } from "react-beautiful-dnd";
import ContentCollapse from "./ContentCollapse";

import { useAppStore } from "../../../../lib/store";
import { trpc } from "../../../../utils/trpc";
import CircleIcon from "../../../icons/CircleIcon";
import { ISubTask } from "../ManageContent";
import {
  getCheckedListLoop,
  countCheckedItemsWithoutChildren,
  countItemsWithoutChildren,
} from "../../../../utils/loops/onSelect";

export interface IContentItem {
  type: string;
  provided: ResponderProvided;
}

const ContentItem: React.FC<IContentItem> = ({ type, provided }) => {
  const { manageData, setManageDataByKey, moveItemFromTo } = useAppStore();
  const updateBuildMutation = trpc.build.update.useMutation();
  const updateManyBuildMutation = trpc.build.updateMany.useMutation();

  const data = manageData[type].items;
  const setSubTask = (subTaskData: ISubTask[], id: string) => {
    const temp = data.slice();

    temp[data.map((e) => e.id).indexOf(id)].subTask = subTaskData;
    setManageDataByKey(temp, type);

    updateManyBuildMutation.mutate({
      idList: getCheckedListLoop(subTaskData),
      topParentId: id,
      checked: true,
    });
    const allCount = countItemsWithoutChildren(subTaskData),
      checkCount = countCheckedItemsWithoutChildren(subTaskData);
    if (type === "starting" && checkCount != 0) {
      updateBuildMutation.mutate(
        {
          id: id,
          status: "IN_PROGRESS",
        },
        {
          onSuccess: () => {
            moveItemFromTo(id, "starting", "in_progress");
          },
        }
      );
    } else if (type === "in_progress" && checkCount === allCount) {
      updateBuildMutation.mutate(
        {
          id: id,
          status: "FOR_REVIEW",
        },
        {
          onSuccess: () => {
            moveItemFromTo(id, "in_progress", "for_review");
          },
        }
      );
    }
  };

  const setComment = (comment: string, file: string[], title: string) => {
    const temp = data.slice();
    temp[data.map((e) => e.title).indexOf(title)].comment.push({
      author: "Mark Palmer",
      date: new Date(),
      read: false,
      content: comment,
      file: file,
    });
    setManageDataByKey(temp, type);
  };

  const setCommentRead = (title: string) => {
    const temp = data.slice();
    temp[data.map((e) => e.title).indexOf(title)].comment.map(
      (item) => (item.read = false)
    );
    setManageDataByKey(temp, type);
  };

  return (
    <>
      <div className="flex h-full flex-col rounded-md bg-white p-4 shadow-md">
        <div className="mb-2 flex justify-between">
          <div className="flex">
            <CircleIcon
              color={
                type === "starting"
                  ? "#00a5ff"
                  : type === "in_progress"
                  ? "#27ae60"
                  : type === "for_review"
                  ? "#f4be50"
                  : type === "complete"
                  ? "#08657e"
                  : ""
              }
            />
            <Text fontSize="20px" color="#040612" className="ml-2 capitalize">
              {type.replace("_", " ")}
            </Text>
          </div>
          <Text fontSize="18px" color="#84818a">
            {data.length}
          </Text>
        </div>
        <Button
          variant="outline"
          leftIcon={<AddIcon color="#08657e" />}
          className="w-full"
        >
          <Text fontSize="14px" color="#08657e" className="font-Manrope">
            Add New
          </Text>
        </Button>
        <div
          {...provided.droppableProps}
          ref={provided.innerRef}
          className="flex-1"
        >
          <div className="mt-2 flex flex-col gap-y-2">
            {data[0] !== null &&
              data.map((collapseItem: any, index: number) => (
                <Draggable
                  key={collapseItem.id}
                  draggableId={collapseItem.id}
                  index={index}
                >
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <ContentCollapse
                        key={index}
                        type={type}
                        data={collapseItem}
                        setSubTask={setSubTask}
                        setComment={setComment}
                        setCommentRead={setCommentRead}
                        isDragging={snapshot.isDragging}
                      />
                    </div>
                  )}
                </Draggable>
              ))}
            {provided.placeholder}
          </div>
        </div>
      </div>
    </>
  );
};

export default ContentItem;
