const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const expressGraphQL = require("express-graphql");
const passport = require("passport");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const schema = require("./schema/schema");
require("dotenv").config();

const app = express();
const port = process.env.PORT;

app.use(cors());

mongoose
  .connect(process.env.DB_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  })
  .then(() => console.log(`Connected to db...`));

app.use(
  session({
    resave: true, //don't save session if unmodified
    saveUninitialized: true, // don't create session until something stored
    secret: process.env.SESSION_SECRET,
    store: new MongoStore({
      //url: process.env.DB_URL,
      mongooseConnection: mongoose.connection,
      autoReconnect: true
    })
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(
  "/graphql",
  expressGraphQL({
    schema,
    graphiql: true
  })
);

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
