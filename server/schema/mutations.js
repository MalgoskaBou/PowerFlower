const graphql = require("graphql");
const { GraphQLObjectType } = graphql;
const addZone = require("./mutations/add_zone_mutation");
const addFlower = require("./mutations/add_flower_mutation");
const user = require("./mutations/auth_mutations");

const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addFlower,
    addZone,
    loginUser: user.login,
    logoutUser: user.logout,
    signupUser: user.signup
  }
});

module.exports = mutation;
