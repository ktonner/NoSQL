const express = require("express");
const mongojs = require("mongojs");
const mongoose = require("mongoose");
const app = express();
const Workout = require("../models/workout")

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(__dirname + '/public'));
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/exercise", { useNewUrlParser: true });

const databaseUrl = "exercise";
const collections = ["workouts"];

const db = mongojs(databaseUrl, collections);

// Import routes and give the server access to them.
require("../routes/htmlRoutes")(app);
require("../routes/apiRoutes")(app);

// Listen on port 3000
app.listen(3000, () => {
    console.log("App running on port 3000!");
  });
  