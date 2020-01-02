const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLList } = graphql;
const Zone = require("../../models/zone");

const UserType = new GraphQLObjectType({
  name: "UserType",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    avatarURL: { type: GraphQLString },
    zones: {
      type: new GraphQLList(ZoneType),
      resolve(parentValue) {
        return Zone.find({ zoneIDs: parentValue.id });
      }
    }
  })
});

module.exports = UserType;

// This is here to prevent circular dependencies problem
const ZoneType = require("./zone_type");
