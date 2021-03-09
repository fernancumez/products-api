import "reflect-metadata";
import express, { Express } from "express";
import { ApolloServer } from "apollo-server-express";
import { PingResolver } from "./resolvers/ping";
import { buildSchema } from "type-graphql";
import { createTypeormConn } from "./utils/createTypeormConn";
import config from "./config";

export const startServer = async () => {
  const app: Express = express();

  app.set("port", parseInt(config.PORT));

  const server = new ApolloServer({
    schema: await buildSchema({
      resolvers: [PingResolver],
    }),
  });

  server.applyMiddleware({ app, path: "/graphql" });

  await createTypeormConn().then(() => {
    console.log("Database is connected!");
  });

  app.listen(app.get("port"), () => {
    console.log(`Server on port ${app.get("port")}`);
  });
  return app;
};
