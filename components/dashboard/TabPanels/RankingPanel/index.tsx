import React from "react";

import {
  Button,
  Tab,
  TabIndicator,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";

import { BsDownload } from "react-icons/bs";

import AllTimePanel from "./TabPanels/AllTimePanel";
import Last3MonthsPanel from "./TabPanels/Last3MonthsPanel";
import ThisYearPanel from "./TabPanels/ThisYearPanel";

const TabTitles = ["All Time", "Last 3 months", "This Year"];

export interface IRankingPanel {}

const RankingPanel: React.FC<IRankingPanel> = () => {
  return (
    <div className="m-2 flex flex-col rounded-md bg-white shadow-md">
      <div className="flow-root p-4">
        <div className="float-left">
          <Text fontSize="28px" className="font-semibold text-hyvv-title-3">
            Ranking
          </Text>
          <Text fontSize="12px" className="text-hyvv-description">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature
          </Text>
        </div>
        <div className="float-right pt-4">
          <Button variant="outline" leftIcon={<BsDownload />}>
            Generate Report
          </Button>
        </div>
      </div>
      <Tabs variant="unstyled" className="sticky">
        <TabList className="border-b">
          {TabTitles.map((title: string, index: number) => (
            <Tab
              _selected={{
                color: "#0891b2",
              }}
              key={index}
            >
              <p className="font-medium">{title}</p>
            </Tab>
          ))}
        </TabList>
        <TabIndicator
          mt="-1.5px"
          height="2px"
          bg="#0891b2"
          borderRadius="1px"
        />
        <TabPanels>
          <TabPanel>
            <AllTimePanel />
          </TabPanel>
          <TabPanel>
            <Last3MonthsPanel />
          </TabPanel>
          <TabPanel>
            <ThisYearPanel />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
};

export default RankingPanel;
