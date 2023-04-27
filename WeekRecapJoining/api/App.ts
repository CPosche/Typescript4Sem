import * as dotenv from "dotenv";
dotenv.config();
import express = require("express");
import morgan = require("morgan");

const app = express();
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
  console.log("Development mode...");
}
app.use(express.json());

export default app;
