const express = require("express");
const mongojs = require("mongojs");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

const databaseUrl = "exercise";
const collections = ["workouts"];

const db = mongojs(databaseUrl, collections);

// Listen on port 3000
app.listen(3000, () => {
    console.log("App running on port 3000!");
  });
  