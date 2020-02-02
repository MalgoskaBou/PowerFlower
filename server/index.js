const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const expressGraphQL = require("express-graphql");
const passport = require("passport");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const schema = require("./schema/schema");
const confirmEmail = require("./routes/confirmEmail");
const googleAuth = require("./routes/googleAuth");
const errors = require("./middleware/errors");
require("dotenv").config();

require("./services/logging")();

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.DB_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true
  })
  .then(() => console.log(`Connected to db...`));

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

app.use(
  "/graphql",
  expressGraphQL({
    schema,
    graphiql: true
  })
);

app.use("/confirm", confirmEmail);
app.use("/auth/google", googleAuth);

app.use(errors);

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
