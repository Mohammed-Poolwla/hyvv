import { Flex, Text } from "@chakra-ui/react";

export interface IItemComponent {
  icon: any;
  text: string;
}

const ItemComponent: React.FC<IItemComponent> = ({ icon, text }) => {
  return (
    <Flex className="m-auto w-full">
      {icon}
      <Text fontSize="xs" as="b" color="gray.400" className="pt-3">
        &nbsp;{text}
      </Text>
    </Flex>
  );
};

export default ItemComponent;
