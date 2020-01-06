const graphql = require("graphql");
const { GraphQLObjectType } = graphql;
const flowers = require("./queries/flowers_query");
const flower = require("./queries/flower_query");
const zones = require("./queries/zones_query");
const zone = require("./queries/zone_query");
const currentUser = require("./queries/current_user_query");

const RootQueryType = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    flowers,
    zones,
    flower,
    zone,
    currentUser
  }
});

module.exports = RootQueryType;
