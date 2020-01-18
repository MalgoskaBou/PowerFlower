const graphql = require("graphql");
const { GraphQLObjectType } = graphql;
const addZone = require("./mutations/add_zone_mutation");
const removeZone = require("./mutations/remove_zone_mutation");
const updateZone = require("./mutations/update_zone_mutation");
const addFlower = require("./mutations/add_flower_mutation");
const removeFlower = require("./mutations/remove_flower_mutation");
const user = require("./mutations/auth_mutations");

const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addFlower,
    removeFlower,
    updateZone,
    addZone,
    removeZone,
    loginUser: user.login,
    logoutUser: user.logout,
    signupUser: user.signup
  }
});

module.exports = mutation;
