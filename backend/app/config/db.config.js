module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "idojava4", //password on ubuntu system
  DB: "testdb",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
