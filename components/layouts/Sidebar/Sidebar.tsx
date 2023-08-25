import { useEffect, useRef, useState } from "react";

import { useRouter } from "next/router";

import Link from "next/link";

import {
  IconButton,
  Image,
  Tab,
  TabIndicator,
  TabList,
  Tabs,
  Text,
} from "@chakra-ui/react";

import { useAppStore } from "../../../lib/store";
import useCustomToast from "../../../utils/toast";

import { ChevronRightIcon } from "@chakra-ui/icons";
import BuildIcon from "../../icons/BuildIcon";
import DashboardIcon from "../../icons/DashboardIcon";
import DefineIcon from "../../icons/DefineIcon";
import ManageIcon from "../../icons/ManageIcon";

const dataSource = [
  {
    name: "/startup/dashboard",
  },
  {
    name: "/define",
  },
  {
    name: "/build",
  },
  {
    name: "/manage",
  },
  // {
  //   name: "settings",
  // },
];

const Sidebar = () => {
  const router = useRouter();
  const { startupData } = useAppStore();
  const showToast = useCustomToast();

  let path = router.route;
  const [selectedMenuItem, setSelectedMenuItem] = useState(
    dataSource.findIndex((obj) => path.includes(obj.name))
  );

  const tabRef = useRef<HTMLInputElement>();

  useEffect(() => {
    setSelectedMenuItem(dataSource.findIndex((obj) => obj.name === path));
  }, [router]);

  const renderIcon = (type: string) => {
    switch (type) {
      case "/startup/dashboard":
        return <DashboardIcon />;
      case "/define":
        return <DefineIcon />;
      case "/build":
        return <BuildIcon />;
      case "/manage":
        return <ManageIcon />;
      default:
        return;
    }
  };

  return (
    <div className="relative h-screen w-[75px] min-w-[75px] border-r border-[#e4e4e4]">
      <Image src="/hyvv-small.png" alt="Hyvv Logo" />
      <Text color="#84818A" fontSize="xs" my={2} className="text-center">
        HOME
      </Text>
      <Tabs
        orientation="vertical"
        position="relative"
        defaultIndex={selectedMenuItem}
      >
        <TabList
          sx={{
            width: "100%",
            border: 0,
            display: "flex",
            flexDirection: "column",
            rowGap: 1,
          }}
          ref={tabRef}
        >
          {dataSource.map((data, inx) => (
            <Tab
              key={inx}
              sx={{ p: 0, border: 0 }}
              _active={{ bgColor: "inherit" }}
              css={{
                "&[aria-selected=true]>a>div>div": {
                  backgroundColor: "#dae9ed",
                  color: "#08657e",
                },
              }}
            >
              <div className="border-r-[4px]" />
              <Link
                key={inx + 1}
                href={data.name}
                passHref
                className="flex w-full"
              >
                <div
                  className={`flex flex-1 items-center justify-center`}
                  onClick={() => setSelectedMenuItem(inx)}
                >
                  <div
                    className={`flex h-11 w-11 items-center justify-center rounded-md text-[#84818A] transition-all`}
                  >
                    {renderIcon(data.name)}
                  </div>
                </div>
              </Link>
            </Tab>
          ))}
        </TabList>
        <TabIndicator
          bg="main.500"
          width={"4px"}
          sx={{ borderRightRadius: "10px" }}
        />
      </Tabs>
      <IconButton
        aria-label="Menu"
        borderRadius="50px"
        size="xs"
        position="absolute"
        top="4"
        right="-3"
        backgroundColor={"white"}
        className="z-10 bg-white shadow-md"
        icon={<ChevronRightIcon />}
      />
    </div>
  );
};

export default Sidebar;
