const graphql = require("graphql");
const { GraphQLList } = graphql;
const FlowerType = require("../types/flower_type");
const Flower = require("../../models/flower");

const flowers = {
  type: new GraphQLList(FlowerType),
  resolve() {
    return Flower.find({});
  }
};

module.exports = flowers;
