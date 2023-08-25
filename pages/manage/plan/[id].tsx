
import PlanContent from "../../../components/manage/content/PlanContent";
import ManageRightSidebar from "../../../components/manage/layouts/ManageRightSidebar/ManageRightSidebar";

import Layout from "../../../components/layouts/AppLayout/Layout";
import { getSession } from "next-auth/react";

const Plan = () => {
  return (
    <div className="relative flex h-full">
      <PlanContent />
      <ManageRightSidebar />
    </div>
  );
};

export default Plan;

Plan.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};

export const getServerSideProps = async ({ req, res }) => {
  const session = getSession();
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
