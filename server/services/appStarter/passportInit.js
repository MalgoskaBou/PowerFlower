const passport = require("passport");
const session = require("express-session");
const mongoose = require("mongoose");
const MongoStore = require("connect-mongo")(session);

module.exports = function(app) {
  app.use(
    session({
      resave: true, //don't save session if unmodified
      saveUninitialized: true, // don't create session until something stored
      secret: process.env.SESSION_SECRET,
      store: new MongoStore({
        mongooseConnection: mongoose.connection,
        autoReconnect: true
      })
    })
  );

  app.use(passport.initialize());
  app.use(passport.session());
};
