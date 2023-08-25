import React, { useEffect } from "react";

import { useUser } from "@auth0/nextjs-auth0";

import { useRouter } from "next/router";

import {
  Button,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";

import { AddIcon, ChevronDownIcon } from "@chakra-ui/icons";

import { useAppStore } from "../../../../lib/store";

import { trpc } from "../../../../utils/trpc";

import useCustomToast from "../../../../utils/toast";

export interface IStartupSelect {
  invisible?: boolean;
}

const StartupSelect: React.FC<IStartupSelect> = ({ invisible }) => {
  const showToast = useCustomToast();

  const router = useRouter();

  const { startupData, setSelectedStartup, setStartUpList, resetStartUps } =
    useAppStore();

  const { user } = useUser();

  const setSelectedStartupMutation = trpc.user.setSelectedStartUp.useMutation();

  const userData = trpc.user.byEmail.useQuery({
    email: user ? user.email : "",
  });

  const { data } = trpc.employee.list.useQuery({
    userId: userData.data?.id,
  });

  useEffect(() => {
    if (data) {
      if (userData.data) {
        const startupId = userData.data.selectedStartUpId;

        for (const employeeItem of data) {
          if (employeeItem.startUp.id === startupId)
            setSelectedStartup(startupId, employeeItem.startUp.companyName);
        }
      }

      setStartUpList(
        data.map((item) => {
          const { id, isActive, isFounder, jobTitle, startUp } = item;
          return {
            id,
            isActive,
            isFounder,
            jobTitle,
            startupId: startUp.id,
            startupName: startUp.companyName,
            startupType: startUp.companyType,
          };
        })
      );
    } else resetStartUps();
  }, [data, userData.data]);

  const addNewStartup = () => router.push("/define?phase=new");

  const selectStartup = (startupId: string, startupName: string) => {
    setSelectedStartupMutation.mutate(
      {
        email: user ? user.email : "",
        startupId: startupId,
      },
      {
        onSuccess: () => {
          setSelectedStartup(startupId, startupName);
        },
        onError: (err) => {
          showToast({
            title: "Something went wrong!",
            description: err.message,
            status: "error",
          });
        },
      }
    );
  };

  return (
    <div className={`${invisible ? "hidden" : ""}`}>
      <Menu>
        <MenuButton
          as={Button}
          variant="ghost"
          size="xs"
          _hover={{ backgroundColor: "#FFF" }}
          _active={{ backgroundColor: "#FFF" }}
          rightIcon={<ChevronDownIcon />}
          className="w-full text-left"
        >
          {startupData.selectedStartup[1] === ""
            ? "Select a startup"
            : startupData.selectedStartup[1]}
        </MenuButton>

        <MenuList>
          {startupData.startupList.map((item, index) => (
            <MenuItem
              onClick={() => selectStartup(item.startupId, item.startupName)}
              key={index}
            >
              {item.startupName}
            </MenuItem>
          ))}
          <MenuDivider />
          <MenuItem gap={2} onClick={addNewStartup}>
            <AddIcon />
            Add New Startup
          </MenuItem>
        </MenuList>
      </Menu>
    </div>
  );
};

export default StartupSelect;
