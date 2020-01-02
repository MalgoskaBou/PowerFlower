const graphql = require("graphql");
const { GraphQLObjectType } = graphql;
const flowers = require("./queries/flowers_query");
const zones = require("./queries/zones_query");

const RootQueryType = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    flowers,
    zones
  }
});

module.exports = RootQueryType;
