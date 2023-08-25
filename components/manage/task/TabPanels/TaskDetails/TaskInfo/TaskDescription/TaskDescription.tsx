import React from "react";

import { Button, Collapse, Text, useDisclosure } from "@chakra-ui/react";

import { HamburgerIcon } from "@chakra-ui/icons";

export interface ITaskDescription {}

const TaskDescription: React.FC<ITaskDescription> = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-2">
        <HamburgerIcon className="mb-auto mt-auto" />
        <Text fontSize="14px" className="font-semibold text-hyvv-title-1">
          Task Description
        </Text>
      </div>
      <div className="ml-6 flex flex-col gap-2">
        <Collapse startingHeight={60} in={isOpen}>
          <Text fontSize="14px" className="text-hyvv-title-2">
            Some kind of short description go here to better explain the
            recommanded task. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex There are many variations of passags of
            Lorem Ipsum available, but the majority have suffered alteration in
            some form, by injected humour, or randomised words which don&apos;t
            look even slightly believable. ea sommodo consequat...
          </Text>
        </Collapse>
        <Button
          colorScheme="main"
          variant="link"
          className="mr-auto flex"
          onClick={onToggle}
        >
          <Text fontSize="14px" className="font-Manrope">
            Show Full Description
          </Text>
        </Button>
      </div>
    </div>
  );
};

export default TaskDescription;
