import { Box, Checkbox, Text } from "@chakra-ui/react";
import Certification from "./Certification";
import LanguageGroup from "./LanguageGroup";

const Education = () => {
  return (
    <>
      <Certification />
      <LanguageGroup />
      <div className="flex gap-x-4">
        <Checkbox className="text-[#08657E]" size="lg" />
        <Text className="text-base text-gray-500">
          The information I provided are valid & I&apos;m responsible for this.
        </Text>
      </div>
    </>
  );
};

export default Education;
