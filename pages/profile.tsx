import dynamic from "next/dynamic";
import Head from "next/head";

import { useState } from "react";
import DocumentIcon from "../components/icons/DocumentIcon";
import Layout from "../components/layouts/AppLayout/Layout";
import { Overview, Reviews, Services } from "../components/profile";
import { getSession } from "next-auth/react";


const ProfileSidebar = dynamic(
  import("../components/profile/layouts/ProfileSidebar"),
  { ssr: false }
);

const Profile = () => {
  const [current, setCurrent] = useState(["About", "Overview"]);
  const taskStatus = {
    About: {
      name: "About",
      icon: <DocumentIcon className="mb-auto mr-2 mt-auto" />,
      items: [{ title: "Overview" }, { title: "Reviews" }],
    },
    Services: {
      name: "Services",
      icon: <DocumentIcon className="mb-auto mr-2 mt-auto" />,
      items: [{ title: "Services" }],
    },
  };
  const [columns, setColumns] = useState(taskStatus);
  const contentSwitch = (key: string[]) => {
    if (key[1] === "Overview") return <Overview />;
    else if (key[1] === "Reviews") return <Reviews />;
    else if (key[1] === "Services") return <Services />;

    return (
      <div>
        {key[0]}&nbsp;/&nbsp;
        {key[1]}
      </div>
    );
  };

  return (
    <>
      <Head>
        <title>HYVV | Profile</title>
        <meta
          name="Welcome to HYVV, The Strtup Operating System"
          content="Startups, Start Here"
        />
      </Head>
      <div className="flex h-full">
        <div className="w-[300px] min-w-[300px] border-r">
          <ProfileSidebar
            current={current}
            setCurrent={setCurrent}
            columns={columns}
            setColumns={setColumns}
          />
        </div>
        <div className="w-full overflow-y-auto bg-[#fafafa] p-6">
          {contentSwitch([...current])}
        </div>
      </div>
    </>
  );
};

export default Profile;

Profile.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};

export const getServerSideProps = async ({ req, res }) => {
  const session = await getSession({req});
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
