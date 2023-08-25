import { useEffect, useRef } from "react";
import { Avatar, Box, Tag, TagLabel } from "@chakra-ui/react";
import { BiCaretLeft, BiCaretRight } from "react-icons/bi";
import { BsDownload } from "react-icons/bs";
export interface IChatBubble {
  content: string;
  author: string;
  file: string[];
}
const ChatBubble: React.FC<IChatBubble> = ({ content, file, author }) => {
  const chatRef = useRef<HTMLDivElement>();
  useEffect(() => {
    chatRef.current.innerHTML = content;
  }, [content]);
  return (
    <>
      <Box
        className={`flex items-baseline pr-1 ${
          author == "Mark Palmer" ? "flex-row-reverse" : "flex-row"
        }`}
      >
        <Avatar size="xs" name={author} />
        {author == "Mark Palmer" ? (
          <BiCaretRight color="white" className="pt-1" />
        ) : (
          <BiCaretLeft color="white" className="pt-1" />
        )}

        <Box
          className={`${
            author == "Mark Palmer" ? "mr-[-7px]" : "ml-[-7px]"
          } flex-1 rounded-md bg-white px-2 py-1 text-[13px]`}
        >
          <Box ref={chatRef} style={{ overflowWrap: "anywhere" }}></Box>
          <Box className="flex flex-wrap gap-x-1 gap-y-1">
            {file?.map((item, index) => {
              return (
                <Tag
                  size="sm"
                  key={index}
                  borderRadius="full"
                  colorScheme="main"
                  columnGap={"2"}
                >
                  <TagLabel flex={1}>{item}</TagLabel>
                  <BsDownload className="cursor-pointer" />
                </Tag>
              );
            })}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ChatBubble;
