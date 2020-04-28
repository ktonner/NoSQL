const router = require("express").Router();
const db = require("../models/workout");

module.exports = function(app) {

    //Find all workouts
    app.get("/find/", (req, res) => {
        db.workouts.find(), (err, data) => {
          if (err) {
            console.log(err);
          } else {
            res.json(data);
          }
        }});

        //Create a workout
    app.post("/api/workouts", ({ body }, res) => {
        const workout = new Workout(body)
            Workout.create(workout)
            .then(dbWorkout => {
              res.json(dbWorkout);
            })
            .catch(err => {
              res.json(err);
            });
        });

      //Update a workout
      app.put("/api/workouts/:id", (req, res) => {
        db.workouts.update({_id: req.params.id}, (err, data) => {
          if (err) {
            console.log(err);
          } else {
            res.json(data);
          }
        });
      });

}