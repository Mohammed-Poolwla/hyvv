import React, { Dispatch, SetStateAction, useState } from "react";

import { Button, Collapse, Text, Textarea } from "@chakra-ui/react";

import { CheckIcon, ChevronDownIcon } from "@chakra-ui/icons";
import CalendarIcon from "../../../icons/CalendarIcon";
import EditIcon from "../../../icons/EditIcon";

export interface ITaskDetails {
  description: string;
  setDescription: Dispatch<SetStateAction<string>>;
}

const TaskDetails: React.FC<ITaskDetails> = ({
  description,
  setDescription,
}) => {
  const [show, setShow] = useState(false);

  const [isEditing, setIsEditing] = useState(false);

  const handleToggle = () => setShow(!show);

  const handleChange = () => setIsEditing(true);

  const handleComplete = () => setIsEditing(false);

  return (
    <div className="rounded-md bg-white shadow-md">
      <div className="rounded-t-md bg-white p-4">
        <div className="mb-2 flex items-center justify-between">
          <div className="flex items-center">
            <Text fontSize="18px" className="font-semibold">
              Task Details
            </Text>{" "}
            <ChevronDownIcon fontSize="18px" className="mb-auto ml-1 mt-auto" />
          </div>

          {isEditing ? (
            <Button
              leftIcon={<CheckIcon />}
              colorScheme="main"
              variant="ghost"
              size="xs"
              onClick={handleComplete}
            >
              <Text className="font-Manrope font-bold">Complete</Text>
            </Button>
          ) : (
            <Button
              leftIcon={<EditIcon />}
              colorScheme="main"
              variant="ghost"
              size="xs"
              onClick={handleChange}
            >
              <Text className="font-Manrope text-[13px] font-bold">Change</Text>
            </Button>
          )}
        </div>
        <Collapse startingHeight={80} in={show}>
          {isEditing ? (
            <Textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          ) : (
            <Text fontSize="14px">{description}</Text>
          )}
        </Collapse>
        {isEditing ? (
          <></>
        ) : (
          <Button
            onClick={handleToggle}
            colorScheme="main"
            variant="link"
            className="mt-2"
          >
            <Text fontSize="14px" className="font-Manrope">
              Show {show ? "Less" : "Full"} Description
            </Text>
          </Button>
        )}
      </div>
      <div className="flex flex-col gap-2 rounded-b-md border-t border-[#e8e8e8] bg-[#f7f9f9] p-4">
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <Text fontSize="16px" className="font-medium text-hyvv-description">
              Duration
            </Text>
            <div className="flex items-center gap-2 border-gray-400">
              <CalendarIcon />
              <Text fontSize="16px" className="font-semibold text-hyvv-title-1">
                7 Days
              </Text>
              <div className="h-6 w-[1px] bg-[#dadcdc]" />
              <Text fontSize="16px" className="font-semibold text-hyvv-title-1">
                Weekly
              </Text>
            </div>
          </div>
          <div className="flex flex-col items-end">
            <Text fontSize="16px" className="font-medium text-hyvv-description">
              Your Budget
            </Text>
            <Text fontSize="28px" className="font-bold text-hyvv-title-1">
              $ 350
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskDetails;
