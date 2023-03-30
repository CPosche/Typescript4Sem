import * as dotenv from "dotenv";
dotenv.config();
import express = require("express");
import morgan = require("morgan");
import CarRouter from "./routes/CarRoute";
import MechanicRouter from "./routes/MechanicRoute";
import PersonRouter from "./routes/PersonRoute";
import ReviewRouter from "./routes/ReviewRoute";
import logger from "./utils/logger";

const app = express();
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
  console.log("Development mode...");
}

app.use(express.json());

app.use((req, res, next) => {
  logger.info(
    `Request received: ${req.method} ${req.url} at ${new Date()} with code ${
      res.statusCode
    }`
  );
  next();
});

app.use("/api/v1/cars", CarRouter);
app.use("/api/v1/mechanics", MechanicRouter);
app.use("/api/v1/persons", PersonRouter);
app.use("/api/v1/reviews", ReviewRouter);

export default app;
