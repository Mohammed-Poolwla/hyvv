import { Text } from "@chakra-ui/react";

import DocumentUploadIcon from "../../../icons/DocumentUploadIcon";
import FileUpload from "../../../base/FileUpload";

const ProductImage = () => {
  return (
    <div className="p-4">
      <Text fontSize="16px" color="#0d1317" className="font-semibold">
        Product&nbsp;/&nbsp;Solution image
      </Text>
      <Text fontSize="14px" color="#84818a" className="font-Manrope">
        Lorem Ipsum is simply dummy text of the printing
      </Text>
      <FileUpload
        multiple={true}
        maxSize={10485760}
        icon={<DocumentUploadIcon />}
      />
    </div>
  );
};

export default ProductImage;
