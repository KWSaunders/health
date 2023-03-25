// we will need a workoutDayId to add a set to a workoutDay

const db = require("../models");
const User = db.user;

// Add a set to current workout
exports.addSet = (req, res) => {
    const weight = req.body.weight;
    const reps = req.body.reps;
    const exercise = req.body.exercise;

    console.log("exercise: " + exercise);
    console.log("weight: " + weight);
    console.log("reps: " + reps);

    // print the name of the user who added the set
    console.log("userId: " + req.userId);
    console.log("username: " + req.username);

    // find user based on userId
    User.findOne({
        where: {
            // username: req.body.username
            id: req.userId
        }
    }).then(user => {
        if (!user) {
            return res.status(404).send({ message: "User Not found." });
        }
        console.log("username: " + user.username);

        // this is the JSON structure prototype
        // let temp2 = [
        //     [{ a: 'bla', b: 12, c: 3 }, { a: 'idk', b: 3, c: 4 }, { a: 'idk', b: 8, c: 4 }], // workout 1
        //     [{ a: 'asdfa', b: 12, c: 3 }, { a: 'fdf', b: 3, c: 4 }, { a: 'gdfg', b: 8, c: 4 }, { a: 'gfg', b: 12, c: 3 }, { a: 'idk', b: 3, c: 4 }, { a: 'fgf', b: 8, c: 4 }], // workout 2
        //     [{ a: 'bla', b: 12, c: 3 }, { a: 'idk', b: 3, c: 4 }, { a: 'idk', b: 8, c: 4 }], // workout 3
        //     [{ a: 'bla', b: 12, c: 3 }, { a: 'idk', b: 3, c: 4 }, { a: 'idk', b: 8, c: 4 }], // workout 4
        // ];


        // workouts is an array of workout and workout is an array of sets
        const workoutId = user.workoutDayId;
        const set = { exercise: exercise, weight: weight, reps: reps, date: new Date() };

        let workouts = user.workouts;
        let workout = workouts[workoutId] || [];
        workout.push(set);

        workouts[workoutId] = workout;
        // workouts.push(workout);

        console.log("temp: " + JSON.stringify(workouts));

        user.workouts = workouts;
        user.save();

        console.log(JSON.stringify(user.workouts));

        res.status(200).send("Set Added Successfully!");
        // }).catch(err => {
        //     res.status(500).send({ message: err.message });
    });
};

// Get all the sets for the given user
exports.getSets = (req, res) => {
    User.findOne({
        where: {
            // username: req.body.username
            id: req.userId
        }
    }).then(user => {
        if (!user) {
            return res.status(404).send({ message: "User Not found." });
        }
        console.log("username: " + user.username);
        const workouts = user.workouts;
        const workoutId = user.workoutDayId;
        const workout = workouts[workoutId];
        res.status(200).send(workout ? workout : []);
    });
};

exports.getWorkoutId = (req, res) => {
    User.findOne({
        where: {
            // username: req.body.username
            id: req.userId
        }
    }).then(user => {
        if (!user) {
            return res.status(404).send({ message: "User Not found." });
        }
        console.log("username: " + user.username);
        const workoutId = user.workoutDayId;
        console.log('workout Id from db: ' + workoutId);
        res.status(200).send("" + workoutId);
    });
}

exports.complete = (req, res) => {
    User.findOne({
        where: {
            // username: req.body.username
            id: req.userId
        }
    }).then(user => {
        if (!user) {
            return res.status(404).send({ message: "User Not found." });
        }
        console.log("username: " + user.username);
        user.workoutDayId = user.workoutDayId + 1;
        user.save();
        res.status(200).send("Workout Session Completed!");
    });
}