import { Input, Text } from "@chakra-ui/react";

import DocumentUploadIcon from "../../../icons/DocumentUploadIcon";
import SelectMenu from "../../../base/Select/SelectMenu";

const CompanyDetails = () => {
  return (
    <div>
      <div className="p-4">
        <Text fontSize="16px" color="#0d1317" className="font-semibold">
          Company Details
        </Text>
        <Text fontSize="14px" color="#84818a" className="font-Manrope">
          Lorem Ipsum is simply dummy text of the printing
        </Text>
        <div className="flex pt-2">
          <div className="flex h-[135px] min-h-[135px] w-[135px] min-w-[135px] rounded-xl border-2 border-dashed">
            <DocumentUploadIcon className="m-auto" />
          </div>
          <div className="ml-4 grid w-full grid-rows-3 gap-2">
            <Input placeholder="Company Name" />
            <Input placeholder="Slogan" />
            <Input placeholder="Website" />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2 rounded-b-md bg-[#f7f7f7] p-4">
        <SelectMenu placeholder="Stages" data={[]} />
        <SelectMenu placeholder="Industry" data={[]} />
        <SelectMenu placeholder="Team Size" data={[]} />
      </div>
    </div>
  );
};

export default CompanyDetails;
