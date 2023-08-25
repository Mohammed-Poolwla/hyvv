import Head from "next/head";

import { useUser } from "@auth0/nextjs-auth0";

import { Text } from "@chakra-ui/react";

import UserTypeCard from "../../components/cards/UserTypeCard";

import Layout from "../../components/layouts/AppLayout/Layout";
import { getSession, useSession } from "next-auth/react";

const cardData = [
  {
    description: "Build a Startup",
    name: "Founder",
  },
  {
    description: "Work for a Startup",
    name: "Freelancer",
  },
  {
    description: "Manage Startups",
    name: "Accelerator",
    comingsoon: true,
  },
];

const Onboarding = () => {
  const { data } = useSession();

  const currentHours = new Date().getHours();
  const user = data?.user;
  if (!user)
    return (
      <>
        <Head>
          <title>HYVV | Select User Type</title>
          <meta
            name="Welcome to HYVV, The Strtup Operating System"
            content="Startups, Start Here"
          />
        </Head>
        <div>error loading user</div>
      </>
    );

  return (
    <>
      <Head>
        <title>HYVV | Select User Type</title>
        <meta
          name="Welcome to HYVV, The Strtup Operating System"
          content="Startups, Start Here"
        />
      </Head>
      <div className="h-[calc(100vh-75px)] bg-gray-100 p-12 font-Manrope">
        <Text fontSize="36px" className="font-semibold">
          Good{" "}
          {currentHours < 12
            ? "Morning"
            : currentHours >= 12 && currentHours < 18
            ? "Afternoon"
            : "Evening"}
          , {user.name}
        </Text>
        <div className="flex flex-col items-center justify-center pb-24 pt-24">
          <Text fontSize="30px" className="font-medium">
            Select your user type - you can be multiple types of users but
            select one to start!
          </Text>
          <div className="grid grid-cols-3 gap-6 p-8">
            {cardData.map((item, index) => (
              <UserTypeCard
                description={item.description}
                name={item.name}
                comingsoon={item.comingsoon}
                key={index}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Onboarding;

Onboarding.getLayout = (page) => {
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
