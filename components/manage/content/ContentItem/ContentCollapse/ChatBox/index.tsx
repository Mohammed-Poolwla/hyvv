import { useEffect, useRef, useState } from "react";
import { Box } from "@chakra-ui/react";
import ChatBubble from "./ChatBubble";
import { IComment } from "../../../ManageContent";
import ChatInput from "./ChatInput";
const ChatBox = ({ comment, addComment }) => {
  const chatRef = useRef(null);
  const [fileList, setFileList] = useState([]);

  useEffect(() => {
    chatRef.current.scrollTop = chatRef.current.scrollHeight;
  }, [chatRef.current?.scrollHeight]);
  return (
    <Box className="cursor-default p-2">
      <Box
        className="flex max-h-[250px] flex-col gap-y-2 overflow-auto"
        ref={chatRef}
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
      >
        {comment.map((item: IComment, index: number) => {
          return (
            <ChatBubble
              key={index}
              content={item.content}
              author={item.author}
              file={item.file}
            />
          );
        })}
      </Box>
      <ChatInput
        fileList={fileList}
        setFileList={setFileList}
        addComment={addComment}
      />
    </Box>
  );
};

export default ChatBox;
