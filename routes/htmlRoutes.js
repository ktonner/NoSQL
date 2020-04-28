const router = require("express").Router();
const path = require("path");

//export route

    // Each of the below routes just handles the HTML page that the user gets sent to.
  
    // index route loads view.html
    router.get("/", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/index.html"));
    });
  
    // add route loads the add.html page,
    // where users can enter new characters to the db
    router.get("/exercise", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/exercise.html"));
    }); 
  
    // all route loads the all.html page,
    // where all characters in the db are displayed
    router.get("/stats", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/stats.html"));
    });
  
module.exports = router;
  
