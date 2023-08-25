import { getSession } from "@auth0/nextjs-auth0";
import { useEffect } from "react";

import ManageContent from "../../components/manage/content/ManageContent";
import ManageLeftSidebar from "../../components/manage/layouts/ManageLeftSidebar/ManageLeftSidebar";
import ManageRightSidebar from "../../components/manage/layouts/ManageRightSidebar/ManageRightSidebar";

import Layout from "../../components/layouts/AppLayout/Layout";

import { useRouter } from "next/router";
import { useAppStore } from "../../lib/store";
import useCustomToast from "../../utils/toast";

const Manage = () => {
  const { startupData } = useAppStore();
  const showToast = useCustomToast();
  const router = useRouter();

  useEffect(() => {
    if (startupData.selectedStartup[0] === "") {
      showToast({
        title: "No startup is currently selected.",
        description:
          "You should select a startup to proceed with the operation corresponding to the startup.",
        status: "warning",
      });
      router.push("/startup/dashboard");
    }
  }, []);
  return (
    <div className="relative flex h-full">
      <ManageLeftSidebar />
      <ManageContent />
      <ManageRightSidebar />
    </div>
  );
};

export default Manage;

Manage.getLayout = (page) => {
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
