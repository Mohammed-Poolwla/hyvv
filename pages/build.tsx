import { useEffect, useState } from "react";

import { getSession } from "@auth0/nextjs-auth0";
import { useRouter } from "next/router";

import { BuildContainer, TemplateSideBar } from "../components/builds";
import useCustomToast from "../utils/toast";

import Layout from "../components/layouts/AppLayout/Layout";

import { NextPageWithLayout } from "./page";

import { useAppStore } from "../lib/store";
import { trpc } from "../utils/trpc";

const Build: NextPageWithLayout = () => {
  const router = useRouter();

  const { startupData } = useAppStore();

  const showToast = useCustomToast();

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

  const [dataSource, setDataSource] = useState<any>([]);
  const [error, setError] = useState<Boolean>(false);
  const [templateBuild, setTemplateBuild] = useState(null);

  const startUpId = startupData.selectedStartup[0];
  const {
    data: buildData,
    isSuccess,
    isLoading,
  } = trpc.build.listByStatus.useQuery({
    startUpId: startUpId,
    status: ["BUILD"],
  });
  useEffect(() => {
    if (isSuccess) {
      if (buildData.error !== null) {
        setError(true);
      } else {
        if (buildData) {
          setDataSource(buildData.data);
          setError(false);
        }
      }
    }
  }, [buildData]);

  useEffect(() => {
    if (error) {
      showToast({
        status: "error",
        description: "Please check server connection!",
      });
    }
  }, [error]);

  return (
    <div className="flex h-full">
      <BuildContainer
        dataSource={dataSource}
        isLoading={isLoading}
        templateBuild={templateBuild}
        setTemplateBuild={setTemplateBuild}
      />
      <TemplateSideBar
        errorHandle={setError}
        setTemplateBuild={setTemplateBuild}
      />
    </div>
  );
};

export default Build;

Build.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};

export const getServerSideProps = async ({ req, res }) => {
  const session = getSession(req, res);

  console.log("req: " + req);

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
