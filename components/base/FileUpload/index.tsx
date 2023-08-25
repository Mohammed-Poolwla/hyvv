import { Button, IconButton, useToast } from "@chakra-ui/react";
import React, { ReactElement } from "react";
import { FiUpload } from "react-icons/fi";

export interface IFileUpload {
  accept?: string[];
  multiple?: boolean;
  maxSize?: number;
  icon?: ReactElement;
}

const FileUpload: React.FC<IFileUpload> = ({
  accept,
  multiple,
  maxSize,
  icon,
}) => {
  const [dragActive, setDragActive] = React.useState(false);
  const toast = useToast();

  const inputRef = React.useRef(null);

  function handleFile(files) {
    if (checkFileExtensions(files, accept) && checkFileSize(files, maxSize)) {
      alert("Number of files: " + files.length); //temp
      inputRef.current.files = null;
    } else {
      toast({
        title: "Account created.",
        description: "Please check the file size and type.",
        status: "warning",
        position: "top-right",
        duration: 2000,
        isClosable: true,
      });
    }
  }

  function checkFileSize(fileList, maxSizeInBytes) {
    if (maxSizeInBytes) {
      let totalSize = 0;
      for (let i = 0; i < fileList.length; i++) {
        const file = fileList[i];
        totalSize += file.size;
      }
      return totalSize <= maxSizeInBytes;
    } else {
      return true;
    }
  }

  function formatBytes(bytes, decimals = 2) {
    if (bytes === 0) {
      return "0 Bytes";
    }
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
  }

  function checkFileExtensions(fileList, allowedExtensions) {
    if (allowedExtensions) {
      const extensions = allowedExtensions.map((ext) => ext.toUpperCase());

      for (let i = 0; i < fileList.length; i++) {
        const file = fileList[i];
        const fileExtension = file.name.split(".").pop().toUpperCase();
        if (!extensions.includes(fileExtension)) {
          return false;
        }
      }

      return true;
    } else {
      return true;
    }
  }
  const handleDrag = function (e) {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = function (e) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files);
    }
  };

  const handleChange = function (e) {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files);
    }
  };

  const onButtonClick = () => {
    inputRef.current.click();
  };

  const extensionsToString = (extensions: string[]) => {
    let updatedExtensions = [...extensions];
    if (updatedExtensions.length === 1) {
      return updatedExtensions[0].toUpperCase();
    }

    const last = updatedExtensions.pop().toUpperCase();

    return (
      updatedExtensions.map((extension) => extension.toUpperCase()).join(", ") +
      " or " +
      last
    );
  };
  return (
    <form
      className="relative"
      onDragEnter={handleDrag}
      onSubmit={(e) => e.preventDefault()}
    >
      <input
        ref={inputRef}
        type="file"
        className="hidden"
        multiple={multiple}
        accept={accept?.map((e) => `.${e}`).join(", ")}
        onChange={handleChange}
      />
      <label
        htmlFor="input-file-upload"
        className={`flex items-center justify-center rounded-md border border-dashed p-4 transition-all ${
          dragActive ? "bg-[#edf6f7]" : ""
        }`}
      >
        <div className="flex flex-col items-center">
          {icon || (
            <IconButton
              colorScheme="main"
              variant={"ghost"}
              sx={{ backgroundColor: "#f5f5f5" }}
              aria-label="upload"
              icon={<FiUpload />}
            />
          )}

          <span className="text-[16px] font-semibold">
            Drag & drop files or{" "}
            <Button variant={"link"} colorScheme="main" onClick={onButtonClick}>
              Browse
            </Button>
          </span>
          <span className="text-md text-[#4F4D55]">
            {accept ? `${extensionsToString(accept)} - ` : ""}
            {maxSize ? `Max file size ${formatBytes(maxSize)}` : ""}
          </span>
        </div>
      </label>
      {dragActive && (
        <div
          className="absolute left-0 top-0 h-full w-full"
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        ></div>
      )}
    </form>
  );
};

export default FileUpload;
