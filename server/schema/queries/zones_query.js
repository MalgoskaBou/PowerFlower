const graphql = require("graphql");
const { GraphQLList } = graphql;
const ZoneType = require("../types/zone_type");
const Zone = require("../../models/zone");

const zones = {
  type: new GraphQLList(ZoneType),
  resolve() {
    return Zone.find({});
  }
};

module.exports = zones;
