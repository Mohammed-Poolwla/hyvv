import { getSession } from "@auth0/nextjs-auth0";

import Head from "next/head";

import Layout from "../../components/layouts/AppLayout/Layout";

const FreelancerDashboard = () => {
  return (
    <>
      <Head>
        <title>HYVV | Freelancer Dashboard</title>
        <meta
          name="Welcome to HYVV, The Freelancer Marketplace"
          content="Freelancer, Start Here"
        />
      </Head>
      <div className="flex h-full items-center justify-center text-[32px]">
        Freelancer Dashboard
      </div>
    </>
  );
};

export default FreelancerDashboard;

FreelancerDashboard.getLayout = (page) => {
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
