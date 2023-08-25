import {
  Tab,
  TabIndicator,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import Head from "next/head";
import { useRouter } from "next/router";
import {
  DashboardPanel,
  FinancialPanel,
  RankingPanel,
} from "../../components/dashboard";
import Layout from "../../components/layouts/AppLayout/Layout";


import axios from "axios";
import { getServerSession } from "next-auth/next";
import { getSession } from "next-auth/react";
import { useEffect } from "react";

const TabTitles = [
  "Dashboard",
  "Product/Service",
  "Financials",
  "Marketing",
  "Sales",
  "Metrics",
  "Ranking",
];

const email = "test@gmail.com";

const Dashboard = () => {

  const router = useRouter();


  return (
    <>
      <Head>
        <title>HYVV | Startup OS</title>
        <meta
          name="Welcome to HYVV, The Strtup Operating System"
          content="Startups, Start Here"
        />
      </Head>
      <Tabs
        colorScheme="main"
        className="flex h-full flex-1 flex-col"
        sx={{ display: "flex" }}
      >
        <div className="relative border-b border-b-[#e4e4e4]">
          <button
            onClick={() => {
              axios
                .post(`${router.pathname}/api/stripe/Pay`, { email })
                .then((res: { data: { url: string } }) => {
                  window.location.href = res.data.url;
                })
                .catch((err) => {
                  console.log({ err });
                });
            }}
          >
            {" "}
            Subscribe{" "}
          </button>
          <button
            onClick={() => {
              axios
                .post(`${router.pathname}/api/stripe/customerPortal`, {})
                .then((res: { data: { url: string } }) => {
                  window.location.href = res.data.url;
                })
                .catch((err) => {
                  console.log({ err });
                });
            }}
          >
            {" "}
            Manage sub{" "}
          </button>
          <TabList
            className="flex gap-x-6 px-6"
            sx={{
              "& .chakra-tabs__tab[aria-selected=true]": {
                color: "#08657e",
                fontWeight: 700,
              },
              "& .chakra-tabs__tab[aria-selected=false]": {
                color: "#84818A",
              },
              "& .chakra-tabs__tab": { px: 0, fontWeight: 500 },
              border: "none",
              borderBottom: "none",
            }}
          >
            {TabTitles.map((title: string, index: number) => {
              return (
                <Tab
                  key={index}
                  sx={{ borderBottom: "none", py: 4 }}
                  _active={{ bgColor: "inherit" }}
                >
                  {title}
                </Tab>
              );
            })}
          </TabList>
          <TabIndicator
            sx={{
              mt: "-2px",
              height: "2px",
              bgColor: "#08657e",
              borderTopRadius: 4,
            }}
          />
        </div>

        <TabPanels className="flex-1 overflow-y-auto bg-[#fafafa] p-2">
          <TabPanel>
            <DashboardPanel />
          </TabPanel>
          <TabPanel>Product / Service</TabPanel>
          <TabPanel>
            <FinancialPanel />
          </TabPanel>
          <TabPanel>Marketing</TabPanel>
          <TabPanel>Sales</TabPanel>
          <TabPanel>Metrics</TabPanel>
          <TabPanel>
            <RankingPanel />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
};

export default Dashboard;

Dashboard.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};

export const getServerSideProps = async ({ req, res }) => {
  const session = await getSession({ req });
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
