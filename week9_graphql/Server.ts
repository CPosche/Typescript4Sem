import app from "./App";
import * as dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import { ApolloServer, gql } from "apollo-server-express";
import PersonRouter from "./routes/PersonRoute";
dotenv.config();
const { ServerApiVersion } = require("mongodb");
const credentials = "./X509-cert-4329077070500209452.pem";

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

const serverStart = async (server: ApolloServer) => {
  await server.start();
  server.applyMiddleware({ app });
};

const port = process.env.PORT;
const server = new ApolloServer({ typeDefs, resolvers });
serverStart(server);

app.listen(port, () => {
  console.log(`Server running on port http://localhost:${port}...`);
});

app.use(cors());
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
