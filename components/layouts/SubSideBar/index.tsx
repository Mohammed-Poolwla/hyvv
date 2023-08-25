import React, { Dispatch, SetStateAction, useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

import AnnouncementIcon from "../../icons/AnnouncementIcon";
import DocumentIcon from "../../icons/DocumentIcon";
import Square3DIcon from "../../icons/Square3DIcon";

import {
  Button,
  Collapse,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Popover,
  PopoverArrow,
  PopoverContent,
  PopoverTrigger,
  Text,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";

import {
  BsCheck,
  BsDot,
  BsPlus,
  BsThreeDotsVertical,
  BsTrash,
} from "react-icons/bs";

import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";

export interface ISubSidebar {
  columns: object;
  setColumns: Dispatch<SetStateAction<object>>;
  current: Array<string>;
  setCurrent: Dispatch<SetStateAction<string[]>>;
  setModalGroupState?: Dispatch<SetStateAction<boolean>>;
  setSelectedGroup?: Dispatch<SetStateAction<string>>;
  setCurrentId?: Dispatch<SetStateAction<string>>;
  onModalOpen?: Function;
  editSection?: Function;
  delSection?: Function;
}

const SubSidebar: React.FC<ISubSidebar> = ({
  setCurrentId,
  columns,
  setColumns,
  current,
  setCurrent,
  setModalGroupState,
  setSelectedGroup,
  onModalOpen,
  editSection,
  delSection,
}) => {
  const {
    isOpen: isConfirmModalOpen,
    onOpen: onConfirmModalOpen,
    onClose: onConfirmModalClose,
  } = useDisclosure();
  const toast = useToast();
  const [collapseData, setCollapseData] = useState({});
  const icon_list = {
    "Company Overview": <DocumentIcon className="mb-auto mr-2 mt-auto" />,
    "Product & Solution": <AnnouncementIcon className="mb-auto mr-2 mt-auto" />,
    "Marketing & Sales": <Square3DIcon className="mb-auto mr-2 mt-auto" />,
    other: <DocumentIcon className="mb-auto mr-2 mt-auto" />,
  };
  const [delSectionData, setDelSectionData] = useState({
    name: "",
    index: "",
    title: "",
  });
  const onDragEnd = (result, columns, setColumns) => {
    if (!result.destination) return;
    const { source, destination } = result;

    if (source.droppableId !== destination.droppableId) {
      const sourceColumn = columns[source.droppableId];
      const destColumn = columns[destination.droppableId];
      const sourceItems = [...sourceColumn.items];
      const destItems = [...destColumn.items];
      const [removed] = sourceItems.splice(source.index, 1);
      destItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...sourceColumn,
          items: sourceItems,
        },
        [destination.droppableId]: {
          ...destColumn,
          items: destItems,
        },
      });
    } else {
      const column = columns[source.droppableId];
      const copiedItems = [...column.items];
      const [removed] = copiedItems.splice(source.index, 1);
      copiedItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...column,
          items: copiedItems,
        },
      });
    }
  };
  return (
    <>
      <DragDropContext
        onDragEnd={(result: any) => onDragEnd(result, columns, setColumns)}
      >
        {Object.entries(columns).map(([columnId, column]: any) => {
          return (
            <div className="flex flex-col" key={columnId}>
              <div
                className={`flex cursor-pointer rounded-sm`}
                onClick={() => {
                  let changedCollapseData = {
                    ...collapseData,
                    [column.name]: !collapseData[column.name],
                  };
                  setCollapseData(changedCollapseData);
                }}
              >
                <div
                  className={`w-1 rounded-r-lg ${
                    current[0] == column.name ? "bg-[#3694a7]" : "bg-[#fff]"
                  }`}
                />
                <div className="flex flex-1 justify-between px-4 py-2 ">
                  <div className="flex flex-1">
                    {icon_list[column.name] ?? icon_list["other"]}
                    <Text
                      fontSize="15px"
                      color="#84818A"
                      className="font-semibold"
                    >
                      {column.name}
                    </Text>
                  </div>
                  <div>
                    {collapseData[column.name] ? (
                      <ChevronDownIcon
                        className="mb-auto mt-auto"
                        color="#5a5a5a"
                      />
                    ) : (
                      <ChevronUpIcon
                        className="mb-auto mt-auto"
                        color="#5a5a5a"
                      />
                    )}
                  </div>
                </div>
              </div>
              <Collapse
                in={!collapseData[column.name]}
                className="pl-3 pr-3"
                animateOpacity
              >
                <Droppable droppableId={columnId} key={columnId}>
                  {(provided, snapshot) => {
                    return (
                      <div
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        className={`flex flex-col gap-y-1 p-2 ${
                          snapshot.isDraggingOver ? "bg-[#f9f9f9]" : ""
                        }`}
                      >
                        {column.items.map(({ title, id }, index) => {
                          return (
                            <Draggable
                              key={index}
                              draggableId={JSON.stringify([columnId, index])}
                              index={index}
                            >
                              {(provided, snapshot) => {
                                return (
                                  <>
                                    <div
                                      ref={provided.innerRef}
                                      {...provided.draggableProps}
                                      {...provided.dragHandleProps}
                                    >
                                      <div
                                        className={`flex cursor-pointer ${
                                          snapshot.isDragging ? "bg-[#eee]" : ""
                                        }
                                        ${
                                          JSON.stringify(current) ===
                                          JSON.stringify([column.name, title])
                                            ? "bg-[#ebf4f6] text-[#08657E]"
                                            : "text-[#4F4D55] hover:bg-gray-100"
                                        } items-center gap-x-2 rounded-md p-2 transition-all`}
                                        onClick={() => {
                                          setCurrent([column.name, title]);
                                          if (setCurrentId) setCurrentId(id);
                                        }}
                                      >
                                        <BsDot />
                                        <div className="flex flex-1 items-center justify-between">
                                          <Text
                                            fontSize="15px"
                                            className="font-semibold"
                                          >
                                            {title}
                                          </Text>
                                          {editSection ? (
                                            <>
                                              <Popover placement="top">
                                                <PopoverTrigger>
                                                  <IconButton
                                                    aria-label="save"
                                                    size="sm"
                                                    variant={"ghost"}
                                                    icon={
                                                      <BsThreeDotsVertical />
                                                    }
                                                  />
                                                </PopoverTrigger>
                                                <PopoverContent>
                                                  <PopoverArrow />
                                                  <Formik
                                                    initialValues={{
                                                      name: "",
                                                    }}
                                                    onSubmit={(values) => {
                                                      if (
                                                        values.name.length === 0
                                                      ) {
                                                        toast({
                                                          description:
                                                            "Please input section title.",
                                                          position: "top-right",
                                                          status: "warning",
                                                          duration: 2000,
                                                          isClosable: true,
                                                        });
                                                      } else {
                                                        editSection(
                                                          column.name,
                                                          index,
                                                          values.name
                                                        );
                                                      }
                                                    }}
                                                  >
                                                    <Form>
                                                      <InputGroup>
                                                        <Field name="name">
                                                          {({ field }) => (
                                                            <Input
                                                              autoFocus
                                                              {...field}
                                                              defaultValue={
                                                                title
                                                              }
                                                              placeholder="Section Name"
                                                            />
                                                          )}
                                                        </Field>
                                                        <InputRightElement>
                                                          <div className="mr-9 flex gap-x-1">
                                                            <IconButton
                                                              aria-label="save"
                                                              size="sm"
                                                              type="submit"
                                                              colorScheme={
                                                                "main"
                                                              }
                                                              icon={<BsCheck />}
                                                            />
                                                            <IconButton
                                                              aria-label="save"
                                                              size="sm"
                                                              colorScheme={
                                                                "red"
                                                              }
                                                              onClick={() => {
                                                                onConfirmModalOpen();
                                                                setDelSectionData(
                                                                  {
                                                                    name: column.name,
                                                                    index:
                                                                      index,
                                                                    title:
                                                                      title,
                                                                  }
                                                                );
                                                              }}
                                                              icon={<BsTrash />}
                                                            />
                                                          </div>
                                                        </InputRightElement>
                                                      </InputGroup>
                                                    </Form>
                                                  </Formik>
                                                </PopoverContent>
                                              </Popover>
                                            </>
                                          ) : (
                                            ""
                                          )}
                                        </div>
                                      </div>
                                    </div>
                                  </>
                                );
                              }}
                            </Draggable>
                          );
                        })}
                        {provided.placeholder}
                        {setModalGroupState ? (
                          <div
                            className={`flex cursor-pointer items-center gap-x-2 rounded-md px-2 py-1 transition-all`}
                            onClick={() => {
                              onModalOpen();
                              setModalGroupState(false);
                              setSelectedGroup(column.name);
                            }}
                          >
                            <BsPlus color={"#08657E"} />
                            <Text
                              fontSize="15px"
                              color={"#08657E"}
                              className="font-semibold"
                            >
                              Add Section
                            </Text>
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                    );
                  }}
                </Droppable>
              </Collapse>
            </div>
          );
        })}
      </DragDropContext>
      <Modal isOpen={isConfirmModalOpen} onClose={onConfirmModalClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody py={6}>
            Delete section <b>{delSectionData.title}</b>?
          </ModalBody>
          <ModalFooter>
            <Button
              colorScheme="red"
              mr={3}
              onClick={() => {
                delSection(
                  delSectionData.name,
                  delSectionData.index,
                  delSectionData.title
                );
                onConfirmModalClose();
              }}
            >
              Delete
            </Button>
            <Button onClick={onConfirmModalClose} variant={"outline"}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default SubSidebar;
