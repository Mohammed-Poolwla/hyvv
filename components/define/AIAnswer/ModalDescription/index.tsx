import React from "react";

const ModalContent = ({ children }) => {
  return (
    <div className="text-md flex flex-col justify-center gap-y-4 overflow-auto rounded-r-md border-l-2 border-transparent border-l-[#cbdfe4] bg-[#ebf5f7] p-8 text-[#84818A]">
      <div className="text-xl font-semibold text-[#08657E]">HYVV Help</div>
      {children}
    </div>
  );
};

export default ModalContent;
