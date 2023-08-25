import { ApolloProvider } from "@apollo/client";
import { UserProvider } from "@auth0/nextjs-auth0";
import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";
import "../components/base/Pagination/Pagination.css";
import "../components/base/TreeView/CheckableTree/CheckableTree.css";
import "../components/base/TreeView/DraggableTree/DraggableTree.css";
import { GlobalUserContextProvider } from "../contexts/UserContext";
import apolloClient from "../lib/apollo";
import theme from "../lib/theme";
import "../Styles/main.css";
import { trpc } from "../utils/trpc";
import { NextPageWithLayout } from "./page";
import { SessionProvider } from "next-auth/react";

interface AppPropsWithLayout extends AppProps {
  Component: NextPageWithLayout;
}

const HyvvApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout || ((page) => page);
  const MainLayout = Component as any;
  return (
    <SessionProvider>
    <UserProvider>
      <ApolloProvider client={apolloClient}>
        <ChakraProvider theme={theme}>
          <GlobalUserContextProvider>
            {getLayout(<MainLayout {...pageProps} />)}
          </GlobalUserContextProvider>
        </ChakraProvider>
      </ApolloProvider>
    </UserProvider>
    </SessionProvider>
  );
};

export default trpc.withTRPC(HyvvApp);
