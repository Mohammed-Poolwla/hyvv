import React from "react";
import { BsPlusLg } from "react-icons/bs";

const ConnectedButton = ({ connected, setConnected }) => {
  return (
    <>
      <div
        className={`flex cursor-pointer items-center gap-x-2 rounded-[4px] border ${
          connected
            ? "border-[#4fbf67] bg-[#4fbf67] text-white"
            : "border-[#d6d6d6] text-[#808191]"
        } px-2 py-1 text-[13px] transition-all`}
        onClick={() => {
          setConnected(!connected);
        }}
      >
        {connected ? (
          <>Connected</>
        ) : (
          <>
            <BsPlusLg />
            Connect
          </>
        )}
      </div>
    </>
  );
};

export default ConnectedButton;
