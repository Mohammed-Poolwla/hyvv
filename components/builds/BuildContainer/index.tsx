import { addNodeUnderParent } from "@nosferatu500/react-sortable-tree";
import { v4 } from "uuid";
import DraggableTree from "../../base/TreeView/DraggableTree";
import BuildNode from "./BuildNode";

import { Breadcrumb, BreadcrumbItem, Button, Skeleton } from "@chakra-ui/react";

import { ChevronRightIcon } from "@chakra-ui/icons";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";

import { list_to_tree } from "../../../utils/functions/convert";

import { useAppStore } from "../../../lib/store";

import useCustomToast from "../../../utils/toast";

import { BsCheckLg, BsPlusLg } from "react-icons/bs";
import { trpc } from "../../../utils/trpc";

export type NodeModel = {
  id: string;
  title: string;
  icon?: string;
  parentId: string;
  checked?: boolean;
  children?: Array<object>;
  subTask?: Array<object>;
  status?: string;
  tasks: Array<object>;
};
interface TemplateSideBar {
  title: string;
  icon?: string;
  subBar: string[];
}
export interface IDraggableTree {
  dataSource: NodeModel[];
  isLoading?: boolean;
  templateBuild: TemplateSideBar;
  setTemplateBuild: Dispatch<SetStateAction<TemplateSideBar>>;
}
type TBuildData = {
  id: string;
  title: string;
  startUpId: string;
  parentId: string;
  topParentId: string;
  status:
    | "BUILD"
    | "PLAN"
    | "OTHER"
    | "OFFER"
    | "STAGED"
    | "STARTING"
    | "IN_PROGRESS"
    | "FOR_REVIEW"
    | "COMPLETE";
  icon: string;
  children?: TBuildData[];
};
const BuildContainer: React.FC<IDraggableTree> = ({
  dataSource,
  isLoading,
  templateBuild,
  setTemplateBuild,
}) => {
  const { startupData, moveToPlan } = useAppStore();

  const showToast = useCustomToast();
  const [treeData, setTreeData] = useState<any>(list_to_tree(dataSource));
  const [isDetailView, setIsDetailView] = useState(false);
  const [detailData, setDetailData] = useState(null);
  const [detailPath, setDetailPath] = useState(null);
  const [selected, setSelected] = useState(null);

  const startUpId = startupData.selectedStartup[0];
  const addBuildMutation = trpc.build.create.useMutation();
  const addMultiBuildMutation = trpc.build.createMany.useMutation();
  const updateBuildMutation = trpc.build.update.useMutation();
  useEffect(() => {
    setTreeData(list_to_tree(dataSource));
  }, [dataSource.length]);

  useEffect(() => {
    if (templateBuild) {
      setTemplateBuild(null);
      const parentId = v4();
      const parentTreeData: TBuildData[] = [
        {
          id: parentId,
          title: templateBuild.title,
          startUpId: startUpId,
          parentId: "",
          topParentId: "",
          status: "BUILD",
          icon: templateBuild.icon,
        },
      ];
      const childTreeData: TBuildData[] = [];
      templateBuild.subBar.forEach((item) => {
        childTreeData.push({
          id: v4(),
          title: item,
          parentId: parentId,
          startUpId: startUpId,
          topParentId: parentId,
          status: "OTHER",
          icon: "",
          children: [],
        });
      });
      addMultiBuildMutation.mutate(
        { buildList: [...parentTreeData, ...childTreeData] },
        {
          onSuccess: () => {
            const tempTreeData = addNodeUnderParent({
              treeData: treeData,
              expandParent: true,
              getNodeKey,
              newNode: {
                id: parentId,
                title: templateBuild.title,
                expanded: true,
                children: childTreeData,
              },
            });
            setTreeData(tempTreeData.treeData);
          },
        }
      );
    }
  }, [templateBuild]);

  const createNode = (
    data: any,
    parentKey: number,
    parentId?: string,
    topParentId?: string,
    title?: string
  ) => {
    let id = v4();

    if (!startUpId) {
      showToast({
        title: "Startup is not yet selected.",
        status: "warning",
      });
      return;
    }

    let newTree = addNodeUnderParent({
      treeData: data,
      parentKey: parentKey,
      expandParent: true,
      getNodeKey,
      newNode: {
        new: true,
        id: id,
        title: title ?? "New Build",
        parentKey: parentKey,
        children: [],
      },
    });

    addBuildMutation.mutate(
      {
        id: id,
        startUpId: startUpId,
        title: title ?? "New Build",
        status: parentId ? "OTHER" : "BUILD",
        parentId: parentId ?? "",
        topParentId: topParentId ?? "",
      },
      {
        onSuccess: () => {
          if (isDetailView) {
            setDetailData(newTree.treeData);
            const updatedTreeData = [...treeData];
            setTreeData(
              updatedTreeData.map((item) => {
                if (item.id === detailData[0].id) {
                  return detailData[0];
                }
                return item;
              })
            );
          } else {
            setTreeData(newTree.treeData);
          }
        },
      }
    );
  };

  const handleShip = (node: NodeModel) => {
    const { id, title } = node;
    const target = treeData.find((item) => item.id === id);
    updateBuildMutation.mutate(
      {
        id: target.id,
        status: "PLAN",
      },
      {
        onSuccess: () => {
          setTreeData(treeData.filter((item) => item.id !== id));
          moveToPlan(
            id,
            title,
            treeData.find((item) => item.id === id).children
          );
        },
      }
    );
  };

  const getNodeKey = ({ treeIndex }) => treeIndex;
  return (
    <>
      <div className="flex w-full flex-1 flex-col justify-between gap-y-6 overflow-auto bg-[#fafafa] py-8">
        <div className="px-8">
          {!isDetailView ? (
            <h3 className="text-2xl font-semibold">Build</h3>
          ) : (
            <>
              <Breadcrumb
                className="cursor-pointer"
                separator={<ChevronRightIcon color="#D0D5DD" />}
              >
                <BreadcrumbItem
                  onClick={() => {
                    setIsDetailView(false);
                  }}
                >
                  <h3 className="text-2xl font-semibold">Build</h3>
                </BreadcrumbItem>
                <BreadcrumbItem>
                  <span>{detailData[0]?.title}</span>
                </BreadcrumbItem>
              </Breadcrumb>
            </>
          )}
        </div>
        <div className="flex-1 px-6">
          {isLoading ? (
            Array(2)
              .fill(0)
              .map((_, index: number) => (
                <Skeleton
                  height={"45px"}
                  className="my-3 rounded-lg"
                  key={index}
                />
              ))
          ) : (
            <DraggableTree
              treeData={!isDetailView ? treeData : detailData}
              onChange={(treeData) => {
                setSelected(null);
                if (!isDetailView) {
                  setTreeData(treeData);
                } else {
                  if (detailData.length == 1) {
                    setDetailData(treeData);
                  }
                }
              }}
              canDrag={false}
              generateNodeProps={({ node, path }) => ({
                title: (
                  <BuildNode
                    setSelected={setSelected}
                    selected={selected}
                    data={treeData}
                    detailData={detailData}
                    rowInfo={{ node, path }}
                    setData={setTreeData}
                    setIsDetailView={setIsDetailView}
                    setDetailData={setDetailData}
                    isDetailView={isDetailView}
                    detailPath={detailPath}
                    setDetailPath={setDetailPath}
                    createNode={createNode}
                    showControls={true}
                  />
                ),
              })}
            />
          )}
        </div>
        <div className="flex justify-center gap-x-3 pt-5">
          <Button
            leftIcon={<BsPlusLg />}
            colorScheme="main"
            px={20}
            onClick={() => {
              if (!isDetailView) {
                createNode(treeData, null);
              } else {
                createNode(detailData, 0, detailData[0].id, detailData[0].id);
              }
            }}
          >
            Add new
          </Button>
          {selected ? (
            <Button
              leftIcon={<BsCheckLg />}
              colorScheme="main"
              px={20}
              onClick={() => {
                handleShip(selected.node);
                setSelected(null);
              }}
            >
              Add to Plan
            </Button>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};

export default BuildContainer;
