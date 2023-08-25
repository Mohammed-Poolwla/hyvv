import dynamic from "next/dynamic";

import { SearchIcon } from "@chakra-ui/icons";
import {
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
import React, { ReactNode } from "react";
import { BsFillBellFill, BsSliders } from "react-icons/bs";
import { RiBuilding2Line, RiMessage2Line } from "react-icons/ri";

import { useAppStore } from "../../../lib/store";

import Badge from "../../base/Badge";
import ButtonLink from "../../base/Button/ButtonLink";
// import StartupSelect from "../../base/Select/StartupSelect";

import Sidebar from "../Sidebar/Sidebar";
import UserCard from "./UserCard";

const SelectMenu = dynamic(import("../../base/Select/SelectMenu"), {
  ssr: false,
});

const StartupSelect = dynamic(import("../../base/Select/StartupSelect"), {
  ssr: false,
});

export interface ILayout {
  children: ReactNode;
}

const Layout: React.FC<ILayout> = ({ children }) => {
  const { userType, setUserType } = useAppStore();

  const profileData = [
    {
      label: "Founder",
      value: "Founder",
      link: "/startup/dashboard",
    },
    {
      label: "Freelancer",
      value: "Freelancer",
      link: "/freelancer/dashboard",
    },
    {
      label: "Accelerator",
      value: "Accelerator",
      disabled: true,
    },
    {
      label: "Investor",
      value: "Investor",
      disabled: true,
    },
  ];

  return (
    <div className="flex w-full font-Plus_Jakarta_Sans">
      <Sidebar />
      <div className="col-span-3 flex h-[100vh] w-1 flex-1 flex-col ">
        <div className="flex min-w-[300px] items-center gap-x-3 border-b border-[#e4e4e4] px-4 py-2 ">
          <div className="flex items-center">
            <Image
              src="/startupicon.png"
              alt="Startup Icon"
              width="30px"
              height="30px"
            />
            <div className="flex flex-col">
              <SelectMenu
                placeholder="Select Profile"
                data={profileData}
                selected={userType}
                setSelected={setUserType}
                type="profile"
                size={userType === "Founder" ? "xs" : "md"}
                variant="ghost"
              />
              <StartupSelect
                invisible={userType === "Founder" ? false : true}
              />
            </div>
          </div>
          <div className="flex flex-1 justify-center">
            <InputGroup sx={{ maxWidth: "500px" }}>
              <InputLeftElement pointerEvents="none">
                <SearchIcon color="gray.300" />
              </InputLeftElement>
              <Input
                variant="filled"
                type="search"
                placeholder="Search for Task, Freelancers, etc.."
              />
              <InputRightElement>
                <BsSliders color="#cbd5e0" />
              </InputRightElement>
            </InputGroup>
          </div>
          <div className="flex items-center gap-x-2 align-middle">
            <ButtonLink
              href="https://get.spotvirtual.com/vf25mtc8nnst"
              target="_blank"
              leftIcon={<RiBuilding2Line />}
              size="small"
              intent="primary"
              roundness="pill"
              className="px-4"
            >
              Virtual Office
            </ButtonLink>
            <ButtonLink
              href="https://launchpass.com/hyvvminds/launch"
              target="_blank"
              leftIcon={<RiMessage2Line />}
              size="small"
              intent="primary"
              roundness="pill"
              className="px-4"
            >
              HYVV MINDS
            </ButtonLink>
            <Badge label="5">
              <BsFillBellFill color="#b0b7c3" />
            </Badge>

            <UserCard />
          </div>
        </div>
        <div className="flex-1 overflow-auto">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
