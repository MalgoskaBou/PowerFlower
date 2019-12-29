const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLID } = graphql;

const FlowerType = new GraphQLObjectType({
  name: "FlowerType",
  fields: {
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    wateringFrequencyInDays: { type: GraphQLInt },
    lastWatering: { type: GraphQLString },
    avatarURL: { type: GraphQLString },
    zoneID: { type: GraphQLID },
    wateringUserID: { type: GraphQLID }
  }
});

module.exports = FlowerType;
