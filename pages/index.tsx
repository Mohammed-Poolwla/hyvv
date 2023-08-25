// import { gql } from "@apollo/client";
import { getSession } from "@auth0/nextjs-auth0";
import Head from "next/head";
import {
  BorderSection,
  HeroSection,
  HNotification,
  MiddleSection,
  VNotification,
} from "../components/Landing";
import MarketingLayout from "../components/layouts/MarketingLayout/MarketingLayout";
import Layout from "../components/layouts/primary/Layout";

const MarketingContent = () => {
  return (
    <div className="grid grid-cols-1 gap-y-2 overflow-auto pt-24">
      <HNotification />
      <VNotification />
      <HeroSection />
      <MiddleSection />
      <BorderSection />
    </div>
  );
};

const Home = ({ session }) => {
  return (
    <>
      <Head>
        <title>HYVV | Startup OS</title>
        <meta
          name="Welcome to HYVV, The Strtup Operating System"
          content="Startups, Start Here"
        />
      </Head>
      {!session && <MarketingContent />}
    </>
  );
};

export default Home;

Home.getLayout = (page) => {
  return page.props.session ? (
    <Layout>{page}</Layout>
  ) : (
    <MarketingLayout>{page}</MarketingLayout>
  );
};

export const getServerSideProps = async ({ req, res }) => {
  const session = getSession(req, res);
  if (session) {
    return {
      redirect: {
        permanent: false,
        destination: "/startup/dashboard",
      },
      props: {},
    };
  }

  return {
    props: { hideSideNav: true },
  };
};
