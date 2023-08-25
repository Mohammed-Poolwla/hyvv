import React, { ReactNode, useEffect, useState } from "react";

import { useAppStore } from "../../../lib/store";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Image,
  Text,
} from "@chakra-ui/react";

import { ChevronRightIcon } from "@chakra-ui/icons";
import { useRouter } from "next/router";
import ManageIcon from "../../icons/ManageIcon";

export interface IBreadcrumbHeader {
  parentName: string;
  headerName?: string;
  name?: string;
  id?: string;
  rightButton?: ReactNode;
  showIcon?: boolean;
  showRightButton?: boolean;
  invisibleBreadcrumbIcon?: boolean;
  invisibleHeader?: boolean;
  invisibleTitle?: boolean;
  className?: string;
}

const BreadcrumbHeader: React.FC<IBreadcrumbHeader> = ({
  parentName,
  headerName,
  name,
  id,
  rightButton,
  showIcon,
  showRightButton,
  invisibleBreadcrumbIcon,
  invisibleHeader,
  invisibleTitle,
  className,
}) => {
  const router = useRouter();
  const { manageData } = useAppStore();
  const [current, setCurrent] = useState<any>(null);

  useEffect(() => {
    let updatedCurrent = null;
    if (headerName == "task")
      updatedCurrent = [
        ...manageData["starting"].items,
        ...manageData["in_progress"].items,
        ...manageData["for_review"].items,
        ...manageData["complete"].items,
      ].find((item) => item.id === id);
    else
      updatedCurrent = manageData[headerName].items.find(
        (item) => item.id === id
      );

    if (updatedCurrent) {
      setCurrent(updatedCurrent);
    }
  }, [id]);
  return (
    <div className={className}>
      <div className="flex items-center gap-2">
        {invisibleBreadcrumbIcon ?? <ManageIcon color="#08657E" />}
        <Breadcrumb
          fontWeight="medium"
          fontSize="md"
          separator={<ChevronRightIcon color="gray.500" />}
        >
          <BreadcrumbItem>
            <BreadcrumbLink
              onClick={() => router.push("/manage")}
              sx={{ color: "#667085" }}
            >
              {parentName}
            </BreadcrumbLink>
          </BreadcrumbItem>
          {invisibleHeader !== false ? (
            <BreadcrumbItem>
              <BreadcrumbLink
                href="#"
                sx={{ color: "#667085", textTransform: "capitalize" }}
              >
                {headerName}
              </BreadcrumbLink>
            </BreadcrumbItem>
          ) : (
            ""
          )}
          <BreadcrumbItem>
            <BreadcrumbLink href="#" as="b" className="capitalize">
              {name ? name : current ? current.title : ""}
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </div>
      <div className="mt-5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {showIcon && current ? (
            <Image
              src={current.icon}
              width="35px"
              height="35px"
              alt="build logo"
            />
          ) : (
            ""
          )}
          {!invisibleTitle && current ? (
            <Text
              fontSize="28"
              className="font-Manrope font-semibold capitalize text-hyvv-title-1"
            >
              {current.title}
            </Text>
          ) : (
            ""
          )}
        </div>
        {showRightButton ? <div>{rightButton}</div> : <></>}
      </div>
    </div>
  );
};

export default BreadcrumbHeader;
