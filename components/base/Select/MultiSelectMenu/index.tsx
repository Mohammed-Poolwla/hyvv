import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Badge,
  Button,
  Menu,
  MenuButton,
  MenuItemOption,
  MenuList,
  MenuOptionGroup,
} from "@chakra-ui/react";
import {
  Dispatch,
  JSXElementConstructor,
  ReactElement,
  SetStateAction,
} from "react";
export interface IMultiSelectMenu {
  title: string;
  data: string[];
  icon?: ReactElement<any, string | JSXElementConstructor<any>>;
  selected?: string | string[];
  setSelected?: Dispatch<SetStateAction<string | string[]>>;
}

const MultiSelectMenu: React.FC<IMultiSelectMenu> = ({
  title,
  data,
  selected,
  setSelected,
  icon,
}) => {
  return (
    <Menu closeOnSelect={false}>
      <MenuButton
        as={Button}
        leftIcon={icon || null}
        rightIcon={<ChevronDownIcon />}
        px={4}
        py={2}
        transition="all 0.2s"
        borderRadius="md"
        borderWidth="1px"
        borderColor="#E4E4E4"
        bg="white"
        _active={{ bg: "white" }}
        _hover={{ bg: "white" }}
      >
        <div className="flex items-center">
          {title}
          {selected.length ? (
            <Badge
              colorScheme="main"
              borderRadius={"50px"}
              ml={1}
              minW={5}
              h={5}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              {selected.length}
            </Badge>
          ) : (
            ""
          )}
        </div>
      </MenuButton>
      <MenuList>
        <MenuOptionGroup
          type="checkbox"
          value={selected}
          onChange={(e) => setSelected(e)}
        >
          {data.map((item: string, i: number) => {
            return (
              <MenuItemOption key={i} value={item}>
                {item}
              </MenuItemOption>
            );
          })}
        </MenuOptionGroup>
      </MenuList>
    </Menu>
  );
};

export default MultiSelectMenu;
