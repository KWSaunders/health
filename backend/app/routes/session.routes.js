const { authJwt } = require("../middleware");
const controller = require("../controllers/session.controller");

module.exports = function (app) {
    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    // Add Set (POST)
    app.post("/api/session/add", [authJwt.verifyToken], controller.addSet);

    // Get Sets (GET) -- for the given workoutDayId
    app.get("/api/session/sets", [authJwt.verifyToken], controller.getSets);

    app.put("/api/session/add", [authJwt.verifyToken], controller.complete);

    // Complete session

    app.get("/api/session/complete", [authJwt.verifyToken], controller.complete);

    // Get workoutDayId
    app.get("/api/session/workoutId", [authJwt.verifyToken], controller.getWorkoutId);

};
