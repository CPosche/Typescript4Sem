import express = require("express");
import morgan = require("morgan");
import fs from "fs";
import { People, PersonObject } from "./utils/types";
import logger from "./utils/logger";

const app = express();

app.use(express.json());
app.use(express.static(`${__dirname}/public`));

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
  console.log("Morgan enabled... for development mode");
}

// middelware
app.use((req, res, next) => {
  logger.info(
    `Request received: ${req.method} ${req.url} at ${new Date()} with code ${
      res.statusCode
    }`
  );
  next();
});

app.get("/", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "Hello World!",
  });
});

app.get("/people", (req, res) => {
  const people = fs.readFileSync("./src/people.json", "utf-8");
  res.status(200).json({ status: "success", data: JSON.parse(people) });
});

app.get("/people/:id", (req, res) => {
  const people: string = fs.readFileSync("./src/people.json", "utf-8");
  const person: People | undefined = JSON.parse(people)["person"].find(
    (person: People) => person.id === parseInt(req.params.id)
  );
  if (person) {
    res.status(200).json({ status: "success", data: person });
  } else {
    res.status(404).json({ status: "fail", message: "Person not found" });
  }
});

app.post("/people", (req, res) => {
  const people: PersonObject = JSON.parse(
    fs.readFileSync("./src/people.json", "utf-8")
  );
  let newPerson: People = {
    id: people.person[people.person.length - 1].id + 1,
    name: req.body.name,
    age: req.body.age,
    city: req.body.city,
  };
  people.person.push(newPerson);
  fs.writeFileSync("./src/people.json", JSON.stringify(people));
  res.status(201).json({ status: "success", data: newPerson });
});

app.put("/people/:id", (req, res) => {
  const people: PersonObject = JSON.parse(
    fs.readFileSync("./src/people.json", "utf-8")
  );
  const person: People | undefined = people.person.find(
    (person: People) => person.id === parseInt(req.params.id)
  );
  if (person) {
    person.name = req.body.name;
    person.age = req.body.age;
    person.city = req.body.city;
    fs.writeFileSync("./src/people.json", JSON.stringify(people));
    res.status(200).json({ status: "success", data: person });
  } else {
    res.status(404).json({ status: "fail", message: "Person not found" });
  }
});

app.patch("/people/:id", (req, res) => {
  const people: PersonObject = JSON.parse(
    fs.readFileSync("./src/people.json", "utf-8")
  );
  const person: People | undefined = people.person.find(
    (person: People) => person.id === parseInt(req.params.id)
  );
  if (person) {
    req.body.name && (person.name = req.body.name);
    req.body.age && (person.age = req.body.age);
    req.body.city && (person.city = req.body.city);
    fs.writeFileSync("./src/people.json", JSON.stringify(people));
    res.status(200).json({ status: "success", data: person });
  } else {
    res.status(404).json({ status: "fail", message: "Person not found" });
  }
});

app.delete("/people/:id", (req, res) => {
  const people: PersonObject = JSON.parse(
    fs.readFileSync("./src/people.json", "utf-8")
  );
  const person: People | undefined = people.person.find(
    (person: People) => person.id === parseInt(req.params.id)
  );
  if (person) {
    const index = people.person.indexOf(person);
    people.person.splice(index, 1);
    fs.writeFileSync("./src/people.json", JSON.stringify(people));
    res.status(200).json({ status: "success", data: person });
  } else {
    res.status(404).json({ status: "fail", message: "Person not found" });
  }
});

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000/");
});
