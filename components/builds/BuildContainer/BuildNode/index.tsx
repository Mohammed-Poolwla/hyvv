import { addNodeUnderParent } from "@nosferatu500/react-sortable-tree";
import { useEffect, useState } from "react";

import DeleteIcon from "../../../icons/DeleteIcon";
import EditIcon from "../../../icons/EditIcon";

import { AddIcon, CheckIcon, CloseIcon } from "@chakra-ui/icons";
import { Button, Input, Spinner, Text } from "@chakra-ui/react";

import {
  changeNodeAtPath,
  removeNodeAtPath,
} from "@nosferatu500/react-sortable-tree";
import { trpc } from "../../../../utils/trpc";

export type NodeModel = {
  id: string;
  title: string;
  parentId: string;
  children?: Array<any>;
};

const BuildNode = ({
  data,
  rowInfo,
  setData,
  setIsDetailView,
  setDetailData,
  isDetailView,
  detailData,
  detailPath,
  setDetailPath,
  createNode,
  setSelected,
  selected,
  showControls,
}) => {
  const [editable, setEditable] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [errorValue, setErrorValue] = useState(false);

  const deleteBuildMutation = trpc.build.delete.useMutation();
  const updateBuildMutation = trpc.build.update.useMutation();
  useEffect(() => {
    if (rowInfo.node.new) setEditable(true);
    setInputValue(rowInfo.node.title);
  }, [rowInfo]);

  function updateNode(rowInfo: any) {
    const { node, path } = rowInfo;
    const { children, id } = node;
    let newTree = changeNodeAtPath({
      treeData: isDetailView ? detailData : data,
      path,
      getNodeKey,
      newNode: {
        id: id,
        expanded: true,
        children,
        title: inputValue,
      },
    });
    if (!isDetailView) {
      setData(newTree);
    } else {
      setDetailData(newTree);
      let newAllTree = changeNodeAtPath({
        treeData: data,
        path: detailPath,
        getNodeKey,
        newNode: newTree[0],
      });
      setData(newAllTree);
    }
    setEditable(false);
    setSelected(null);
    console.log(id, inputValue);

    updateBuildMutation.mutate(
      {
        id: id,
        title: inputValue,
      },
      {
        onSuccess: () => {
          // refetch();
        },
      }
    );
  }
  function removeNode(rowInfo: any) {
    setSelected(null);
    const { path, node } = rowInfo;
    const id_list: Array<string> = [];
    collectId(node, id_list);
    deleteBuildMutation.mutate({
      id_list: id_list,
    });

    if (!isDetailView) {
      setData(
        removeNodeAtPath({
          treeData: data,
          path,
          getNodeKey,
        })
      );
    } else {
      setDetailData(
        removeNodeAtPath({
          treeData: detailData,
          path,
          getNodeKey,
        })
      );
    }
  }

  function collectId(node: NodeModel, box: Array<string>) {
    console.log(node);
    if (node.children.length !== 0) {
      const { children } = node;
      children.map((item) => {
        collectId(item, box);
      });
    }
    box.push(node.id);
    return true;
  }

  const getNodeKey = ({ treeIndex }) => treeIndex;
  return (
    <div
      className={`flex h-full ${
        !isDetailView && rowInfo.path.length === 1 ? "cursor-pointer" : ""
      } flex-1 items-center justify-between rounded-[10px] border-[2px] py-2 pl-[50px] shadow-md transition-all ${
        !isDetailView && selected?.path[0] === rowInfo.path[0]
          ? "border-[#08657e] bg-[#d0e2e8]"
          : "border-[#fff] bg-[white]"
      }`}
      onClick={() => {
        if (!isDetailView && rowInfo.path.length === 1) {
          if (JSON.stringify(selected) === JSON.stringify(rowInfo)) {
            setSelected(null);
          } else {
            setSelected(rowInfo);
          }
        }
      }}
    >
      <div className="flex w-full items-center">
        {isDetailView && rowInfo.path.length === 1 ? (
          <>
            <div className="mx-1 border-r border-[#97979760] p-2 text-gray-400">
              List Title
            </div>
            <div className="w-[1px] bg-[#97979760]"></div>
          </>
        ) : (
          ""
        )}
        {editable ? (
          <Input
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value);
              if (e.target.value.length) setErrorValue(false);
            }}
            autoFocus
            isInvalid={errorValue}
            sx={{
              fontWeight: 500,
              px: 1,
              py: 0,
              height: 8,
            }}
            onClick={(e) => {
              e.stopPropagation();
            }}
            placeholder="New build"
            onKeyDown={(e) => {
              if (e.keyCode === 13) {
                updateNode(rowInfo);
              }
            }}
          />
        ) : (
          <div className={`w-full flex-1 overflow-hidden px-1 py-1`}>
            <Text fontSize="md" sx={{ fontWeight: 500 }}>
              {rowInfo.node.title}
            </Text>
          </div>
        )}
        {!(isDetailView && rowInfo.path.length === 1) ? (
          <div className="flex items-stretch gap-x-3 px-4">
            {!editable && showControls ? (
              !isDetailView ? (
                rowInfo.path.length === 1 ? (
                  <Button
                    size={"sm"}
                    leftIcon={<AddIcon />}
                    borderRadius={"full"}
                    variant="outline"
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsDetailView(true);
                      setSelected(null);
                      setDetailPath(rowInfo.path);
                      setDetailData([rowInfo.node]);
                    }}
                  >
                    Details
                  </Button>
                ) : (
                  ""
                )
              ) : (
                <Button
                  size={"sm"}
                  leftIcon={<AddIcon />}
                  borderRadius={"full"}
                  variant="outline"
                  onClick={(e) => {
                    e.stopPropagation();
                    createNode(
                      detailData,
                      rowInfo.path[rowInfo.path.length - 1],
                      rowInfo.node.id,
                      detailData[0].id
                    );
                  }}
                >
                  Add SubTask
                </Button>
              )
            ) : (
              ""
            )}

            {showControls ? (
              <>
                <div className="w-[1px] bg-[#97979760]"></div>
                {editable ? (
                  <>
                    <Button
                      size={"sm"}
                      leftIcon={<CheckIcon />}
                      colorScheme="main"
                      borderRadius={"full"}
                      onClick={(e) => {
                        if (!inputValue.length) {
                          setErrorValue(true);
                        } else {
                          updateNode(rowInfo);
                        }
                        e.stopPropagation();
                      }}
                    >
                      Save
                    </Button>
                    <Button
                      size={"sm"}
                      leftIcon={<CloseIcon />}
                      colorScheme="black"
                      variant="outline"
                      borderRadius={"full"}
                      onClick={(e) => {
                        setEditable(false);
                        setInputValue(rowInfo.node.title);
                        e.stopPropagation();
                      }}
                    >
                      Cancel
                    </Button>
                  </>
                ) : (
                  <>
                    <Button
                      size={"sm"}
                      leftIcon={<EditIcon />}
                      variant="outline"
                      borderRadius={"full"}
                      onClick={(e) => {
                        setEditable(true);
                        e.stopPropagation();
                      }}
                    >
                      Edit
                    </Button>
                    <Button
                      size={"sm"}
                      leftIcon={<DeleteIcon />}
                      variant="outline"
                      borderRadius={"full"}
                      onClick={(e) => {
                        removeNode(rowInfo);
                        e.stopPropagation();
                      }}
                    >
                      Delete
                    </Button>
                  </>
                )}
              </>
            ) : (
              ""
            )}
          </div>
        ) : (
          ""
        )}
      </div>
      {updateBuildMutation.isLoading ? (
        <div className="absolute flex h-full w-full justify-center bg-[#fffa]">
          <Spinner className=" mt-4" color={"main.500"} />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default BuildNode;
