import { getSession } from "@auth0/nextjs-auth0";
import NewLayout from "../components/layouts/primary/NewLayout";
import { NextPageWithLayout } from "./page";

interface IAboutPageProps {}

const About: NextPageWithLayout<IAboutPageProps> = () => {
  return <div>About page </div>;
};

export default About;

About.getLayout = (page) => {
  return <NewLayout>{page}</NewLayout>;
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
