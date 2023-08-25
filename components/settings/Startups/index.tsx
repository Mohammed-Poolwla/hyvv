import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import Image from "next/image";
import { useState } from "react";
import StatusIcon from "../../icons/StatusIcon";
import UserIcon from "../../icons/UserIcon";

import { useAppStore } from "../../../lib/store";
import { trpc } from "../../../utils/trpc";

type StartUp = {
  id?: string;
  isActive?: boolean;
  isFounder?: boolean;
  jobTitle?: string;
  startupId?: string;
  startupName?: string;
  startupType?: string;
};

const StartUps = () => {
  const { setSelectedStartup, startupData, removeStartUp } = useAppStore();
  const [selectedEmployer, setSelectedEmployer] = useState<StartUp>({});
  const [status, setStatus] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const deleteEmployer = trpc.employee.delete.useMutation();
  const deleteStartup = trpc.startup.delete.useMutation();

  const leaveStartUp = () => {
    setLoading(true);
    deleteEmployer.mutate(
      {
        id: selectedEmployer.id,
      },
      {
        onSuccess: () => {
          setLoading(false);
          removeStartUp(selectedEmployer.id);
          if (selectedEmployer.startupId === startupData.selectedStartup[0]) {
            setSelectedStartup("", "");
          }
          if (selectedEmployer.isFounder) setStatus(true);
          else {
            onClose();
          }
        },
      }
    );
  };

  const delStartUp = () => {
    setLoading(true);
    deleteStartup.mutate(
      {
        id: selectedEmployer.startupId,
      },
      {
        onSuccess: () => {
          setLoading(false);
          onClose();
        },
      }
    );
  };

  const leave = (item: StartUp) => {
    setStatus(false);
    setSelectedEmployer(item);
    onOpen();
  };

  return (
    <>
      <div className="flex flex-col justify-between gap-y-4 px-6">
        {startupData.startupList.map((item, i) => {
          return (
            <div
              key={i}
              className="flex items-center gap-x-4 rounded-lg border border-[#e8e8e8] px-6 py-4"
            >
              <div className="flex flex-1 items-center gap-x-3">
                <Image
                  src={"/startups/Mindfulness.png"}
                  alt="startup-logo"
                  width={40}
                  height={40}
                />
                <div className="flex flex-col">
                  <span className="text-[20px] font-bold text-[#000929]">
                    {item.startupName}
                  </span>
                  <span className="text-[15px] text-[#AFAFAF]">
                    {"hello@vertigo.com"}
                  </span>
                </div>
              </div>
              <div className="h-[30px] w-px bg-[#e8e8e8]" />
              <div className="flex flex-1 items-center gap-x-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#ebebeb] text-[#08657e]">
                  <UserIcon />
                </div>
                <div className="flex flex-col">
                  <span className="text-[15px] text-[#6C727F]">Role</span>
                  <span className="text-[18px] font-semibold">
                    {item.jobTitle}
                  </span>
                </div>
              </div>
              <div className="h-[30px] w-px bg-[#e8e8e8]" />
              <div className="flex flex-1 items-center gap-x-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#ebebeb] text-[#08657e]">
                  <StatusIcon />
                </div>
                <div className="flex flex-col">
                  <span className="text-[15px] text-[#6C727F]">Status</span>
                  <span
                    className={`text-[18px] ${
                      item.isActive ? "text-[#39a430]" : "text-[#aaaaaa]"
                    } font-semibold`}
                  >
                    {item.isActive ? "Active" : "DisActive"}
                  </span>
                </div>
              </div>
              <Button
                colorScheme="red"
                variant={"outline"}
                onClick={() => leave(item)}
              >
                Leave Startup
              </Button>
            </div>
          );
        })}
      </div>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            {status ? "Delete" : "Leave"}
            <Text color="#38A169" className="inline">
              {selectedEmployer["startupName"]}
            </Text>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {status ? "Are you deleting" : "Are you leaving"}{" "}
            {selectedEmployer["startupName"]}?
          </ModalBody>

          <ModalFooter>
            <Button variant="ghost" mr={3} onClick={onClose} size="sm">
              Cancel
            </Button>
            {status ? (
              <Button
                isLoading={loading}
                colorScheme="red"
                onClick={delStartUp}
                size="sm"
                spinnerPlacement="start"
                loadingText="Deleting"
              >
                Delete
              </Button>
            ) : (
              <Button
                isLoading={loading}
                colorScheme="red"
                onClick={leaveStartUp}
                size="sm"
                spinnerPlacement="start"
                loadingText="Leaving"
              >
                Leave
              </Button>
            )}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default StartUps;
