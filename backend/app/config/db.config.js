module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "password", //password on ubuntu system, idojava4 on local
  DB: "testdb",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
