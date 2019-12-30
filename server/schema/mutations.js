const graphql = require("graphql");
const { GraphQLObjectType } = graphql;
const { addZone } = require("./mutations/add_zone_mutation");
const { addFlower } = require("./mutations/add_flower_mutation");

const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addFlower,
    addZone
  }
});

module.exports = mutation;
