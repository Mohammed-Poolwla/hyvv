import { ChevronDownIcon } from "@chakra-ui/icons";
import { Box, Text } from "@chakra-ui/react";
import { useState } from "react";

import MarketingNavLink from "./MarketingNavLink";

const link_list = [
  {
    topLabel: "Solutions",
    link: [
      {
        label: "Startups",
        route: "",
      },
      {
        label: "Freelancers",
        route: "",
      },
      {
        label: "Accelerators / Incubators",
        route: "",
      },
    ],
  },
  {
    topLabel: "Features",
    link: [
      {
        label: "Define",
        route: "define",
      },
      {
        label: "Build",
        route: "build",
      },
      {
        label: "Manage",
        route: "manage",
      },
      {
        label: "Marketplace",
        route: "marketplace",
      },
      {
        label: "Dashboards",
        route: "dashboards",
      },
      {
        label: "Automations",
        route: "automations",
      },
      {
        label: "Payments",
        route: "payments",
      },
      {
        label: "Integrations",
        route: "integrations",
      },
      {
        label: "Team Communications",
        route: "",
      },
      {
        label: "Live Office / Slack Community",
        route: "",
      },
      {
        label: "Accelerators",
        route: "accelearators",
      },
      {
        label: "Freelancers",
        route: "freelancers",
      },
    ],
  },
  {
    topLabel: "Pricing",
    link: [
      {
        label: "Startup",
        route: "",
      },
      {
        label: "Scaleup",
        route: "",
      },
      {
        label: "Stayup",
        route: "",
      },
    ],
  },
  {
    topLabel: "Resources",
    link: [],
  },
];

type MarketingNavLinkProps = {
  label: string;
  route: string;
};

const MarketingNavLinkGroup = () => {
  const [list, setList] = useState<Array<MarketingNavLinkProps>>([
    { label: "Label", route: "" },
  ]);
  const [state, setState] = useState<Boolean>(false);

  const handleShow = (navBar: string) => {
    const linkGroup = link_list.find((item) => item.topLabel === navBar);
    setList(linkGroup.link);
    setState(true);
  };

  const handleHidden = () => {
    setState(false);
  };

  return (
    <>
      <div className="flex content-center gap-x-5">
        {link_list.map((navbar, index) => (
          <Box
            className="flex cursor-pointer gap-x-1 font-semibold"
            onMouseOver={() => handleShow(navbar["topLabel"])}
            key={index}
          >
            <Text className="text-lg transition-all hover:text-[#36A635]">
              {navbar["topLabel"]}
            </Text>
            <ChevronDownIcon className="mb-auto mt-auto" boxSize={5} />
          </Box>
        ))}
        {list.length === 0 ? (
          <></>
        ) : (
          <div
            className={`${
              state ? " absolute" : "hidden"
            } left-0 top-[22px] z-10 mt-[52px] flex w-full flex-wrap gap-1 bg-white p-5 py-3 shadow-lg backdrop-blur-sm`}
            onMouseLeave={() => handleHidden()}
          >
            {list.map((item, index) => (
              <MarketingNavLink
                label={item.label}
                route={item.route}
                key={index}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default MarketingNavLinkGroup;
