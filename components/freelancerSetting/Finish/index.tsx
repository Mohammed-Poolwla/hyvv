import { Box, Text } from "@chakra-ui/react";
import LastIcon from "../../icons/LastIcon";

const Finish: React.FC<{}> = () => {
  return (
    <Box className="flex flex-1 flex-col items-center justify-center gap-y-2">
      <LastIcon width="120" height="120" />
      <Text className="text-3xl font-medium">Congratulations!</Text>
      <Text className="w-[450px] text-center  text-gray-500">
        You will now be able to view it in a user-friendly and visually
        appealing display that makes it easy to understand and manage your
        business data.{" "}
        <span className="cursor-pointer font-bold text-[#08657E]">
          Learn More
        </span>
      </Text>
    </Box>
  );
};

export default Finish;
