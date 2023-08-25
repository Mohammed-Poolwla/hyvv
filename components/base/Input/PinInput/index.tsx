import React, { useRef } from "react";
import PinField from "react-pin-field";
const PinInput = () => {
  const pinRef = useRef(null);
  return (
    <>
      <div
        className={`flex w-full justify-between ${pinRef?.current
          ?.map((item, index) => {
            return item.value
              ? `[&>input:nth-child(${
                  index + 1
                })]:border-[#4fbf67] [&>input:nth-child(${
                  index + 1
                })]:bg-[#fff] `
              : "";
          })
          .join("")}`}
      >
        <PinField
          className={`max-w-[50px] flex-1 rounded-md border border-[#e6e6e6] bg-[#f7f7f7] p-3 text-center text-black outline-none`}
          validate={/^[0-9]$/}
          length={6}
          ref={pinRef}
        />
      </div>
    </>
  );
};

export default PinInput;
