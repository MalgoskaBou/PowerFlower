const graphql = require("graphql");
const { GraphQLObjectType, GraphQLList } = graphql;
const FlowerType = require("./flower_type");
const Flower = require("../../models/flower");

const RootQueryType = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    flowers: {
      type: new GraphQLList(FlowerType),
      resolve() {
        return Flower.find({});
      }
    }
  }
});

module.exports = RootQueryType;
