import Head from "next/head";

export interface IMainLayout extends React.ComponentPropsWithoutRef<"div"> {
  justify?: "items-center" | "items-start";
}

const MainLayout: React.FC<IMainLayout> = ({
  children,
  justify = "items-center",
  ...divProps
}) => {
  return (
    <>
      <Head>
        <title>NextJs Fullstack App Template</title>
      </Head>
      <div {...divProps} className={`flex min-h-screen flex-col ${justify}`}>
        {/* <Header /> */}
        <main className="px-5">{children}</main>
        <div className="m-auto" />
        {/* <Footer /> */}
      </div>
    </>
  );
};

export default MainLayout;
