import { useRef } from "react";
import {
  Box,
  IconButton,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Tag,
  TagCloseButton,
  TagLabel,
} from "@chakra-ui/react";
import { IoSend } from "react-icons/io5";
import { BsChatDots } from "react-icons/bs";
import { MdAttachFile } from "react-icons/md";
const ChatInput = ({ fileList, setFileList, addComment }) => {
  const inputRef = useRef(null);
  const fileRef = useRef(null);
  const submitComment = (content: string) => {
    inputRef.current.innerHTML = "";
    addComment(
      content,
      fileList.map((item) => {
        return item.name;
      })
    );
    setFileList([]);
    fileRef.current.files = null;
  };

  return (
    <Box className="mt-2 flex items-end" columnGap={1}>
      <InputGroup size={"sm"} width={"calc(100% - 38px)"}>
        <InputLeftElement pointerEvents="none">
          <BsChatDots color="#555" />
        </InputLeftElement>

        <Box className="w-full rounded-2xl border border-[#a5c6cf] bg-white px-7 py-1 transition-all hover:border-[#08657e]">
          <Box
            contentEditable={true}
            aria-multiline={true}
            spellCheck={true}
            className="max-h-[150px] w-full cursor-text overflow-auto py-[1px] text-[14px] outline-none "
            ref={inputRef}
            onKeyDown={(e) => {
              if (e.ctrlKey && e.keyCode == 13) {
                submitComment(inputRef.current.innerHTML);
              }
            }}
            css={{
              "&::-webkit-scrollbar": {
                width: "5px",
              },
              "&::-webkit-scrollbar-track": {
                background: "#f5f5f5",
                borderRadius: "24px",
              },
              "&::-webkit-scrollbar-thumb": {
                background: "#a5c6cf",
                borderRadius: "24px",
              },
              "&::-webkit-scrollbar-thumb:hover": {
                background: "#08657e",
                borderRadius: "24px",
              },
            }}
          ></Box>
          {fileList.length !== 0 ? (
            <Box className="mt-2 flex flex-wrap gap-x-1 gap-y-1 ">
              {fileList.map((item, index) => {
                return (
                  <Tag
                    size="sm"
                    key={index}
                    borderRadius="full"
                    variant="solid"
                    colorScheme="main"
                  >
                    <TagLabel className="font-extralight">{item.name}</TagLabel>
                    <TagCloseButton
                      onClick={() =>
                        setFileList(fileList.filter((_, i) => i !== index))
                      }
                    />
                  </Tag>
                );
              })}
            </Box>
          ) : (
            ""
          )}
        </Box>

        <InputRightElement>
          <IconButton
            as="label"
            aria-label="Pick Files"
            borderRadius={"2xl"}
            minW={6}
            h={6}
            className="cursor-pointer"
            colorScheme="main"
            icon={
              <>
                <MdAttachFile color="#eee" />
                <input
                  type="file"
                  hidden
                  multiple
                  ref={fileRef}
                  onChange={() => {
                    setFileList(Array.from(fileRef.current.files));
                  }}
                />
              </>
            }
          ></IconButton>
        </InputRightElement>
      </InputGroup>
      <IconButton
        colorScheme="main"
        size={"sm"}
        borderRadius={"2xl"}
        aria-label="Submit"
        icon={<IoSend color="#eee" />}
        onClick={() => {
          submitComment(inputRef.current.innerHTML);
        }}
      ></IconButton>
    </Box>
  );
};

export default ChatInput;
