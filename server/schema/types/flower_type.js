const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLID } = graphql;
const { User } = require("../../models/user");
const { Zone } = require("../../models/zone");

const FlowerType = new GraphQLObjectType({
  name: "FlowerType",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    wateringFrequencyInDays: { type: GraphQLInt },
    lastWatering: { type: GraphQLString },
    avatarURL: { type: GraphQLString },
    zone: {
      type: ZoneType,
      resolve(parentValue) {
        return Zone.findById(parentValue.zoneID);
      }
    },
    wateringUser: {
      type: UserType,
      resolve(parentValue) {
        return User.findById(parentValue.wateringUserID);
      }
    }
  })
});

module.exports = FlowerType;

// This is here to prevent circular dependencies problem
const ZoneType = require("../types/zone_type");
const UserType = require("../types/user_type");
