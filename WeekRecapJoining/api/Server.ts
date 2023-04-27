import app from "./App";
import * as dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
import { ApolloServer } from "apollo-server-express";
const { ServerApiVersion } = require("mongodb");
const credentials = "./X509-cert-4329077070500209452.pem";
import typeDefs from "./graphql/schema";
import Query from "./graphql/resolvers/Query";
import Mutation from "./graphql/resolvers/Mutations";

const serverStart = async (server: ApolloServer) => {
  await server.start();
  server.applyMiddleware({ app });
};

const port = process.env.PORT;
const server = new ApolloServer({ typeDefs, resolvers: { Query, Mutation } });
serverStart(server);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
  console.log(`http://localhost:${port}/graphql`);
});

mongoose
  .connect(
    "mongodb+srv://fullstack.cl8ho2t.mongodb.net/?authSource=%24external&authMechanism=MONGODB-X509&retryWrites=true&w=majority",
    {
      sslKey: credentials,
      sslCert: credentials,
      serverApi: ServerApiVersion.v1,
    }
  )
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB", err.message);
  });
