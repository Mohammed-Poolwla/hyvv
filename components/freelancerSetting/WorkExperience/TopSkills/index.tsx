import { Input, InputGroup, InputLeftElement, Text } from "@chakra-ui/react";

import { Search2Icon } from "@chakra-ui/icons";

import TagList from "./TagList/TagList";

const TopSkills = () => {
  return (
    <div className="mt-4">
      <Text fontSize="18px" className="font-semibold text-hyvv-title-1">
        Top Skills
      </Text>
      <Text
        fontSize="14px"
        className="mb-2 font-semibold text-hyvv-description"
      >
        Contrary to popular belief, Lorem Ipsum is not simply random text.
      </Text>
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <Search2Icon color="#84818A" />
        </InputLeftElement>
        <Input placeholder="Search" />
      </InputGroup>
      <TagList />
    </div>
  );
};

export default TopSkills;
