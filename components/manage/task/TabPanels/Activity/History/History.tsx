import React, { useState } from "react";

// import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import { BsCheck2Circle, BsJustifyLeft } from "react-icons/bs";
import CalendarIcon from "../../../../../icons/CalendarIcon";

import TaskHistory from "./TaskHistory/TaskHistory";

import ChatHistory, { IChatItem } from "./ChatHistory/ChatHistory";
import { ITaskItem } from "./TaskHistory/TaskHistory";

const taskHistories: Array<ITaskItem> = [
  {
    title: "You submitted the Task List",
    date: "May 2, 4:23 PM",
    icon: (
      <BsCheck2Circle className="h-full w-full rounded-full bg-[#CEE0E5] p-2 text-hyvv-main" />
    ),
  },
  {
    title: "You placed the order",
    date: "May 1, 7:10 PM",
    icon: (
      <BsJustifyLeft className="h-full w-full rounded-full bg-[#EFFAEE] p-2 text-[#5FC454]" />
    ),
  },
  {
    title: "Your delivery date was updated to May 07",
    date: "May 1, 7:10 PM",
    icon: (
      <CalendarIcon
        color="#4353FF"
        className="h-full w-full rounded-full bg-[#D6DAFF] p-2"
      />
    ),
    hiddenBorder: true,
  },
];

export interface IHistory {}

const History: React.FC<IHistory> = () => {
  const [chatHistories, setChatHistories] = useState<Array<IChatItem>>([
    {
      date: "May 3, 2023",
      history: [
        {
          avatar: "/avatar2.png",
          sender: "Dennis Callis",
          to: "You",
          time: "May 1, 7:10 PM",
          message:
            "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex There are many variations of passages of Lorem Ipsum available, but the majority have suffered alternation in some form",
        },
        {
          avatar: "/avatar3.png",
          sender: "You",
          to: "Dennis Callis",
          time: "May 1, 7:10 PM",
          message: "Thank you, looking great.",
        },
      ],
    },
    {
      date: "Today",
      history: [
        {
          avatar: "/avatar2.png",
          sender: "Dennis Callis",
          to: "You",
          time: "May 1, 7:10 PM",
          message:
            "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip",
          images: ["/attachment1.png", "/attachment2.png"],
        },
      ],
    },
  ]);

  return (
    <div className="rounded-md bg-white shadow-md">
      <TaskHistory taskHistories={taskHistories} />
      <ChatHistory
        chatHistories={chatHistories}
        setChatHistories={setChatHistories}
      />
    </div>
  );
};

export default History;
