import { ApolloServer } from "apollo-server-micro";
import { PageConfig } from "next";
import { createContext } from "../../graphql/context";
import { schema } from "../../graphql/schema";

const apolloServer = new ApolloServer({
  context: createContext,
  schema,
});

const startServer = apolloServer.start();

/* eslint-disable*/
export default async (req, res) => {
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader("Content-Type", "application/json");
  if (req.method === "OPTIONS") {
    res.end();
    return false;
  }
  await startServer;

  await apolloServer.createHandler({
    path: "/api/graphql",
  })(req, res);
};

// // Apollo Server Micro takes care of body parsing
export const config: PageConfig = {
  api: {
    // bodyParser: false,
  },
};
