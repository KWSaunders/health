module.exports = (sequelize, Sequelize) => {
    const Workout = sequelize.define("workouts", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        userId: {
            type: Sequelize.INTEGER,
        },
        workoutId: {
            type: Sequelize.INTEGER,
        },
        name: {
            type: Sequelize.STRING
        },
    });

    return Workout;
};
