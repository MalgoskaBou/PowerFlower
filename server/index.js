const express = require("express");
const cors = require("cors");
const winston = require("winston");
const errors = require("./middleware/errors");
require("dotenv").config();

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());

require("./services/appStarter/logging")();
require("./services/appStarter/dbConnection")(app);
require("./services/appStarter/passportInit")(app);
require("./services/appStarter/routes")(app);

app.use(errors);

const server = app.listen(port, () => {
  winston.info(`Listening on port: ${port}`);
});

module.exports = server;
