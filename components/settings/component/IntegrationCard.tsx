import Image from "next/image";
import React, { useState } from "react";
import ConnectedButton from "../../base/Button/ConnectButton/";

const Integrations = ({ title, description, url, connected }) => {
  const [connectedState, setConnectedState] = useState(connected);
  return (
    <>
      <div className="flex flex-col gap-y-3 rounded-md border border-[#d6d6d6] p-5">
        <div className="flex items-start justify-between ">
          <Image src={url} width={40} height={40} alt="integration logo" />
          <ConnectedButton
            connected={connectedState}
            setConnected={setConnectedState}
          />
        </div>
        <h3 className="text-[25px] font-semibold">{title}</h3>
        <p className="text-[15px] text-[#84818A]">{description}</p>
      </div>
    </>
  );
};

export default Integrations;
