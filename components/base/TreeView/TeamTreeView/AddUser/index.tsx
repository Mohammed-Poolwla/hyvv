import React, { useState } from "react";

import Image from "next/image";

import { AddIcon } from "@chakra-ui/icons";
import {
  Button,
  IconButton,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";

import { trpc } from "../../../../../utils/trpc";

import { useAppStore } from "../../../../../lib/store";

import { validateEmail } from "../../../../../utils/functions/validate";

import useCustomToast from "../../../../../utils/toast";

export interface IAddUser {
  parent?: string;
}

const AddUser: React.FC<IAddUser> = ({ parent }) => {
  const { addNewEmployee, startupData } = useAppStore();

  const addEmployeeMutation = trpc.employee.addEmployee.useMutation();

  const {
    isOpen: isModalOpen,
    onClose: onModalClose,
    onOpen: onModalOpen,
  } = useDisclosure();

  const showToast = useCustomToast();

  const [goalGroup, setGoalGroup] = useState([{ goal: "", budget: "" }]);

  const [email, setEmail] = useState("");
  const user = trpc.user.byEmail.useQuery({ email });

  const [userTitle, setUserTitle] = useState("");

  const [showInvalidMsg, setShowInvalidMsg] = useState(false);

  const handleAddGoal = () => {
    setGoalGroup([...goalGroup, { goal: "", budget: "" }]);
  };

  const handleChange = (e, index, key) => {
    const updatedGroup = goalGroup.map((group, i) => {
      if (i === index) {
        return { ...group, [key]: e.target.value };
      }
      return group;
    });

    setGoalGroup(updatedGroup);
  };

  const addNewUser = () => {
    if (!email) {
      showToast({
        title: "Email was empty",
        status: "warning",
      });

      return;
    }

    if (!userTitle) {
      showToast({
        title: "UserTitle was empty",
        status: "warning",
      });

      return;
    }

    if (!user.data) {
      showToast({
        title: "That user is not registered with HYVV",
        status: "warning",
      });

      return;
    }

    addEmployeeMutation.mutate(
      {
        jobTitle: userTitle,
        userId: user.data.id,
        startUpId: startupData.selectedStartup[0],
        parent: parent,
      },
      {
        onSuccess: (employee) => {
          addNewEmployee(parent, {
            id: employee.id,
            name: user.data.firstName + " " + user.data.lastName,
            role: userTitle,
          });

          const data = {
            email,
            userName: user.data.firstName + " " + user.data.lastName,
            userTitle,
            companyName: startupData.selectedStartup[1],
          };

          fetch("/api/users/email", {
            method: "POST",
            headers: {
              Accept: "application/json, text/plain, */*",
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          }).then((res) => {
            console.log(res);
            if (res.status === 200) {
              showToast({
                title: "Invitation Email sent successfully!",
                status: "success",
              });
            }
          });
        },
      }
    );

    onModalClose();
  };

  return (
    <>
      <IconButton
        colorScheme="main"
        sx={{ borderRadius: "50px" }}
        aria-label="Search database"
        icon={<AddIcon />}
        onClick={onModalOpen}
      />
      <Modal isOpen={isModalOpen} onClose={onModalClose} size="lg">
        <ModalOverlay />
        <ModalContent className="font-Plus_Jakarta_Sans">
          <ModalCloseButton sx={{ top: 4, right: 4, color: "#727279" }} />
          <ModalBody p={0}>
            <div className="flex flex-col">
              <div className="flex flex-col gap-y-4 p-4">
                <div className="flex items-center gap-x-4 rounded-md bg-[#e6eff2] px-4 py-2">
                  <Image
                    src="/addUser.png"
                    width={100}
                    height={100}
                    alt="add user"
                  />
                  <div>
                    <span className="text-[20px] font-bold text-[#222124]">
                      Add New User
                    </span>
                    <p className="text-[12px] text-[#84818A]">
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-y-2">
                  <span className="text-[16px] font-medium text-[#000929]">
                    Invite email
                  </span>
                  <Input
                    placeholder="example@email.com"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setShowInvalidMsg(!validateEmail(e.target.value));
                    }}
                  />
                  {showInvalidMsg ? (
                    <span className="pl-1 text-hyvv-red">
                      invalid email address
                    </span>
                  ) : null}
                </div>
              </div>
              <hr className="border-[#e1e1e1]" />
              <div className="flex flex-col gap-y-4 p-4">
                <div className="flex items-center gap-x-6 p-2">
                  <Image
                    src="/avatar.png"
                    width={80}
                    height={80}
                    alt="user avatar"
                    className="w-auto rounded-full"
                  />
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold">Profile Picture</h3>
                    <p className="text-[12px] text-[#84818A]">
                      We recommend an image of at least 400x400.
                    </p>
                    <div className="mt-3 flex gap-x-3">
                      <Button colorScheme="main">Upload Image</Button>
                      <Button colorScheme="red" variant={"outline"}>
                        Remove
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-y-2">
                  <span className="text-[16px] font-medium text-[#000929]">
                    UserTitle
                  </span>
                  <Input
                    placeholder="Enter user Title"
                    value={userTitle}
                    onChange={(e) => setUserTitle(e.target.value)}
                  />
                </div>
                <div className="flex flex-col gap-y-2">
                  <span className="text-[16px] font-medium text-[#000929]">
                    Responsibility
                  </span>
                  <Textarea placeholder="Enter Job Responsibility" />
                </div>
              </div>
              <hr className="border-[#e1e1e1]" />
              <div className="flex flex-col gap-y-4 p-4">
                <div>
                  <h3 className="text-lg font-semibold text-[#2E2C34]">
                    Goals
                  </h3>
                  <p className="text-[12px] text-[#84818A]">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered
                  </p>
                </div>
                {goalGroup.map((item, index) => (
                  <div className="grid grid-cols-3 gap-4" key={index}>
                    <Input
                      placeholder="Enter Goal"
                      className="col-span-2"
                      value={item.goal}
                      onChange={(e) => handleChange(e, index, "goal")}
                    />
                    <Input
                      placeholder="Budget"
                      value={item.budget}
                      type="number"
                      onChange={(e) => handleChange(e, index, "budget")}
                    />
                  </div>
                ))}

                <div>
                  <Button
                    size="sm"
                    variant={"ghost"}
                    colorScheme="main"
                    leftIcon={<AddIcon />}
                    onClick={() => handleAddGoal()}
                  >
                    Add More
                  </Button>
                </div>

                <div className="flex justify-end gap-4">
                  <Button variant={"outline"} onClick={onModalClose}>
                    Cancel
                  </Button>
                  <Button colorScheme="main" onClick={addNewUser}>
                    Add User
                  </Button>
                </div>
              </div>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddUser;
