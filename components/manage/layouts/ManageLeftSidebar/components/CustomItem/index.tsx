import { useRouter } from "next/router";
import React, { ReactNode } from "react";

import { Collapse, Text } from "@chakra-ui/react";
import Image from "next/image";
import { useAppStore } from "../../../../../../lib/store";
import { trpc } from "../../../../../../utils/trpc";
import CheckableTree from "../../../../../base/TreeView/CheckableTree";

export interface ICustomItem {
  icon: string;
  type: string;
  subIcon: ReactNode;
  setCollapse?: Function;
  collapse?: boolean;
  title: string;
  subTask: Array<any>;
  checkable: boolean;
  moveToBuild?: Function;
  id?: string;
}

const CustomItem: React.FC<ICustomItem> = ({
  icon,
  type,
  subIcon,
  setCollapse,
  collapse,
  title,
  subTask,
  checkable,
  id,
}) => {
  const { manageData, moveItemFromTo } = useAppStore();
  const router = useRouter();
  const updateBuildMutation = trpc.build.update.useMutation();

  const currentData = manageData[type]["items"].find(
    (item) => item.title === title
  );
  const routerHandle = () => {
    switch (type) {
      case "plan":
      case "offer":
        router.push(`/manage/${type}/${id}`);
        break;
      case "staged":
        updateBuildMutation.mutate(
          {
            id: currentData.id,
            status: "STARTING",
          },
          {
            onSuccess: () => {
              moveItemFromTo(currentData.id, "staged", "starting");
            },
          }
        );
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <div
        className="flex cursor-pointer items-center justify-between rounded-md border p-2 transition-all hover:bg-gray-100"
        onClick={() => {
          if (setCollapse) setCollapse(title, type);
        }}
      >
        <div className="float-left flex items-center">
          <Image src={icon} width={20} height={20} alt="build logo" />
          <Text fontSize="15px" color="#84818a" className="pl-2 capitalize">
            {title}
          </Text>
        </div>
        <div onClick={routerHandle} className="font-medium">
          {subIcon}
        </div>
      </div>
      <Collapse in={collapse}>
        <CheckableTree
          treeData={subTask}
          checkable={checkable}
          icon={{
            check: "",
            uncheck: "",
            halfCheck: "",
          }}
        />
      </Collapse>
    </div>
  );
};

export default CustomItem;
