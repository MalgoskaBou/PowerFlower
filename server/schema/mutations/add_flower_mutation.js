const graphql = require("graphql");
const { GraphQLString, GraphQLInt, GraphQLID } = graphql;
const FlowerType = require("../types/flower_type");
const {Flower, validate} = require("../../models/flower");
const { authorization } = require("../../services/auth");

const addFlower = {
  type: FlowerType,
  args: {
    name: { type: GraphQLString },
    wateringFrequencyInDays: { type: GraphQLInt },
    lastWatering: { type: GraphQLString },
    avatarURL: { type: GraphQLString },
    zoneID: { type: GraphQLID },
    wateringUserID: { type: GraphQLID }
  },
  resolve(parentValue, args, req) {
    authorization(req);
    const {
      name,
      wateringFrequencyInDays,
      lastWatering,
      avatarURL,
      zoneID,
      wateringUserID
    } = args;

    const { error } = validate(args);
    if (error) throw new Error(error.details[0].message);
    
    let flower = new Flower({
      name,
      wateringFrequencyInDays,
      lastWatering,
      avatarURL,
      zoneID,
      wateringUserID
    });
    return flower.save();
  }
};

module.exports = addFlower;
