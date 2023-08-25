import {
  Button,
  Tab,
  TabIndicator,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import Team from "./Team";
import Freelancers from "./Freelancers";

import { useSession } from "next-auth/react";
import PlanModal from "./PlanModal";

const PricingPlans = () => {
  const { data } = useSession();
  const { isOpen, onOpen, onClose } = useDisclosure();

  if (data?.user?.stripe_customer_id === null) {
    return (
      <div className="flex items-center justify-between gap-x-4 px-6 ">
        <Button colorScheme="teal" variant="solid" onClick={onOpen}>
          Change plan
        </Button>
        <PlanModal isOpen={isOpen} onClose={onClose} />
      </div>
    );
  }

  return (
    <>
      <div className="flex items-center justify-between ">
        <Tabs colorScheme="main" sx={{ w: "100%" }}>
          <div className="relative">
            <TabList
              className="flex gap-x-4 px-6"
              sx={{
                "& .chakra-tabs__tab[aria-selected=true]": {
                  color: "#3694A7",
                  borderColor: "inherit",
                },
                "& .chakra-tabs__tab[aria-selected=false]": {
                  color: "#77828f",
                },
                "& .chakra-tabs__tab": { px: 0, fontWeight: 600 },
                borderColor: "#1A386015",
              }}
            >
              <Tab>Hyvv Team</Tab>
              <Tab>Freelancers</Tab>
            </TabList>
            <TabIndicator
              mt="-2px"
              height="2px"
              bg="#3694A2"
              borderRadius="1px"
            />
          </div>
          <TabPanels
            sx={{
              "& .chakra-tabs__tab-panel": { px: 6, pb: 0, pt: 6 },
            }}
          >
            <TabPanel>
              <Team />
            </TabPanel>
            <TabPanel>
              <Freelancers />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </>
  );
};

export default PricingPlans;
