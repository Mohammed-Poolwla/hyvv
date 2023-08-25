import React from "react";
import { MdCheckCircle, MdOutlineCircle } from "react-icons/md";

const ValidateBox = ({ check, title }) => {
  return (
    <div className="flex items-center gap-x-1">
      {check ? (
        <MdCheckCircle color={"#08657e"} size="20px" />
      ) : (
        <MdOutlineCircle color={"#E5E6EB"} size="20px" />
      )}
      <div>
        <p className="text-[13px] text-[#84818A]">{title}</p>
      </div>
    </div>
  );
};

export default ValidateBox;
