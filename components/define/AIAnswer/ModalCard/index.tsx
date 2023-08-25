import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Button, Input, Select, Text, Wrap, WrapItem } from "@chakra-ui/react";

function ModalChip() {
  return (
    <Wrap>
      <WrapItem>
        <Text
          color="#08657E"
          fontSize="10px"
          bg="#CEE0E5"
          py={1}
          fontWeight="semibold"
          px={2}
          borderRadius={2}
        >
          Required
        </Text>
      </WrapItem>
    </Wrap>
  );
}
const ModalCardItem = ({ title, description, children }) => {
  return (
    <div className="flex flex-col gap-y-2.5 rounded-md border border-[#D6D6D6] p-6">
      <ModalChip />
      <div className="text-2xl font-semibold">{title}</div>
      <div className="text-base font-medium text-[#84818A]">{description}</div>
      {children}
    </div>
  );
};

export default ModalCardItem;
