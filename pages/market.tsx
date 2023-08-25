import Layout from "../components/layouts/primary/Layout";
import { NextPageWithLayout } from "./page";

import { HelpBox, ValidationBox } from "../components/market";

const Market: NextPageWithLayout = () => {
  return (
    <>
      <ValidationBox />
      <HelpBox />
    </>
  );
};

export default Market;

Market.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};
