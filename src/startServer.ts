import "reflect-metadata";
import express, { Express } from "express";
import { createTypeormConn } from "./utils/createTypeormConn";
import { ProductResolver } from "./resolvers/ProductResolver";
import { ApolloServer } from "apollo-server-express";
import { PingResolver } from "./resolvers/Ping";
import { buildSchema } from "type-graphql";
import config from "./config";

export const startServer = async () => {
  const app: Express = express();

  app.set("port", parseInt(config.PORT));

  const server = new ApolloServer({
    schema: await buildSchema({
      resolvers: [PingResolver, ProductResolver],
    }),
  });

  server.applyMiddleware({ app, path: "/api" });

  await createTypeormConn().then(() => {
    console.log("Database is connected!");
  });

  app.listen(app.get("port"), () => {
    console.log(`Server on port ${app.get("port")}`);
  });
  return app;
};
