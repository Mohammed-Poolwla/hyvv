// import { gql } from "@apollo/client";
import { getSession } from "@auth0/nextjs-auth0";
import { Button, Link } from "@chakra-ui/react";
import NextLink from "next/link";
import MarketingLayout from "../components/layouts/MarketingLayout/MarketingLayout";
import Layout from "../components/layouts/primary/Layout";

const Home = () => {
  return (
    <>
      <div className="sm:flex-cols-2 flex-cols-1 flex h-full items-center justify-center gap-28">
        <Link
          as={NextLink}
          href="/auth/signup?type=founder"
          color="red.900"
        >
          <Button {...style.leftBtn}>{`I'm a founder`}</Button>
        </Link>
        <Link
          as={NextLink}
          href="/auth/signup?type=freelancer"
          color="red.900"
        >
          <Button {...style.rightBtn}>{`I'm a freelancer`}</Button>
        </Link>
      </div>
    </>
  );
};

const style = {
  leftBtn: {
    height: "14",
    width: "96",
    minW: "180px",
    maxW: "244px",
    backgroundColor: "#fffa4c",
    border: "1px solid black",
    boxShadow: "0px 2px 1px 1px black",
    fontSize: "larger",
    fontWeight: "bold",
  },
  rightBtn: {
    height: "14",
    width: "96",
    minW: "180px",
    maxW: "244px",
    color: "white",
    backgroundColor: "#333333",
    border: "1px solid black",
    boxShadow: "0px 2px 1px 1px black",
    fontSize: "larger",
    fontWeight: "bold",
  },
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
      props: { session: session.user },
    };
  }

  return {
    props: { hideSideNav: true },
  };
};
