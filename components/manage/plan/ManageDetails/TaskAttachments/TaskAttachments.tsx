import { useState } from "react";

import { Input, InputGroup, Text } from "@chakra-ui/react";

import { BsUpload } from "react-icons/bs";

const TaskAttachments = () => {
  const [firstFileName, setFirstFileName] = useState("");

  const onFileUpload = () => {
    document.getElementById("taskAttchments").click();
  };

  const onFileChange = (event: any) => {
    if (event.target.files.length) setFirstFileName(event.target.files[0].name);
  };

  return (
    <div className="mb-4">
      <Text fontSize="14px" className="mt-2 mb-2 text-hyvv-title-1">
        Task Attachments
      </Text>
      <InputGroup
        className="cursor-pointer rounded-md border-2 border-dashed p-2"
        onClick={onFileUpload}
      >
        <Input
          display="none"
          id="taskAttchments"
          type="file"
          onChange={onFileChange}
          multiple
        />
        <BsUpload className="mr-2 h-[32px] w-[32px] rounded-md bg-gray-200 p-2" />
        {firstFileName === "" ? (
          <>
            <Text
              fontSize="14px"
              className="mt-auto mb-auto mr-1 font-semibold text-hyvv-title-1"
            >
              Drag & Drop files or
            </Text>
            <Text
              fontSize="14px"
              className="mt-auto mb-auto mr-1 font-semibold text-hyvv-main"
            >
              browse files
            </Text>
          </>
        ) : (
          <Text
            fontSize="14px"
            className="mt-auto mb-auto mr-1 font-semibold text-hyvv-title-1"
          >
            {firstFileName}
          </Text>
        )}
      </InputGroup>
    </div>
  );
};

export default TaskAttachments;
