var express = require("express");

var router = express.Router();
var path = require('path');

//export route
module.exports = function(app) {

    // Each of the below routes just handles the HTML page that the user gets sent to.
  
    // index route loads view.html
    app.get("/", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/index.html"));
    });
  
    // add route loads the add.html page,
    // where users can enter new characters to the db
    app.get("/exercise", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/exercise.html"));
    }); 
  
    // all route loads the all.html page,
    // where all characters in the db are displayed
    app.get("/stats", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/stats.html"));
    });
  
  };
  
