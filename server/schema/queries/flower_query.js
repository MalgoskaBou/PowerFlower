const graphql = require("graphql");
const { GraphQLID, GraphQLNonNull } = graphql;
const FlowerType = require("../types/flower_type");
const {Flower} = require("../../models/flower");

const flower = {
  type: FlowerType,
  args: { id: { type: new GraphQLNonNull(GraphQLID) } },
  resolve(parentValue, args) {
    return Flower.findById(args.id);
  }
};

module.exports = flower;
