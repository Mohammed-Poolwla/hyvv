import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Tag,
  TagCloseButton,
  TagLabel,
} from "@chakra-ui/react";
import React, { Dispatch, SetStateAction } from "react";
import { BsCheckLg } from "react-icons/bs";

export interface IData {
  title: string;
  child?: IData[];
}

export interface IMultiChipSelectMenu {
  data: IData[];
  placeholder?: string;
  selected?: string[];
  setSelected?: Dispatch<SetStateAction<string[]>>;
}

const MultiChipSelectMenu: React.FC<IMultiChipSelectMenu> = ({
  data,
  selected,
  setSelected,
  placeholder,
}) => {
  const isSelected = (item: string) => selected.indexOf(item) !== -1;
  const handleClick = (item: string) => {
    const selectedIndex = selected.indexOf(item);
    let newSelected = [];
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, item);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    setSelected(newSelected);
  };
  return (
    <>
      <Popover isLazy placement="bottom-start">
        <PopoverTrigger>
          <Button
            colorScheme="black"
            sx={{
              fontWeight: "400",
              justifyContent: "space-between",
              height: "inherit",
              py: 1.5,
              color: selected.length ? "#000" : placeholder ? "#9ca3af" : "",
            }}
            _active={{ border: "1px solid #daeaee" }}
            _hover={{ backgroundColor: "inherit" }}
            className="w-full capitalize [&>span]:truncate [&>span]:text-left"
            variant="outline"
            rightIcon={<ChevronDownIcon />}
            css={{ "&~div": { width: "100%" } }}
          >
            {selected.length ? (
              <div className="flex flex-wrap gap-2">
                {selected.map((item, i) => (
                  <Tag
                    key={i}
                    borderRadius={"full"}
                    bgColor={"#C0C0C0"}
                    color={"white"}
                    px={3}
                  >
                    <TagLabel>{item}</TagLabel>
                    <TagCloseButton
                      as={"span"}
                      onClick={(e) => {
                        e.stopPropagation();
                        e.preventDefault();
                        handleClick(item);
                      }}
                    />
                  </Tag>
                ))}{" "}
              </div>
            ) : placeholder ? (
              <div className="leading-[24px]">{placeholder}</div>
            ) : (
              <div />
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent sx={{ width: "100%" }}>
          <PopoverBody sx={{ py: 2, px: 0 }}>
            {data.map((item: any, i: number) => {
              return item.child ? (
                <Box key={i}>
                  <Box className="m-0 px-2 py-1 text-[20px] font-semibold">
                    {item.title}
                  </Box>

                  {item.child.map((childItem: any, childI: number) => {
                    return (
                      <Box
                        key={childI}
                        _focus={{ backgroundColor: "inherit" }}
                        _hover={{ backgroundColor: "#EDF2F7" }}
                        className="flex cursor-pointer items-center gap-x-2 px-2 py-1 font-normal capitalize text-[#555]"
                        onClick={() => handleClick(childItem.title)}
                      >
                        {isSelected(childItem.title) ? (
                          <BsCheckLg />
                        ) : (
                          <BsCheckLg className="invisible" />
                        )}
                        {childItem.title}
                      </Box>
                    );
                  })}
                </Box>
              ) : (
                <Box
                  key={i}
                  _focus={{ backgroundColor: "inherit" }}
                  _hover={{ backgroundColor: "#EDF2F7" }}
                  className="flex cursor-pointer items-center gap-x-2 px-2 py-1 font-normal capitalize text-[#555]"
                  onClick={() => handleClick(item.title)}
                >
                  {isSelected(item.title) ? (
                    <BsCheckLg />
                  ) : (
                    <BsCheckLg className="invisible" />
                  )}
                  {item.title}
                </Box>
              );
            })}
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </>
  );
};

export default MultiChipSelectMenu;
