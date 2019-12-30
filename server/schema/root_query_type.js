const graphql = require("graphql");
const { GraphQLObjectType, GraphQLList } = graphql;
const FlowerType = require("./types/flower_type");
const Flower = require("../models/flower");
const ZoneType = require("./types/zone_type");
const Zone = require("../models/zone");

const flowers = {
  type: new GraphQLList(FlowerType),
  resolve() {
    return Flower.find({});
  }
};

const zones = {
  type: new GraphQLList(ZoneType),
  resolve() {
    return Zone.find({});
  }
};

const RootQueryType = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    flowers,
    zones
  }
});

module.exports = RootQueryType;
