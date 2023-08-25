import { useState } from "react";

import { getSession } from "@auth0/nextjs-auth0";

import OfferContent from "../../../components/manage/content/OfferContent";

import { IAvailableFreelancerCard } from "../../../components/cards/AvailableFreelancerCard/AvailableFreelancerCard";

import Layout from "../../../components/layouts/AppLayout/Layout";

const Offer = () => {
  const [description, setDescription] = useState(
    "Some kind of short description go here to better explain the recommended task. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex There are many variation of these! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex There are many variation of this"
  );

  const availableFreelancers: Array<IAvailableFreelancerCard> = [
    {
      avatar: "/avatar1.png",
      name: "Isabella Taylor",
      successRate: 77,
      bidRate: 350,
    },
    {
      avatar: "/avatar1.png",
      name: "Bradley Lawlor",
      successRate: 77,
      bidRate: 350,
    },
    {
      avatar: "/avatar1.png",
      name: "Paula Mora",
      successRate: 77,
      bidRate: 350,
    },
    {
      avatar: "/avatar1.png",
      name: "Dennis Callis",
      successRate: 77,
      bidRate: 350,
    },
    {
      avatar: "/avatar1.png",
      name: "Alex Buckmaster",
      successRate: 77,
      bidRate: 350,
    },
    {
      avatar: "/avatar1.png",
      name: "David Elson",
      successRate: 77,
      bidRate: 350,
    },
    {
      avatar: "/avatar1.png",
      name: "Rodger Struck",
      successRate: 77,
      bidRate: 350,
    },
  ];

  return (
    <div className="flex h-full">
      <OfferContent
        description={description}
        setDescription={setDescription}
        availableFreelancers={availableFreelancers}
      />
    </div>
  );
};

export default Offer;

Offer.getLayout = (page) => {
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
