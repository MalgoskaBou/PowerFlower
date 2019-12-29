const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const expressGraphQL = require("express-graphql");
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
  "/graphql",
  expressGraphQL({
    schema,
    graphiql: true
  })
);

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
