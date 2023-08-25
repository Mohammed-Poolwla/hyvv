import { getSession } from "@auth0/nextjs-auth0";

import { useRouter } from "next/router";

import {
  Button,
  Tab,
  TabIndicator,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";

import { EditIcon } from "@chakra-ui/icons";

import BreadcrumbHeader from "../../../components/base/Breadcrumb";

import Activity from "../../../components/manage/task/TabPanels/Activity";
import BillingHistory from "../../../components/manage/task/TabPanels/BillingHistory";
import TaskDetails from "../../../components/manage/task/TabPanels/TaskDetails";
import { trpc } from "../../../utils/trpc";
import Layout from "../../../components/layouts/AppLayout/Layout";
import { useEffect, useState } from "react";

const tabNames = ["Activity", "Task Details", "Billing History"];

const Task = () => {
  const router = useRouter();
  const id = Array.isArray(router.query.id)
    ? router.query.id[0]
    : router.query.id;
  const [data, setData] = useState([]);
  const { data: mData } = trpc.build.listByTopParentId.useQuery(id);
  const parentData = data?.find((item) => item.parentId === "");
  const childData = data
    ?.filter((item) => item.parentId !== "")
    .map((item) => {
      if (item.parentId == item.topParentId) return { ...item, parentId: "0" };
      else return item;
    });

  useEffect(() => {
    if (mData) setData(mData.data);
  }, [mData]);
  return (
    <div className="flex flex-col gap-6 bg-[#fafafa] p-6">
      <BreadcrumbHeader
        parentName="Manage"
        headerName="task"
        id={id}
        rightButton={
          <Button variant="outline" leftIcon={<EditIcon />}>
            Modify
          </Button>
        }
        showIcon={true}
        showRightButton={true}
      />
      <Tabs position="relative" variant="unstyled">
        <TabList className="border-b">
          {tabNames.map((tabName, index) => {
            return (
              <Tab
                _selected={{
                  color: "#3694A2",
                }}
                color="#75808D"
                fontSize="16px"
                className="font-semibold"
                key={index}
              >
                {tabName}
              </Tab>
            );
          })}
        </TabList>
        <TabIndicator
          mt="-1.5px"
          height="2px"
          bg="#3694A2"
          borderRadius="1px"
        />
        <TabPanels sx={{ mt: 6 }}>
          <TabPanel sx={{ p: 0 }}>
            <Activity />
          </TabPanel>
          <TabPanel sx={{ p: 0 }}>
            <TaskDetails parentData={parentData} childData={childData} />
          </TabPanel>
          <TabPanel sx={{ p: 0 }}>
            <BillingHistory />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
};

export default Task;

Task.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};

export const getServerSideProps = async ({ req, res }) => {
  const session = getSession(req, res);
  if (!session) {
    return {
      redirect: {
        permanent: false,
        destination: "/auth/login",
      },
      props: {},
    };
  }

  return {
    props: { hideSideNav: true },
  };
};
