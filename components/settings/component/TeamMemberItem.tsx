import React from "react";
import Image from "next/image";

const TeamMemberItem = ({ name, email, avatar }) => {
  return (
    <div className="flex items-center gap-x-3 rounded-md border border-[#dedede] p-3">
      <Image
        src={avatar}
        alt={"team member"}
        width={50}
        height={50}
        className="max-w-[60px]"
      />
      <div>
        <p className="text-[15px] font-semibold">{name}</p>
        <p className="text-[12px] text-[#84818A]">{email}</p>
      </div>
    </div>
  );
};

export default TeamMemberItem;
