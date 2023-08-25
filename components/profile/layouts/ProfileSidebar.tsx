import Link from "next/link";
import React, { Dispatch, SetStateAction } from "react";

import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Text,
} from "@chakra-ui/react";

import { useAppStore } from "../../../lib/store";

import SubSideBar from "../../layouts/SubSideBar";

export interface IProfileSidebar {
  current: Array<string>;
  columns: object;
  setCurrent: Dispatch<SetStateAction<string[]>>;
  setColumns: Dispatch<SetStateAction<object>>;
}

const ProfileSidebar: React.FC<IProfileSidebar> = ({
  current,
  columns,
  setCurrent,
  setColumns,
}) => {
  const { freelancerProfileData } = useAppStore();

  return (
    <div className="flex h-full flex-col gap-y-4 py-4">
      <div className="flex flex-col gap-y-3 px-4">
        <Breadcrumb
          spacing="8px"
          separator={<ChevronRightIcon color="gray.500" />}
        >
          <BreadcrumbItem>
            <BreadcrumbLink href="#">Freelancers</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink href="#" className="font-semibold">
              {freelancerProfileData.personalInfo.firstName +
                " " +
                freelancerProfileData.personalInfo.lastName}
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
        <h3 className="font-Manrope text-3xl font-semibold leading-5">
          Profile
        </h3>
      </div>
      <hr />
      <div className="flex-1">
        <SubSideBar
          columns={columns}
          setColumns={setColumns}
          current={current}
          setCurrent={setCurrent}
        />
      </div>
      <Link href={`/manage#lancers`} passHref>
        <div className="flex w-full justify-center">
          <Button
            colorScheme="main"
            leftIcon={<ChevronLeftIcon />}
            className="w-10/12"
          >
            <Text fontSize="16px">Back to Manage</Text>
          </Button>
        </div>
      </Link>
    </div>
  );
};

export default ProfileSidebar;
