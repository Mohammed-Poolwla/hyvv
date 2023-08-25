import React from "react";

import Image from "next/image";

import { Text } from "@chakra-ui/react";

import { AttachmentIcon } from "@chakra-ui/icons";

export interface IAttachment {}

const Attachment: React.FC<IAttachment> = () => {
  const attachedImages = ["/attachment1.png", "/attachment2.png"];

  return (
    <div>
      <div className="flex gap-2">
        <AttachmentIcon className="mb-auto mt-auto" />
        <Text fontSize="14px" className="font-semibold text-hyvv-title-1">
          Attachment
        </Text>
      </div>
      <div className="flex gap-2 p-2">
        {attachedImages.map((image, index) => (
          <Image src={image} width={223} height={140} alt={image} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Attachment;
