const expressGraphQL = require("express-graphql");
const confirmEmail = require("../../routes/confirmEmail");
const googleAuth = require("../../routes/googleAuth");
const schema = require("../../schema/schema");

module.exports = function(app) {
  app.use(
    "/graphql",
    expressGraphQL({
      schema,
      graphiql: true
    })
  );

  app.use("/confirm", confirmEmail);
  app.use("/auth/google", googleAuth);
};
