import app from "./App";
import * as dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
const { ApolloServer, gql } = require("apollo-server-express");
dotenv.config();
const { ServerApiVersion } = require("mongodb");
const credentials = "./X509-cert-4329077070500209452.pem";

const port = process.env.PORT;

app.use(cors());

const typeDefs = gql`
  type Query {
    hello: String
  }
`;

const resolvers = {
  Query: {
    hello: () => "Hello world!",
  },
};

const server = new ApolloServer({ typeDefs, resolvers });
server.applyMiddleware({ app });

app.listen(port, () => {
  console.log(
    `Server running on port http://localhost:${port}/${server.graphqlPath}`
  );
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
