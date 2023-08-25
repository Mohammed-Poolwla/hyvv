import React, { Dispatch, SetStateAction, useState } from "react";

import Image from "next/image";

import {
  Avatar,
  Button,
  ButtonGroup,
  Checkbox,
  Collapse,
  Text,
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";
import {
  Step,
  StepIndicator,
  Stepper,
  StepSeparator,
} from "@chakra-ui/stepper";

import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";

import { BsCheck2Circle, BsStar, BsUpload } from "react-icons/bs";

import StarRating from "../../../../../../ratings/StarRating";

import ChatItem from "./ChatItem/ChatItem";

import { getTime } from "../../../../../../../lib/time";

export interface IHistory {
  avatar: string;
  sender: string;
  to: string;
  time: string;
  message: string;
  images?: Array<string>;
}

export interface IChatItem {
  date: string;
  history: Array<IHistory>;
}

export interface IChatHistory {
  chatHistories: Array<IChatItem>;
  setChatHistories: Dispatch<SetStateAction<Array<IChatItem>>>;
}

const ChatHistory: React.FC<IChatHistory> = ({
  chatHistories,
  setChatHistories,
}) => {
  const { localTime, timeWithDayMonth } = getTime();

  const { isOpen, onToggle } = useDisclosure();
  const { isOpen: isExperienceOpen, onToggle: onExperienceToggle } =
    useDisclosure();

  const [completed, setCompleted] = useState(false);
  const [accept, setAccept] = useState(false);

  const [freelancerSkillRating, setFreelancerSkillRating] = useState(0);
  const [communicationRating, setCommunicationRating] = useState(0);
  const [overallRating, setOverallRating] = useState(0);

  const [lastMessage, setLastMessage] = useState("");

  const [images, setImages] = useState<Array<string>>([]);

  const handleLastMessge = (e) => {
    setLastMessage(e.target.value);
  };

  const handleSend = () => {
    chatHistories[chatHistories.length - 1].history.push({
      avatar: "/avatar3.png",
      sender: "You",
      to: "Dennis Callis",
      time: timeWithDayMonth,
      message: lastMessage,
      images: [...images],
    });

    setLastMessage("");
    setImages([]);

    setChatHistories([...chatHistories]);
  };

  const handleUpload = () => {
    document.getElementById("files").click();
  };

  const handleFiles = (event) => {
    for (let i = 0; i < event.target.files.length; i++) {
      images.push(URL.createObjectURL(event.target.files[i]));
    }

    setImages([...images]);
  };

  return (
    <>
      {chatHistories.map((chatHistory, index) => (
        <div key={index}>
          <div className="mb-4 flex w-32 items-center justify-center rounded-r-full bg-[#CEE0E5] p-2 text-[14px] font-semibold text-hyvv-main">
            {chatHistory.date}
          </div>
          <Stepper index={-1} size="lg" orientation="vertical" className="p-4">
            {chatHistory.history.map((historyItem, index) => (
              <ChatItem
                avatar={historyItem.avatar}
                sender={historyItem.sender}
                to={historyItem.to}
                time={historyItem.time}
                message={historyItem.message}
                images={historyItem.images}
                key={index}
              />
            ))}

            {!accept && chatHistories.length - 1 === index ? (
              <Step className="w-full">
                <StepIndicator className="border-none">
                  <Avatar name="You" src="/avatar3.png" />
                </StepIndicator>

                <div className="w-full">
                  <div
                    className="mt-2 flow-root cursor-pointer"
                    onClick={onToggle}
                  >
                    <div className="float-left ml-2 flex gap-2">
                      <Text
                        fontSize="16px"
                        className="font-semibold text-hyvv-title-2"
                      >
                        Use a quick response
                      </Text>
                      <ChevronDownIcon className="mb-auto mt-auto" />
                    </div>
                    <div className="float-right flex gap-2">
                      <Text
                        fontSize="14px"
                        className="fonr-semibold text-hyvv-description"
                      >
                        {localTime}
                      </Text>
                      {!isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
                    </div>
                  </div>
                  <Collapse in={!isOpen} animateOpacity>
                    <Textarea
                      value={lastMessage}
                      onChange={handleLastMessge}
                      className="mt-4"
                    />
                    <div className="flex gap-2 overflow-x-auto pb-2 pt-2">
                      <input
                        hidden
                        type="file"
                        id="files"
                        name="files"
                        accept=".jpg, .png, .jpeg, .gif, .bmp, .tif, .tiff|image/*"
                        onChange={handleFiles}
                        multiple
                      />
                      {images.length === 0 ? (
                        <Button
                          leftIcon={<BsUpload />}
                          variant="outline"
                          onClick={handleUpload}
                        >
                          Upload files
                        </Button>
                      ) : null}
                      {images.map((image, index) => (
                        <Image
                          alt="image"
                          src={image}
                          width="100"
                          height="100"
                          key={index}
                        />
                      ))}
                    </div>
                    {completed ? (
                      <ButtonGroup className="mt-4" gap={2}>
                        <Button
                          colorScheme="main"
                          leftIcon={<CheckIcon />}
                          onClick={() => setAccept(true)}
                        >
                          Accept
                        </Button>
                        <Button
                          variant="outline"
                          onClick={() => setCompleted(false)}
                        >
                          Revision
                        </Button>
                      </ButtonGroup>
                    ) : (
                      <div className="flow-root w-full">
                        <div className="float-left flex">
                          <Checkbox
                            colorScheme="main"
                            onChange={(e) => setCompleted(e.target.checked)}
                            className="mt-3"
                          >
                            Completed
                          </Checkbox>
                        </div>
                        <div className="float-right">
                          <Button
                            colorScheme="main"
                            variant="outline"
                            borderWidth="2px"
                            onClick={handleSend}
                          >
                            Send
                          </Button>
                        </div>
                      </div>
                    )}
                  </Collapse>
                </div>

                <StepSeparator className="border border-dashed border-white bg-none" />
              </Step>
            ) : null}

            {accept && chatHistories.length - 1 === index ? (
              <>
                <Step className="w-full">
                  <StepIndicator className="border-none">
                    <BsCheck2Circle
                      size="41px"
                      className="rounded-full bg-[#CEE0E5] p-2 text-[#08657E]"
                    />
                  </StepIndicator>

                  <div className="mt-2 flex gap-2">
                    <Text
                      fontSize="16px"
                      className="font-semibold text-hyvv-title-1"
                    >
                      Your order was marked as Complete
                    </Text>
                    <Text
                      fontSize="14px"
                      className="font-semibold text-hyvv-description"
                    >
                      {timeWithDayMonth}
                    </Text>
                  </div>
                </Step>

                <Step className="w-full">
                  <StepIndicator className="border-none">
                    <BsStar
                      size="41px"
                      className="rounded-full bg-[#CEE0E5] p-2 text-[#08657E]"
                    />
                  </StepIndicator>

                  <div className="w-full">
                    <div
                      className="mt-2 flow-root cursor-pointer"
                      onClick={onExperienceToggle}
                    >
                      <div className="float-left flex gap-2">
                        <Text
                          fontSize="16px"
                          className="font-semibold text-hyvv-title-1"
                        >
                          Review your experience
                        </Text>
                        <Text
                          fontSize="14px"
                          className="font-semibold text-hyvv-description"
                        >
                          {timeWithDayMonth}
                        </Text>
                      </div>
                      <div className="float-right">
                        {isExperienceOpen ? (
                          <ChevronDownIcon />
                        ) : (
                          <ChevronUpIcon />
                        )}
                      </div>
                    </div>

                    <Collapse in={isExperienceOpen}>
                      <div className="mb-3 mt-3 rounded-md border border-[#DFDFDF]">
                        <div className="rounded-t-md bg-gray-100 p-2">
                          <Text
                            fontSize="14px"
                            className="font-semibold text-hyvv-title-2"
                          >
                            Your Review
                          </Text>
                        </div>
                        <div className="grid grid-cols-2">
                          <div className="p-4">
                            <StarRating
                              title="Freelancer Skill"
                              rating={freelancerSkillRating}
                              setRating={setFreelancerSkillRating}
                            />
                            <StarRating
                              title="Communication"
                              rating={communicationRating}
                              setRating={setCommunicationRating}
                            />
                            <StarRating
                              title="Overall Experience"
                              rating={overallRating}
                              setRating={setOverallRating}
                            />
                          </div>
                          <div className="flex flex-col gap-4 p-4">
                            <Text
                              fontSize="16px"
                              className="font-semibold text-hyvv-title-2"
                            >
                              Write your experience
                            </Text>
                            <Textarea />
                            <Button
                              colorScheme="main"
                              variant="outline"
                              className="ml-56 rounded-md"
                            >
                              Send Feedback
                            </Button>
                          </div>
                        </div>
                      </div>
                    </Collapse>
                  </div>
                </Step>
              </>
            ) : null}
          </Stepper>
        </div>
      ))}
    </>
  );
};

export default ChatHistory;
