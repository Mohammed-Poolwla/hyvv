import { Progress, Text } from "@chakra-ui/react";

import { CalendarIcon } from "@chakra-ui/icons";

import FigmaIcon from "../../../icons/FigmaIcon";
import FillCurrencyIcon from "../../../icons/FillCurrencyIcon";
import GithubIcon from "../../../icons/GithubIcon";
import GreenTrendingUpIcon from "../../../icons/GreenTrendingUpIcon";
import InfoIcon from "../../../icons/InfoIcon";
import PaypalIcon from "../../../icons/PaypalIcon";
import PinkScoreIcon from "../../../icons/PinkScoreIcon";
import PurpleUserIcon from "../../../icons/PurpleUserIcon";
import RedTrendingDownIcon from "../../../icons/RedTrendingDownIcon";
import TealExportIcon from "../../../icons/TealExportIcon";

import { useUser } from "@auth0/nextjs-auth0";
import { useState } from "react";
import SelectMenu from "../../../base/Select/SelectMenu";
import LikeIcon from "../../../icons/LikeIcon";
import ProgressChart from "./ProgressChart/ProgressChart";
import TaskItem from "./TaskItem/TaskItem";
import TimelineChart from "./TimelineChart/TimelineChart";

const internalLabels = ["Sprint 1", "Sprint 2", "Sprint 3", "Sprint 4"];
const internalChartData = [
  ["2023-04-01", "2023-04-20"],
  ["2023-04-05", "2023-04-25"],
  ["2023-04-05", "2023-04-25"],
  ["2023-04-13", "2023-05-02"],
];

const externalLabels = [
  "One-Time Task 1",
  "One-Time Task 2",
  "One-Going Task 1",
  "One-Going Task 2",
];
const externalChartData = [
  ["2023-04-10", "2023-04-29"],
  ["2023-04-20", "2023-05-09"],
  ["2023-04-15", "2023-04-25"],
  ["2023-04-29", "2023-05-12"],
];

const startupProgressChartData = [
  {
    title: "Idea Phase",
    progress: 15,
  },
  {
    title: "Define Phase",
    progress: 76,
  },
  {
    title: "Build Phase",
    progress: 43,
  },
  {
    title: "Manage Phase",
    progress: 35,
  },
];

const DashboardPanel = () => {
  const { user } = useUser();
  const [selectedTerm, setSelectedTerm] = useState(7);
  return (
    <div className="w-full">
      <Text fontSize="4xl">
        Good Afternoon, {user ? user.name ?? user.email : "user"}
      </Text>
      <div className="flex justify-between">
        <div className="b-1 pt-1">Sunday, 09 April 2023.</div>
        <div className="flex items-center gap-x-2 rounded-md bg-white pl-4 shadow-md">
          <CalendarIcon color="#84818a" />
          <Text color="#84818a">Show&nbsp;:&nbsp;</Text>
          <SelectMenu
            data={[
              { label: "Last 7 days", value: 7 },
              { label: "Last 8 days", value: 8 },
            ]}
            selected={selectedTerm}
            setSelected={setSelectedTerm}
          />
        </div>
      </div>
      <div className="mt-4 grid gap-4 sm:grid-cols-6">
        <div className="col-span-3 grid grid-cols-3 rounded-lg border-r bg-white shadow-md">
          <div className="border-r p-4">
            <div className="mb-4 flex">
              <FillCurrencyIcon className="mt-[3px]" color="#FF9F38" />
              <Text
                color="#ff9f38"
                fontSize="lg"
                className="truncate pl-[5px] pr-[30px]"
              >
                Cash On Hand
              </Text>
            </div>
            <div className="mb-4 flex justify-center">
              <Text fontSize="4xl" as="b" color="#2e2c34">
                $875K
              </Text>
            </div>
            <div className="flex justify-center">
              <Text color="#1dbf73">$649.2K</Text>
              <Text color="#84818a" className="pl-[5px]">
                available
              </Text>
            </div>
          </div>
          <div className="border-r p-4">
            <div className="mb-4 flex">
              <PinkScoreIcon className="mt-[3px]" />
              <Text
                color="#f54576"
                fontSize="lg"
                className="truncate pl-[5px] pr-[30px]"
              >
                Monthly Expenses
              </Text>
            </div>
            <div className="mb-4 flex justify-center">
              <Text fontSize="4xl" as="b" color="#2e2c34">
                $420
              </Text>
            </div>
            <div className="flex justify-center">
              <RedTrendingDownIcon className="mb-auto mt-auto" />
              <Text color="#ff4e4e" className="pl-[3px]">
                0.58%
              </Text>
              <Text color="#84818a" className="pl-[5px]">
                Last 30d
              </Text>
            </div>
          </div>
          <div className="p-4">
            <div className="mb-4 flex">
              <PurpleUserIcon className="mt-[3px]" />
              <Text
                color="#8338ec"
                fontSize="lg"
                className="truncate pl-[5px] pr-[30px]"
              >
                Runway
              </Text>
            </div>
            <div className="mb-4 flex justify-center">
              <Text fontSize="4xl" as="b" color="#2e2c34">
                69 Days
              </Text>
            </div>
            <div className="flex justify-center">
              <Text color="#08657e">View Details</Text>
              <TealExportIcon className="mb-auto ml-[5px] mt-auto" />
            </div>
          </div>
        </div>
        <div className=" col-span-3 row-span-2">
          <div className="grid grid-cols-3 rounded-t-lg border-r bg-white shadow-md">
            <div className="border-r p-4">
              <div className="mb-4 flex">
                <FillCurrencyIcon className="mt-[3px]" color="#3c8ef9" />
                <Text
                  color="#3c8ef9"
                  fontSize="lg"
                  className="truncate pl-[5px] pr-[30px]"
                >
                  Weekly Site Visits
                </Text>
              </div>
              <div className="mb-4 flex justify-center">
                <Text fontSize="4xl" as="b" color="#2e2c34">
                  1.4M
                </Text>
              </div>
              <div className="flex justify-center">
                <GreenTrendingUpIcon className="mb-auto mt-auto" />
                <Text color="#1dbf73" className="pl-[3px]">
                  +32K
                </Text>
                <Text color="#84818a" className="pl-[5px]">
                  New Last 7d
                </Text>
              </div>
            </div>
            <div className="border-r p-4">
              <div className="mb-4 flex">
                <FillCurrencyIcon className="mt-[3px]" color="#f96f66" />
                <Text
                  color="#f96f66"
                  fontSize="lg"
                  className="truncate pl-[5px] pr-[30px]"
                >
                  Facebook
                </Text>
              </div>
              <div className="mb-4 flex justify-center">
                <Text fontSize="4xl" as="b" color="#2e2c34">
                  3.4M
                </Text>
              </div>
              <div className="flex justify-center">
                <GreenTrendingUpIcon className="mb-auto mt-auto" />
                <Text color="#1dbf73" className="pl-[3px]">
                  +1.3K
                </Text>
                <Text color="#84818a" className="pl-[5px]">
                  New Last 7d
                </Text>
              </div>
            </div>
            <div className="p-4">
              <div className="mb-4 flex">
                <FillCurrencyIcon className="mt-[3px]" color="#27ae60" />
                <Text
                  color="#27ae60"
                  fontSize="lg"
                  className="truncate pl-[5px] pr-[30px]"
                >
                  LinkedIn
                </Text>
              </div>
              <div className="mb-4 flex justify-center">
                <Text fontSize="4xl" as="b" color="#2e2c34">
                  2.6M
                </Text>
              </div>
              <div className="flex justify-center">
                <GreenTrendingUpIcon className="mb-auto mt-auto" />
                <Text color="#1dbf73" className="pl-[3px]">
                  +1.5K
                </Text>
                <Text color="#84818a" className="pl-[5px]">
                  New Last 7d
                </Text>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 rounded-b-lg border-r bg-white pt-8 shadow-md">
            <div className="border-r p-4">
              <div className="mb-4 flex">
                <FillCurrencyIcon className="mt-[3px]" color="#3c8ef9" />
                <Text
                  color="#3c8ef9"
                  fontSize="lg"
                  className="truncate pl-[5px] pr-[30px]"
                >
                  Instagram
                </Text>
              </div>
              <div className="mb-4 flex justify-center">
                <Text fontSize="4xl" as="b" color="#2e2c34">
                  829K
                </Text>
              </div>
              <div className="flex justify-center">
                <GreenTrendingUpIcon className="mb-auto mt-auto" />
                <Text color="#1dbf73" className="pl-[3px]">
                  +3K
                </Text>
                <Text color="#84818a" className="pl-[5px]">
                  New Last 7d
                </Text>
              </div>
            </div>
            <div className="border-r p-4">
              <div className="mb-4 flex">
                <FillCurrencyIcon className="mt-[3px]" color="#f96f66" />
                <Text
                  color="#f96f66"
                  fontSize="lg"
                  className="truncate pl-[5px] pr-[30px]"
                >
                  TikTok
                </Text>
              </div>
              <div className="mb-4 flex justify-center">
                <Text fontSize="4xl" as="b" color="#2e2c34">
                  498K
                </Text>
              </div>
              <div className="flex justify-center">
                <GreenTrendingUpIcon className="mb-auto mt-auto" />
                <Text color="#1dbf73" className="pl-[3px]">
                  +25K
                </Text>
                <Text color="#84818a" className="pl-[5px]">
                  Last 7d
                </Text>
              </div>
            </div>
            <div className="p-4">
              <div className="mb-4 flex">
                <FillCurrencyIcon className="mt-[3px]" color="#27ae60" />
                <Text
                  color="#27ae60"
                  fontSize="lg"
                  className="truncate pl-[5px] pr-[30px]"
                >
                  Twitter
                </Text>
              </div>
              <div className="mb-4 flex justify-center">
                <Text fontSize="4xl" as="b" color="#2e2c34">
                  915K
                </Text>
              </div>
              <div className="flex justify-center">
                <GreenTrendingUpIcon className="mb-auto mt-auto" />
                <Text color="#1dbf73" className="pl-[3px]">
                  +36K
                </Text>
                <Text color="#84818a" className="pl-[5px]">
                  Last 7d
                </Text>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-3 grid grid-cols-3 rounded-lg border-r bg-white shadow-md">
          <div className="border-r p-4">
            <div className="mb-4 flex">
              <PinkScoreIcon className="mt-[3px]" />
              <Text
                color="#f54576"
                fontSize="lg"
                className="truncate pl-[5px] pr-[30px]"
              >
                Hyvv Score
              </Text>
            </div>
            <div className="mb-4 flex justify-center">
              <Text fontSize="4xl" as="b" color="#2e2c34">
                26.3
              </Text>
              <Text
                fontSize="2xl"
                as="b"
                color="#bfbcc5"
                className="mb-auto mt-auto"
              >
                &nbsp;/&nbsp;30
              </Text>
            </div>
            <div className="flex justify-center">
              <RedTrendingDownIcon className="mb-auto mt-auto" />
              <Text color="#ff4e4e" className="pl-[3px]">
                0.58%
              </Text>
              <Text color="#84818a" className="pl-[5px]">
                Last 30d
              </Text>
            </div>
          </div>
          <div className="border-r p-4">
            <div className="mb-4 flex">
              <FillCurrencyIcon className="mt-[3px]" color="#FF9F38" />
              <Text
                color="#ff9f38"
                fontSize="lg"
                className="truncate pl-[5px] pr-[30px]"
              >
                Contractors
              </Text>
            </div>
            <div className="mb-4 flex justify-center">
              <Text fontSize="4xl" as="b" color="#2e2c34">
                9
              </Text>
            </div>
            <div className="flex justify-center">
              <Text color="#08657e">View Details</Text>
              <TealExportIcon className="mb-auto ml-[5px] mt-auto" />
            </div>
          </div>
          <div className="p-4">
            <div className="mb-4 flex">
              <PurpleUserIcon className="mt-[3px]" />
              <Text
                color="#8338ec"
                fontSize="lg"
                className="truncate pl-[5px] pr-[30px]"
              >
                Team Members
              </Text>
            </div>
            <div className="mb-4 flex justify-center">
              <Text fontSize="4xl" as="b" color="#2e2c34">
                37
              </Text>
            </div>
            <div className="flex justify-center">
              <Text color="#08657e">View Details</Text>
              <TealExportIcon className="mb-auto ml-[5px] mt-auto" />
            </div>
          </div>
        </div>
        <div className="col-span-3 rounded-lg bg-white p-4 shadow-md">
          <div className="flex">
            <Text fontSize="xl">Internal Tasks</Text>
            <InfoIcon className="mb-auto ml-1 mt-auto" />
          </div>
          <Text>
            Tasks pulled from Workflow and assigned to internal team members
          </Text>
          <TaskItem
            icon={<FigmaIcon className="mb-auto mt-auto" />}
            title="Roadmap planning for scheduling feature"
            progressState="In Progress"
            progress={60}
            messages={2}
            startDate="Jan 8"
          />
          <TaskItem
            icon={<GithubIcon className="mb-auto mt-auto" />}
            title="Measurements for hadron collider rebar replacement brackets"
            progressState="In Progress"
            progress={32}
            messages={3}
            startDate="Jan 4"
          />
          <TaskItem
            icon={<PaypalIcon className="mb-auto mt-auto" />}
            title="Refactor main components to match system 1.4"
            progressState="Completed"
            progress={100}
            messages={3}
            startDate="Jan 3"
          />
          <TaskItem
            icon={<PaypalIcon className="mb-auto mt-auto" />}
            title="Add multilevel navigation to homepage"
            progressState="On Hold"
            progress={1.2}
            messages={3}
            startDate="Jan 2"
          />
        </div>
        <div className="col-span-3 rounded-lg bg-white p-4 shadow-md">
          <div className="flex">
            <Text fontSize="xl">Contractor Tasks</Text>
            <InfoIcon className="mb-auto ml-1 mt-auto" />
          </div>
          <Text>
            Tasks pulled from Workflow and assigned to external contractors
          </Text>
          <TaskItem
            icon={<FigmaIcon className="mb-auto mt-auto" />}
            title="Website Wireframes Design"
            progressState="In Progress"
            progress={60}
            messages={2}
            startDate="Jan 8"
          />
          <TaskItem
            icon={<GithubIcon className="mb-auto mt-auto" />}
            title="Set up hosting on AWS"
            progressState="In Progress"
            progress={32}
            messages={3}
            startDate="Jan 4"
          />
          <TaskItem
            icon={<PaypalIcon className="mb-auto mt-auto" />}
            title="Weekly blog content for LinkedIn"
            progressState="Completed"
            progress={100}
            messages={3}
            startDate="Jan 3"
          />
          <TaskItem
            icon={<PaypalIcon className="mb-auto mt-auto" />}
            title="Weekly content package for social media"
            progressState="On Hold"
            progress={1.2}
            messages={3}
            startDate="Jan 2"
          />
        </div>
        <div className="col-span-4 rounded-lg border-r bg-white p-4 shadow-md">
          <Text fontSize="xl">Timeline</Text>
          <Text color="#84818a">
            Your estimated timeline of outstanding tasks
          </Text>
          <div className="h-[200px] w-full pt-4">
            <TimelineChart
              title="Internal"
              labels={internalLabels}
              chartData={internalChartData}
            />
          </div>
          <div className="h-[200px] w-full pt-4">
            <TimelineChart
              title="External"
              labels={externalLabels}
              chartData={externalChartData}
            />
          </div>
        </div>
        <div className="col-span-2 rounded-lg  bg-white shadow-md">
          <div className="p-4">
            <div className="flex">
              <Text fontSize="xl">Startup Process</Text>
              <InfoIcon className="mb-auto ml-1 mt-auto" />
            </div>
            <Text color="#84818a">Keep up the building!</Text>
            <ProgressChart data={startupProgressChartData} />
          </div>
          <div className="border-t p-4">
            <div className="flow-root">
              <div className="float-left">
                <Text fontSize="lg">Overall Progress</Text>
              </div>
              <div className="float-right">
                <Text color="#08657e">34%</Text>
              </div>
            </div>
            <Progress
              value={34}
              height="29px"
              borderRadius="5px"
              className="mb-2 mt-2"
            />
            <div className="mt-4 flex">
              <LikeIcon className="" />
              <Text>
                You&apos;re outranking 53% of the companies in your cohort. Good
                job!
              </Text>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-flow-row grid-cols-3"></div>
    </div>
  );
};

export default DashboardPanel;
