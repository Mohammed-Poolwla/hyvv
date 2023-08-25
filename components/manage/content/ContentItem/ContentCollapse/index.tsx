import { useEffect, useState } from "react";

import { Badge, Collapse, Text, useDisclosure } from "@chakra-ui/react";

import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";

import { BiMessage } from "react-icons/bi";
import { TbEdit, TbTargetArrow } from "react-icons/tb";

import CheckableTree from "../../../../base/TreeView/CheckableTree";

import moment from "moment";
import Link from "next/link";
import { BsCheckCircleFill, BsCircle, BsDashCircleFill } from "react-icons/bs";
import DollarCircleIcon from "../../../../icons/DollarCircleIcon";
import SuccessIcon from "../../../../icons/SuccessIcon";
import Avatars from "../../components/Avatars/Avatars";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import ChatBox from "./ChatBox";

import {
  countCheckedItemsWithoutChildren,
  countItemsWithoutChildren,
} from "../../../../../utils/loops/onSelect";

export interface IContentCollapse {
  type: string;
  data: any;
  setSubTask: Function;
  isDragging: boolean;
  setComment: Function;
  setCommentRead: Function;
}
const ContentCollapse: React.FC<IContentCollapse> = ({
  type,
  data,
  setSubTask,
  isDragging,
  setComment,
  setCommentRead,
}) => {
  const {
    isOpen: isOpenSubTask,
    onToggle: onToggleSubTask,
    onClose: onCloseSubTask,
  } = useDisclosure();
  const {
    isOpen: isOpenChat,
    onToggle: onToggleChat,
    onClose: onCloseChat,
  } = useDisclosure();
  const [progressValue, setProgressValue] = useState(0);
  useEffect(() => {
    let allCount = countItemsWithoutChildren(data.subTask),
      checkCount = countCheckedItemsWithoutChildren(data.subTask);
    setProgressValue((checkCount / allCount) * 100);
  }, [data.subTask]);
  const setTreeData = (treeData) => {
    setSubTask(treeData, data.id);
  };

  const addComment = (comment: string, file: string[]) => {
    setComment(comment, file, data.title);
  };
  return (
    <div
      className={`${isDragging ? "opacity-90" : ""} rounded-md ${
        type === "complete" ? "border border-[#dadada]" : ""
      }`}
    >
      <div
        className={
          "rounded-md transition-all" +
          " " +
          (isDragging
            ? "bg-[#eee]"
            : type === "starting"
            ? "bg-manage-blue-light"
            : type === "in_progress"
            ? "bg-manage-green-light"
            : type === "for_review"
            ? "bg-manage-orange-light"
            : type === "complete"
            ? " bg-white"
            : "bg-white")
        }
      >
        <div
          className="flex p-2"
          onClick={() => {
            onToggleSubTask();
            onCloseChat();
          }}
        >
          <div
            className={`w-1 rounded-lg ${
              isDragging
                ? "bg-[#aaa]"
                : type === "starting"
                ? "bg-manage-blue-dark"
                : type === "in_progress"
                ? "bg-manage-green-dark"
                : type === "for_review"
                ? "bg-manage-orange-dark"
                : "bg-manage-teal-dark"
            }`}
          />
          <div className="flex flex-1 cursor-pointer justify-between rounded-[4px] p-2">
            <div className="">
              <div className="flex items-center gap-x-2">
                <Text
                  fontSize="14px"
                  color="#2e2c34"
                  className="cursor-pointer"
                >
                  {data.title}
                </Text>
                <Link href={`/manage/task/${data.id}`} passHref>
                  <TbEdit />
                </Link>

                {data.comment.filter((item) => item.read).length ? (
                  <Badge
                    variant="solid"
                    colorScheme="red"
                    width="20px"
                    height="20px"
                    borderRadius="3xl"
                    display={"flex"}
                    className="items-center justify-center"
                  >
                    {data.comment.filter((item) => item.read).length}
                  </Badge>
                ) : (
                  ""
                )}
                {type === "complete" ? <SuccessIcon className="" /> : ""}
              </div>
              <Text fontSize="12px" color="#787878" className="font-Manrope">
                {type === "starting"
                  ? `Created ${moment(data.startDate).format("DD MMMM, YYYY")}`
                  : `Last Modified ${moment(data.modifiedDate).format(
                      "DD MMMM, YYYY"
                    )}`}
              </Text>
            </div>

            {countItemsWithoutChildren(data.subTask) ? (
              <div
                onClick={() => {
                  onToggleSubTask();
                  onCloseChat();
                }}
              >
                {!isOpenSubTask ? <ChevronDownIcon /> : <ChevronUpIcon />}
              </div>
            ) : (
              ""
            )}
          </div>
        </div>

        <div>
          {type !== "complete" ? (
            <div
              className={
                `flex flex-wrap items-center justify-end gap-x-2 p-2` +
                " " +
                (isDragging
                  ? "bg-[#ddd]"
                  : type === "starting"
                  ? "bg-manage-blue-middle"
                  : type === "in_progress"
                  ? "bg-manage-green-middle"
                  : type === "for_review"
                  ? "bg-manage-orange-middle"
                  : "")
              }
            >
              {countItemsWithoutChildren(data.subTask) ? (
                <ProgressBar value={Math.trunc(progressValue)} />
              ) : (
                ""
              )}

              <div className="flex items-center gap-x-1">
                <TbTargetArrow color="#2d2b32" className="" />
                <Text
                  fontSize="14px"
                  color="#2d2b32"
                  className="mb-auto mt-auto"
                >
                  {moment(data.endDate).format("MMM D")}
                </Text>
              </div>
            </div>
          ) : (
            ""
          )}
          <div
            className={
              `flex flex-wrap items-center justify-between gap-x-2 ${
                isOpenSubTask || isOpenChat ? "" : "rounded-b-md"
              } p-2` +
              " " +
              (isDragging
                ? "bg-[#ddd]"
                : type === "starting"
                ? "bg-manage-blue-middle"
                : type === "in_progress"
                ? "bg-manage-green-middle"
                : type === "for_review"
                ? "bg-manage-orange-middle"
                : type === "complete"
                ? "bg-[#eee]"
                : "")
            }
          >
            <Avatars names={data.freelancer} />
            <div className="flex items-center gap-x-1">
              <DollarCircleIcon className="" />
              <Text fontSize="14px" color="#2d2b32">
                &#x24;{data.budget}
              </Text>
            </div>{" "}
            <div
              className={`flex items-center gap-x-1 p-1 ${
                isDragging
                  ? "bg-[#ddd]"
                  : type === "starting"
                  ? "bg-manage-blue-middle"
                  : type === "in_progress"
                  ? "bg-manage-green-middle"
                  : type === "for_review"
                  ? "bg-manage-orange-middle"
                  : ""
              }`}
            >
              <BiMessage
                color="#2d2b32"
                className="cursor-pointer"
                onClick={() => {
                  onToggleChat();
                  onCloseSubTask();
                  setCommentRead(data.title);
                }}
              />
              <Text fontSize="14px" color="#2d2b32">
                {data.comment.length}
              </Text>
            </div>
          </div>
        </div>
      </div>
      {data.subTask !== undefined ? (
        <>
          {countItemsWithoutChildren(data.subTask) ? (
            <Collapse
              in={isOpenSubTask}
              className={
                "rounded-b-md" +
                " " +
                (isDragging
                  ? "bg-[#eee]"
                  : type === "starting"
                  ? "bg-manage-blue-light"
                  : type === "in_progress"
                  ? "bg-manage-green-light"
                  : type === "for_review"
                  ? "bg-manage-orange-light"
                  : type === "complete"
                  ? "bg-[white]"
                  : "")
              }
              animateOpacity
            >
              <div className="pb-2 pr-2">
                <CheckableTree
                  treeData={data.subTask}
                  setTreeData={setTreeData}
                  checkable={true}
                  icon={{
                    check: <BsCheckCircleFill color="#08657e" />,
                    uncheck: <BsCircle color="#08657e" />,
                    halfCheck: <BsDashCircleFill color="#08657e" />,
                  }}
                />
              </div>
            </Collapse>
          ) : (
            ""
          )}

          <Collapse
            in={isOpenChat}
            className={
              "rounded-b-md" +
              " " +
              (isDragging
                ? "bg-[#eee]"
                : type === "starting"
                ? "bg-manage-blue-light"
                : type === "in_progress"
                ? "bg-manage-green-light"
                : type === "for_review"
                ? "bg-manage-orange-light"
                : type === "complete"
                ? "bg-[#f2f2f2]"
                : "")
            }
            animateOpacity
          >
            <ChatBox comment={data.comment} addComment={addComment} />
          </Collapse>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default ContentCollapse;
