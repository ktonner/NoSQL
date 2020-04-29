const Workout = require("../models/workout");
const express = require("express")
const app = express();

//Find all workouts
app.get("/api/workouts", (req, res) => {
    Workout.find({}).then(dbWorkout => {
        lastWorkout = dbWorkout[dbWorkout.length-1]
        var e = lastWorkout.exercises
        for(i=0;i<e.length; i++){
            lastWorkout.totalDuration += e[i].duration
            console.log(e[i].duration)
        }
        console.log(lastWorkout.totalDuration)
        res.json(dbWorkout);
    })
    .catch(err => {
        res.json(err);
    });
});

app.get("/api/workouts/range", (req, res) => {
    Workout.find({}).sort({day:-1}).limit(7)
    .then(dbWorkout => {
        res.json(dbWorkout);
        console.log(dbWorkout)
    })
    .catch(err => {
        res.json(err);
    });
});

//Create a workout
app.post("/api/workouts", (req, res) => {
    Workout.create({})
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });
});

//Update a workout
app.put("/api/workouts/:id", (req, res) => {
    console.log(req.params.id)
    Workout.findByIdAndUpdate(req.params.id, { $push: { exercises: req.body } }, { new: true })
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });
});

module.exports = app