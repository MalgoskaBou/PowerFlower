const mongoose = require("mongoose");
const Joi = require("@hapi/joi");
Joi.objectId = require("joi-objectid")(Joi);
const Schema = mongoose.Schema;

const flowerSchema = new Schema({
  name: String,
  wateringFrequencyInDays: Number,
  lastWatering: Date,
  zoneID: Schema.Types.ObjectId,
  wateringUserID: Schema.Types.ObjectId,
  avatarURL: String
});

const Flower = mongoose.model("Flower", flowerSchema);

function validateFlower(flower) {
  const schema = Joi.object({
    name: Joi.string()
      .min(3)
      .max(50)
      .required(),
    wateringFrequencyInDays: Joi.number().min(1).required(),
    lastWatering: Joi.date(),
    zoneID: Joi.objectId().required(),
    wateringUserID: Joi.objectId(),
    avatarURL: Joi.string().uri().required()
  });

  return schema.validate(flower);
}


exports.Flower = Flower;
exports.validate = validateFlower;