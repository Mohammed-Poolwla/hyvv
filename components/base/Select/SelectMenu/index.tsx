import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Button,
  Menu,
  MenuButton,
  MenuGroup,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { Dispatch, SetStateAction, useState } from "react";

export interface IData {
  label: string;
  value?: string | number;
  disabled?: boolean;
  link?: string;
  count?: number;
  child?: IData[];
}

export interface ISelectMenu {
  data: IData[];
  placeholder?: string;
  selected?: string | number;
  setSelected?: Dispatch<SetStateAction<string | number>>;
  type?: string;
  label?: string;
  size?: string;
  sx?: object;
  variant?: string;
  onChange?: Function;
  isInvalid?: boolean;
}

const MenuItemComponent = ({ item, selected, setSelected, onChange }) => {
  const router = useRouter();
  return (
    <MenuItem
      sx={{
        px: 5,
        color: item.disabled ? "#aaa" : "#555",
        bgColor: item.value
          ? item.value === selected
            ? "main.50"
            : ""
          : item.label === selected
          ? "main.50"
          : "",
        fontWeight: "medium",
        fontSize: 17,
      }}
      _focus={{ bgColor: "inherit" }}
      _hover={{
        bgColor: `${!item.disabled ? "main.50" : ""}`,
      }}
      className={`flex items-center justify-between capitalize ${
        item.disabled ? "cursor-not-allowed" : ""
      }`}
      onClick={() => {
        !item.disabled ? setSelected?.(item.value || item.label) : null;
        !item.disabled ? onChange?.(item.value || item.label) : null;
        if (item.link) {
          router.replace(item.link);
        }
      }}
    >
      <span>{item.label}</span>
      {item.count ? (
        <span className="text-[#84818A]">({item.count})</span>
      ) : null}
    </MenuItem>
  );
};

const SelectMenu: React.FC<ISelectMenu> = ({
  data,
  selected,
  setSelected,
  type,
  placeholder,
  label,
  size,
  sx,
  variant,
  onChange,
  isInvalid,
}) => {
  const [limit, setLimit] = useState(20);
  function handleScrollEnd(e) {
    const bottom =
      e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
    if (bottom) {
      setLimit((prevLimit) => prevLimit + 10);
    }
  }
  const rawData = [];
  data.forEach((item) => {
    item.child
      ? item.child.forEach((childItem) => {
          rawData.push(childItem);
        })
      : rawData.push(item);
  });

  return (
    <div className="relative">
      {label ? <p className="mb-2">{label}</p> : ""}
      <Menu>
        <MenuButton
          as={Button}
          colorScheme="black"
          sx={{
            fontWeight: 400,
            color: selected ? "#000" : placeholder ? "#9ca3af" : "",
            borderColor: isInvalid ? "#E53E3E" : "#DEDEDE",
            boxShadow: isInvalid ? "0 0 0 1px #E53E3E" : "",
            ...sx,
          }}
          className="w-full capitalize [&>span]:truncate [&>span]:text-left"
          variant={variant || "outline"}
          css={{
            "&~div": { width: "100% !important", minWidth: "100% !important" },
          }}
          size={size}
          rightIcon={<ChevronDownIcon />}
        >
          <span className={`${type === "startup" ? "font-bold" : ""}`}>
            {selected
              ? rawData.find((item) =>
                  item.value ? item.value == selected : item.label == selected
                )?.label ||
                (placeholder ?? "")
              : placeholder ?? ""}
          </span>
        </MenuButton>
        <MenuList
          className="max-h-[50vh] overflow-auto"
          sx={{ minWidth: "max-content", width: "100%" }}
          onScroll={handleScrollEnd}
        >
          {data
            ?.map((item: any, i: number) => {
              return item.child ? (
                <MenuGroup
                  key={i}
                  title={item.label}
                  sx={{
                    fontSize: "20px",
                    margin: "0px",
                    padding: "6px 12px",
                    cursor: "",
                  }}
                >
                  {item.child.map((childItem: any, childI: number) => {
                    return (
                      <MenuItemComponent
                        key={childI}
                        item={childItem}
                        selected={selected}
                        setSelected={setSelected}
                        onChange={onChange}
                      />
                    );
                  })}
                </MenuGroup>
              ) : (
                <MenuItemComponent
                  key={i}
                  item={item}
                  selected={selected}
                  setSelected={setSelected}
                  onChange={onChange}
                />
              );
            })
            .slice(0, limit)}
        </MenuList>
      </Menu>
    </div>
  );
};

export default SelectMenu;
