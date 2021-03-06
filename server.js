const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const Workout = require("./models/workout");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));
// Routes
// =============================================================
app.use(require("./routes/htmlRoutes"))
app.use(require("./routes/apiRoutes"))

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines", { useNewUrlParser: true, useUnifiedTopology: true  });


app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
