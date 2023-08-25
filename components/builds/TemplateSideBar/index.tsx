import Image from "next/image";

import {
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  SimpleGrid,
  Spinner,
  Stack,
  Tag,
  TagCloseButton,
  TagLabel,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { FiUser } from "react-icons/fi";
import { IoMdSend } from "react-icons/io";
import { RiSearchLine } from "react-icons/ri";

import { v4 } from "uuid";

import { useAppStore } from "../../../lib/store";
import { trpc } from "../../../utils/trpc";
import SelectMenu from "../../base/Select/SelectMenu";
import categoryData from "./category_data.json"; //static temp data
import { SkeletonCard, TemplateSideBarCard } from "./SidebarCard/";
import sortbyData from "./sortby_data.json"; //static temp data
import typeData from "./type_data.json";

import useCustomToast from "../../../utils/toast";

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

export interface CardType {
  title: string;
  time: string;
  duration: string;
  upVote: number;
  downVote: number;
}

export interface ItemType {
  id: string;
  title: string;
  time: number;
  duration: string;
  upVote: number;
  downVote: number;
  upVoteState: boolean;
  downVoteState: boolean;
  hyvv_suggested: number;
  rating: number;
  price: number;
  subBar: string[];
}

export interface ITemplateSideBar {
  errorHandle: Dispatch<SetStateAction<boolean>>;
  setTemplateBuild: Dispatch<SetStateAction<object>>;
}

const TemplateSideBar: React.FC<ITemplateSideBar> = ({
  errorHandle,
  setTemplateBuild,
}) => {
  const { startupData } = useAppStore();

  const addMultiBuildMutation = trpc.build.createMany.useMutation();

  const showToast = useCustomToast();

  const [cardList, setCardList] = useState<ItemType[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("Web Development");
  const [selectedSort, setSelectedSort] = useState("");
  const [selectedType, setSelectedType] = useState("template");

  const [showSpinner, setShowSpinner] = useState(false);

  const [currentPrompt, setCurrentPrompt] = useState("");

  const [tasklist, setTaskList] = useState<Array<string>>([]);

  const getResponseFromAI = (prompt: string) => {
    setShowSpinner(true);
    fetch("/api/chatWithPrompt", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        const { answer } = data;

        if (answer.length)
          setTaskList(answer.split("\n").filter((item) => item !== ""));

        setShowSpinner(false);
      });
  };

  const addToBuild = () => {
    const parentId = v4();
    const parentTreeData: TBuildData[] = [
      {
        id: parentId,
        title: currentPrompt,
        startUpId: startupData.selectedStartup[0],
        parentId: "",
        topParentId: "",
        status: "BUILD",
        icon: "",
      },
    ];

    const childrenTreeData: TBuildData[] = [];
    tasklist.forEach((task) =>
      childrenTreeData.push({
        id: v4(),
        title: task,
        parentId: parentId,
        startUpId: startupData.selectedStartup[0],
        topParentId: parentId,
        status: "OTHER",
        icon: "",
        children: [],
      })
    );

    addMultiBuildMutation.mutate(
      { buildList: [...parentTreeData, ...childrenTreeData] },
      {
        onSuccess: () => {
          showToast({
            title: "Successfully added.",
            status: "success",
          });
          onClose();
          window.location.reload();
        },
        onError: (err) => {
          showToast({
            title: "An error occurred during the adding process.",
            description: err.message,
            status: "error",
          });
        },
      }
    );
  };

  const { isOpen, onOpen, onClose } = useDisclosure();

  const promptList = [
    "To-do List",
    "Meeting Agenda",
    "Brainstorming Session",
    "Project Plan",
    "Marketing Plan",
    "Research Plan",
    "Blog Post",
    "Press Release",
    "Learning Something",
  ];

  const {
    data: res,
    isSuccess,
    isLoading,
  } = trpc.buildTemplate.list.useQuery();

  useEffect(() => {
    if (isSuccess) {
      if (res.error !== null) {
        errorHandle(true);
      } else {
        setCardList(res.data);
        errorHandle(false);
      }
    }
  }, [res]);

  const sortCard = (cardList: ItemType[]) => {
    let sortedList = null;
    sortedList = cardList.sort(
      (a, b) =>
        b[selectedSort === "popularity" ? "upVote" : selectedSort] -
        a[selectedSort === "popularity" ? "upVote" : selectedSort]
    );
    return sortedList;
  };
  const setUpVote = (id: number) => {
    const updatedCardList = cardList.map((item) => {
      if (item.id === id.toString()) {
        if (item.upVoteState == true) {
          return {
            ...item,
            upVote: item.upVote - 1,
            upVoteState: false,
          };
        } else {
          if (item.downVoteState == true) {
            return {
              ...item,
              upVote: item.upVote + 1,
              upVoteState: true,
              downVote: item.downVote - 1,
              downVoteState: false,
            };
          } else
            return {
              ...item,
              upVote: item.upVote + 1,
              upVoteState: true,
            };
        }
      } else {
        return item;
      }
    });
    setCardList(updatedCardList);
  };
  const setDownVote = (id: number) => {
    const updatedCardList = cardList.map((item) => {
      if (item.id === id.toString()) {
        if (item.downVoteState == true) {
          return {
            ...item,
            downVote: item.downVote - 1,
            downVoteState: false,
          };
        } else {
          if (item.upVoteState == true) {
            return {
              ...item,
              downVote: item.downVote + 1,
              downVoteState: true,
              upVote: item.upVote - 1,
              upVoteState: false,
            };
          } else
            return {
              ...item,
              downVote: item.downVote + 1,
              downVoteState: true,
            };
        }
      } else {
        return item;
      }
    });
    setCardList(updatedCardList);
  };
  const handleSearch = (e: any) => {
    const searchQuery = e.target.value;
    const result = res.data.filter((item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setCardList(result);
  };

  return (
    <div className="border-1 h-full w-[500px] border-l-2 border-l-[#e4e4e4] bg-white p-6 ">
      <div className="flex h-full flex-col gap-y-5">
        {/* <div>
          <h3 className="text-lg font-semibold">Templates</h3>
          <p className="text-sm font-normal text-[#84818A]">
            Lorem Ipsum is simply dummy text of the printing{" "}
          </p>
        </div> */}
        <InputGroup className=" rounded-lg border-[#eaeaea] bg-[#f8f8f8]">
          <InputLeftElement pointerEvents="none">
            <RiSearchLine color="gray.300" />
          </InputLeftElement>
          <Input
            onChange={handleSearch}
            placeholder="Search"
            _focusVisible={{ boxShadow: "none" }}
          />
        </InputGroup>
        <SimpleGrid columns={2} spacing={3}>
          <Stack spacing={2}>
            <SelectMenu
              data={typeData}
              selected={selectedType}
              setSelected={setSelectedType}
              placeholder="Select Type"
              label="Type"
            />
          </Stack>
          <Stack spacing={2}>
            <SelectMenu
              data={sortbyData}
              selected={selectedSort}
              setSelected={setSelectedSort}
              placeholder="Select Sort"
              label="Sort by"
            />
          </Stack>
        </SimpleGrid>
        <SelectMenu
          data={categoryData}
          selected={selectedCategory}
          setSelected={setSelectedCategory}
          placeholder="Select Category"
          label="Category"
        />
        <Stack spacing={3} sx={{ flex: 1, overflow: "auto" }}>
          {isLoading
            ? Array(4)
                .fill(0)
                .map((_, index: number) => <SkeletonCard key={index} />)
            : sortCard(cardList).map((card: ItemType, inx: number) => (
                <div key={inx}>
                  <TemplateSideBarCard
                    dataSource={card}
                    type={selectedType}
                    setUpVote={setUpVote}
                    setDownVote={setDownVote}
                    setTemplateBuild={setTemplateBuild}
                  />
                </div>
              ))}
        </Stack>
        <Button colorScheme="main" mx="40%" onClick={onOpen}>
          HYVV AI
        </Button>
        <Modal
          isOpen={isOpen}
          onClose={onClose}
          size="xs"
          scrollBehavior="inside"
        >
          <ModalOverlay />
          <ModalContent>
            <ModalCloseButton />
            <ModalBody>
              <Image
                width={100}
                height={100}
                src="/chatbot-face.png"
                alt="Chatbot Face"
                className="m-auto mt-24"
              />
              <Text className="m-auto mb-6 mt-6 text-center font-Plus_Jakarta_Sans text-sm text-gray-400">
                Ask me anything - Let{"'"}s chat!
              </Text>
              <div
                className={`mb-12 mt-20 flex ${
                  !showSpinner ? "hidden" : ""
                } items-center justify-center`}
              >
                <Spinner />
              </div>
              <div className={`mb-4 ${showSpinner ? "hidden" : ""}`}>
                {!tasklist.length ? (
                  promptList.map((prompt, index) => {
                    return (
                      <Button
                        className="mr-1 mt-1 rounded-xl font-Plus_Jakarta_Sans"
                        variant="outline"
                        size="sm"
                        borderRadius="50px"
                        onClick={() => {
                          setCurrentPrompt(prompt);
                          getResponseFromAI(prompt);
                        }}
                        key={index}
                      >
                        {prompt}
                      </Button>
                    );
                  })
                ) : (
                  <div className="flex flex-col gap-2 font-Plus_Jakarta_Sans">
                    {tasklist.map((task, index) => (
                      <Tag colorScheme="blackAlpha" className="p-2" key={index}>
                        <TagLabel className="w-full">{task}</TagLabel>
                        <TagCloseButton
                          onClick={() => {
                            setTaskList(
                              tasklist.filter((item) => item !== task)
                            );
                          }}
                        />
                      </Tag>
                    ))}
                    <div className="ml-auto mt-4 flex items-end gap-2">
                      <Button
                        colorScheme="blackAlpha"
                        size="sm"
                        onClick={() => setTaskList([])}
                      >
                        Generate Again
                      </Button>
                      <Button
                        colorScheme="blackAlpha"
                        size="sm"
                        onClick={addToBuild}
                      >
                        Add
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </ModalBody>

            <ModalFooter>
              <InputGroup className="cursor-pointer">
                <InputLeftElement pointerEvents="none">
                  <FiUser />
                </InputLeftElement>
                <Input
                  placeholder="Ask HYVV AI"
                  className="cursor-pointer text-center"
                  readOnly
                />
                <InputRightElement>
                  <IoMdSend />
                </InputRightElement>
              </InputGroup>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </div>
    </div>
  );
};

export default TemplateSideBar;
