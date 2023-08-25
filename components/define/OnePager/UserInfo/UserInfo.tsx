import { Input, InputGroup, InputLeftAddon, Text } from "@chakra-ui/react";

const UserInfo = () => {
  return (
    <div className="p-4">
      <Text fontSize="16px" color="#0d1317" className="font-semibold">
        User Info
      </Text>
      <Text fontSize="14px" color="#84818a" className="font-Manrope">
        Lorem Ipsum is simply dummy text of the printing
      </Text>
      <div className="mt-2 grid grid-cols-2 gap-2">
        <Input placeholder="# of users acquired first month" />
        <InputGroup>
          <InputLeftAddon bgColor="white">%</InputLeftAddon>
          <Input placeholder="Growth Rate" />
        </InputGroup>
      </div>
    </div>
  );
};

export default UserInfo;
