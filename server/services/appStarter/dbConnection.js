require("dotenv").config();
const mongoose = require("mongoose");
const winston = require("winston");

module.exports = function(app) {
  const connectionString =
    app.get("env") === "test" ? process.env.DB_TEST_URL : process.env.DB_URL;

  mongoose
    .connect(connectionString, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useFindAndModify: false,
      useCreateIndex: true
    })
    .then(() => winston.info(`Connected to ${connectionString}`));
};
