const mongoose = require("mongoose");
const Joi = require("@hapi/joi");
Joi.objectId = require("joi-objectid")(Joi);
const Schema = mongoose.Schema;

const zoneSchema = new Schema({
  name: String,
  userIDs: [Schema.Types.ObjectId],
  avatarURL: String
});

const Zone = mongoose.model("Zone", zoneSchema);

function validateZone(zone) {
  const schema = Joi.object({
    name: Joi.string()
      .min(5)
      .max(50)
      .required(),
    userID: Joi.objectId().required(),
    avatarURL: Joi.string()
      .uri()
      .required()
  });

  return schema.validate(zone);
}

exports.Zone = Zone;
exports.validate = validateZone;
