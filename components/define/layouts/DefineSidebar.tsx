import React, { Dispatch, SetStateAction, useEffect, useState } from "react";

import { useRouter } from "next/router";

import SubSidebar from "../../layouts/SubSideBar";

import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  SimpleGrid,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";

import { BsChatDots, BsPlus } from "react-icons/bs";
import AiAnswerIcon from "../../icons/AIAnswerIcon";
import TemplateIcon from "../../icons/TemplateIcon";
import TemplateModal from "../TemplateModal";
import SkeletonBar from "./SkeletonBar";

import { useAppStore } from "../../../lib/store";
import { trpc } from "../../../utils/trpc";

import useCustomToast from "../../../utils/toast";
export interface IDefineSidebar {
  setCurrentId: Dispatch<SetStateAction<string>>;
  columns: object;
  setColumns: Dispatch<SetStateAction<object>>;
  isLoading?: boolean;
  current: Array<any>;
  setCurrent: Dispatch<SetStateAction<object>>;
}

const DefineSidebar: React.FC<IDefineSidebar> = ({
  setCurrentId,
  columns,
  setColumns,
  isLoading,
  current,
  setCurrent,
}) => {
  const {
    isOpen: isModalOpen,
    onOpen: onModalOpen,
    onClose: onModalClose,
  } = useDisclosure();
  const showToast = useCustomToast();
  const { startupData } = useAppStore();
  const [modalGroupState, setModalGroupState] = useState(true);
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const router = useRouter();

  const startUpId = startupData.selectedStartup[0];

  const addGroupMutation = trpc.defineGroup.create.useMutation();
  const addSectionMutation = trpc.groupSection.create.useMutation();
  const updateSectionMutation = trpc.groupSection.updateTitle.useMutation();
  const delSectionMutation = trpc.groupSection.delete.useMutation();
  const getInitSectionMutation = trpc.groupSection.getInitSection.useMutation();

  useEffect(() => {
    if (startupData.selectedStartup[0] !== "") {
      getInitSectionMutation.mutate(startUpId, {
        onSuccess: (res) => {
          console.log(res);
          setCurrent([res.group.groupTitle, res.sectionTitle]);
        },
      });
      showToast({
        title: "Information",
        description:
          "If you want to create the group data quickly, please use templates provided by HYVV.",
        status: "info",
      });
    }
  }, []);

  const addGroup = (name: string) => {
    if (columns[name]) {
      showToast({
        description: "Invalid group title.",
        status: "warning",
      });
    } else {
      columns[name] = {
        name: name,
        items: [],
      };
      setColumns({ ...columns });

      addGroupMutation.mutate(
        {
          groupTitle: name,
          startUpId: startUpId,
        },
        {
          onSuccess: (res) => {
            const { id, groupTitle } = res;
            columns[groupTitle] = {
              id: id,
              ...columns[groupTitle],
            };
            setColumns({ ...columns });
          },
        }
      );

      onModalClose();
    }
  };

  const addSection = (
    selectedGroup: string,
    name: string,
    templateField: any[]
  ) => {
    let isExisted = false;
    Object.keys(columns).map((item: string) => {
      if (columns[item]["items"].find((element) => element.title === name)) {
        isExisted = true;
      }
    });
    if (isExisted) {
      showToast({
        description: "Invalid section title.",
        status: "warning",
      });
    } else {
      if (Object.keys(columns).length) {
        let tempColumns = { ...columns };
        tempColumns[selectedGroup]?.items.push({ title: name, id: "" });
        setColumns(tempColumns);

        const groupId: string = columns[selectedGroup].id;
        addSectionMutation.mutate(
          {
            groupId: groupId,
            sectionTitle: name,
            sectionData: templateField ? templateField : [],
          },
          {
            onSuccess: (res) => {
              const { id, sectionTitle } = res;
              setCurrentId(id);
              let tempColumns = { ...columns };
              tempColumns[selectedGroup].items = tempColumns[
                selectedGroup
              ].items.filter((item) => item.title !== sectionTitle);
              tempColumns[selectedGroup].items.push({ title: name, id: id });
              setColumns(tempColumns);
              setCurrent([selectedGroup, name]);
            },
          }
        );

        onModalClose();
      }
    }
  };

  const editSection = (selectedGroup: string, index: number, name: string) => {
    let isExisted = false;
    Object.keys(columns).map((item: string) => {
      if (columns[item]["items"].find((element) => element.title === name)) {
        isExisted = true;
      }
    });
    if (isExisted) {
      showToast({
        description: "Invalid section title.",
        status: "warning",
      });
    } else {
      let tempItem = columns[selectedGroup].items.slice();
      tempItem[index].title = name;
      const { id } = tempItem[index];
      let tempColumns = {
        ...columns,
        [selectedGroup]: {
          ...columns[selectedGroup],
          items: tempItem,
        },
      };
      setColumns(tempColumns);

      updateSectionMutation.mutate({
        id: id,
        sectionTitle: name,
      });
    }
  };

  const delSection = (selectedGroup: string, index: number, name: string) => {
    let tempColumns = columns;
    const { id } = tempColumns[selectedGroup].items[index];
    tempColumns[selectedGroup].items = tempColumns[selectedGroup].items.filter(
      (item) => item.title !== name
    );
    setColumns(tempColumns);

    delSectionMutation.mutate({ id });
  };

  return (
    <div className="flex h-full flex-col gap-y-4 py-4">
      <div className="flex flex-col gap-y-3 px-4">
        <div>
          <Text
            fontSize="32px"
            color="#2e2c34"
            className="font-Manrope font-semibold"
          >
            Define
          </Text>
          <Text fontSize="14px" color="#737373" className="font-Manrope">
            Company Playbook
          </Text>
        </div>
        <SimpleGrid columns={2} spacing={3}>
          <Button
            colorScheme="main"
            leftIcon={<AiAnswerIcon color="#fff" />}
            onClick={() => router.push("/define?phase=new")}
          >
            AI Answers
          </Button>
          <Button
            variant={"outline"}
            onClick={() => {
              setModalOpen(true);
            }}
            leftIcon={<TemplateIcon />}
            color="#84818A"
          >
            Templates
          </Button>
        </SimpleGrid>
      </div>
      <div className="px-4">
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <BsChatDots color="#aaa" />
          </InputLeftElement>
          <Input type="tel" placeholder="Input here." />
        </InputGroup>
      </div>

      <div className="flex-1 overflow-auto">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          {isLoading ? (
            <SkeletonBar />
          ) : (
            <SubSidebar
              setCurrentId={setCurrentId}
              columns={columns}
              setColumns={setColumns}
              current={current}
              setCurrent={setCurrent}
              setModalGroupState={setModalGroupState}
              setSelectedGroup={setSelectedGroup}
              onModalOpen={onModalOpen}
              editSection={editSection}
              delSection={delSection}
            />
          )}
        </div>
      </div>

      <div className="px-4">
        <Button
          colorScheme="main"
          color="white"
          leftIcon={<BsPlus />}
          className="w-full"
          onClick={() => {
            onModalOpen();
            setModalGroupState(true);
          }}
        >
          Add Group
        </Button>
        <Modal isOpen={isModalOpen} onClose={onModalClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>
              Add {modalGroupState ? "Group" : "Section "}
            </ModalHeader>
            <ModalCloseButton />
            <Formik
              initialValues={{
                name: "",
              }}
              onSubmit={(values) => {
                if (values.name.length === 0) {
                  showToast({
                    description: "Please input section title.",
                    status: "warning",
                  });
                } else {
                  if (modalGroupState) {
                    addGroup(values.name);
                  } else {
                    addSection(selectedGroup, values.name, null);
                  }
                }
              }}
            >
              <Form>
                <ModalBody pb={6}>
                  <Field name="name">
                    {({ field }) => (
                      <FormControl>
                        <FormLabel>
                          {modalGroupState ? "Group" : "Section "} Name
                        </FormLabel>
                        <Input
                          {...field}
                          placeholder={`${
                            modalGroupState ? "Group" : "Section "
                          } Name`}
                        />
                      </FormControl>
                    )}
                  </Field>
                </ModalBody>
                <ModalFooter>
                  <Button colorScheme="main" mr={3} type="submit">
                    Save
                  </Button>
                  <Button onClick={onModalClose} variant={"outline"}>
                    Cancel
                  </Button>
                </ModalFooter>
              </Form>
            </Formik>
          </ModalContent>
        </Modal>
      </div>
      <TemplateModal
        isOpen={modalOpen}
        closeHandle={() => setModalOpen(false)}
        addSection={addSection}
      />
    </div>
  );
};

export default DefineSidebar;
