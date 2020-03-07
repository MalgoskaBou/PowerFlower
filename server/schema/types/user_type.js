const graphql = require("graphql");
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLList,
  GraphQLBoolean
} = graphql;
const { Zone } = require("../../models/zone");

const UserType = new GraphQLObjectType({
  name: "UserType",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    avatarURL: { type: GraphQLString },
    confirmed: { type: GraphQLBoolean },
    zones: {
      type: new GraphQLList(ZoneType),
      resolve(parentValue) {
        return Zone.find({ userIDs: parentValue.id });
      }
    }
  })
});

module.exports = UserType;

// This is here to prevent circular dependencies problem
const ZoneType = require("./zone_type");
