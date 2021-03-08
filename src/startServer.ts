import "reflect-metadata";
import express, { Express } from "express";
import { ApolloServer } from "apollo-server-express";
import { PingResolver } from "./resolvers/ping";
import { buildSchema } from "type-graphql";

export const startServer = async () => {
  const app: Express = express();

  const PORT: number = 3000;

  app.set("port", PORT);

  const server = new ApolloServer({
    schema: await buildSchema({
      resolvers: [PingResolver],
    }),
  });

  server.applyMiddleware({ app, path: "/graphql" });

  app.listen(app.get("port"));
  console.log(`Server on port ${app.get("port")}`);
  return app;
};
