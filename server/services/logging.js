const winston = require("winston");
require("winston-mongodb");
require("express-async-errors");
require("dotenv").config();

module.exports = function() {
  winston.exceptions.handle(
    new winston.transports.Console({ colorize: true, prettyPrint: true }),
    new winston.transports.File({ filename: "uncaughtExceptions.log" })
  );

  process.on("unhandledRejection", ex => {
    throw ex;
  });

  winston.add(
    new winston.transports.MongoDB({
      db: process.env.DB_URL,
      options: {
        poolSize: 2,
        useNewUrlParser: true,
        useUnifiedTopology: true
      }
    })
  );
};
