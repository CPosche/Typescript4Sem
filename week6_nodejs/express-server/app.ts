import express = require("express");
import morgan = require("morgan");
import fs from "fs";

const app = express();

app.use(express.json());
app.use(express.static(`${__dirname}/public`));

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
  console.log("Morgan enabled... for development mode");
}

// middelware
app.use((req, res, next) => {
  console.log("Hello from the middleware");
  next();
});

// part 1
app.get("/", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "Hello World!",
  });
});

// part 2
app.get("/hello/:name", (req, res) => {
  res.status(200).json({
    status: "success",
    message: `Hello ${req.params.name}!`,
  });
});

//part 3
app.get("/hello", (req, res) => {
  res.status(200).json({
    status: "success",
    message: `Hello ${req.query.name}!`,
  });
});

// part 4
app.get("/error", (req, res) => {
  try {
    0 / 0;
    res.status(200).json({
      status: "success",
      message: "Hello World!",
    });
  } catch (err: any) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
});

//part 5
app.get("/data", (req, res) => {
  const data = fs.readFileSync(`./data.json`, "utf-8");
  res
    .status(200)
    .header("Content-Type", "application/json")
    .json({ status: "success", data: JSON.parse(data) });
});

// part 6
app.post("/", (req, res) => {
  const jsonData = req.body;
  res.status(201).json({ status: "success", data: jsonData });
});

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000/");
});
