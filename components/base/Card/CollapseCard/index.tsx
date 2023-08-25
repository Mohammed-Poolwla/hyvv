import { Collapse, useDisclosure } from "@chakra-ui/react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

const CollapseCard = ({ title, children }) => {
  const { isOpen, onToggle } = useDisclosure({ defaultIsOpen: true });
  return (
    <div className="rounded-md bg-white p-4 shadow-md">
      <div className="flex items-center justify-between">
        <p className="text-[20px] font-semibold"> {title}</p>
        {isOpen ? (
          <MdKeyboardArrowUp
            onClick={onToggle}
            className="cursor-pointer"
            size={"25px"}
            color="#d2d3d9"
          />
        ) : (
          <MdKeyboardArrowDown
            onClick={onToggle}
            className="cursor-pointer"
            size={"25px"}
            color="#d2d3d9"
          />
        )}
      </div>
      <Collapse in={isOpen}>
        <div className="mt-4">{children}</div>
      </Collapse>
    </div>
  );
};

export default CollapseCard;
