import { Button } from "@chakra-ui/react";
import Link from "next/link";
import { AiOutlineArrowLeft } from "react-icons/ai";

export interface ISettingsHeader {
  current: string;
}

const pathInfo = {
  account: {
    path: "/settings",
    label: "Account",
  },
  security: {
    path: "/settings/security",
    label: "Security",
  },
  team: {
    path: "/settings/team",
    label: "Team",
  },
  pricing: {
    path: "/settings/pricing",
    label: "Pricing & Plans",
  },
  startups: {
    path: "/settings/startups",
    label: "Startups",
  },
  others: {
    path: "/settings/others",
    label: "Others",
  },
};

const SettingsHeader: React.FC<ISettingsHeader> = ({ current }) => {
  return (
    <div>
      <div className="relative">
        <Button
          gap="2"
          background="none"
          _hover={{ background: "none" }}
          fontSize="1.25rem"
          marginTop="12px"
        >
          <AiOutlineArrowLeft />
          Settings
        </Button>
      </div>
      <div className="flex w-5/6 justify-between px-16 pt-3 pb-4">
        {Object.entries(pathInfo).map(([key, { path, label }], inx) => {
          return (
            <Link key={inx + 1} href={path} passHref>
              <Button
                fontSize="lg"
                color={current == key ? "var(--hyvv-lightblue)" : "black"}
                _hover={{ background: "none" }}
                background="none"
              >
                {label}
              </Button>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default SettingsHeader;
