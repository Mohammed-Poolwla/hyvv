import React, { Dispatch, SetStateAction } from "react";

import UserIcon from "../../icons/UserIcon";
import SecurityIcon from "../../icons/SecurityIcon";
import BriefcaseIcon from "../../icons/BriefcaseIcon";
import IntegrationIcon from "../../icons/IntegrationIcon";
import SubtitleIcon from "../../icons/SubTitleIcon";
import TeamIcon from "../../icons/TeamIcon";
import { IoNotifications } from "react-icons/io5";
import { HiCurrencyDollar } from "react-icons/hi";

const menuList = [
  {
    content: "Account",
    icon: <UserIcon />,
  },
  {
    content: "Security",
    icon: <SecurityIcon />,
  },
  {
    content: "Team",
    icon: <TeamIcon />,
  },
  {
    content: "Pricing & Plans",
    icon: <BriefcaseIcon />,
  },
  {
    content: "Startups",
    icon: <SubtitleIcon />,
  },
  {
    content: "Integrations",
    icon: <IntegrationIcon />,
  },
  {
    content: "Notification",
    icon: <IoNotifications size={"23px"} />,
  },
  {
    content: "Referrals",
    icon: <HiCurrencyDollar size={"24px"} />,
  },
];

export interface ISettingsSidebar {
  currentPage: string;
  setCurrentPage: Dispatch<SetStateAction<string>>;
}

const ProfileSidebar: React.FC<ISettingsSidebar> = ({
  currentPage,
  setCurrentPage,
}) => {
  return (
    <div className="flex h-full flex-col gap-y-4 py-6">
      <div className="flex flex-col gap-y-3 px-6">
        <h3 className="font-Manrope text-3xl font-semibold leading-5">
          Settings
        </h3>
        <p className="text-[12px] text-[#84818A]">
          Contrary to popular belief, Lorem Ipsum is not
        </p>
      </div>
      <div className="flex-1">
        <div className="flex flex-col gap-y-1">
          {menuList.map((item, i) => {
            return (
              <div
                key={i}
                className="flex cursor-pointer pr-6 "
                onClick={() => setCurrentPage(item.content)}
              >
                <div
                  className={`mr-4 w-1 rounded-r-lg ${
                    item.content === currentPage ? "bg-[#3694a7]" : "bg-[#fff]"
                  }`}
                />
                <div
                  className={`flex flex-1 gap-x-2 rounded-md p-2 font-semibold transition-all ${
                    item.content === currentPage
                      ? "bg-hyvv-main-hover text-hyvv-main"
                      : "bg-[#fff] text-[#84818A] hover:bg-[#d0e2e850]"
                  }`}
                >
                  {item.icon} {item.content}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProfileSidebar;
