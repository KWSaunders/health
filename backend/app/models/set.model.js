module.exports = (sequelize, Sequelize) => {
    const Set = sequelize.define("sets", {
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
        weight: {
            type: Sequelize.INTEGER
        },
        reps: {
            type: Sequelize.INTEGER
        },
    });

    return Set;
};
