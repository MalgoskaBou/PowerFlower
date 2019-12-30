const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString, GraphQLList, GraphQLID } = graphql;
const Flower = require("../../models/flower");
const User = require("../../models/user");

const ZoneType = new GraphQLObjectType({
  name: "ZoneType",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    flowers: {
      type: new GraphQLList(FlowerType),
      resolve(parentValue) {
        return Flower.find({ zoneID: parentValue.id });
      }
    },
    users: {
      type: new GraphQLList(UserType),
      resolve(parentValue) {
        return User.find({ zoneID: parentValue.id }); //UWAGA TABLICA!
      }
    },
    avatarURL: { type: GraphQLString }
  })
});

module.exports = ZoneType;

// This is here to prevent circular dependencies problem
const FlowerType = require("./flower_type");
const UserType = require("./user_type");
