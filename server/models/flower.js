const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const flowerSchema = new Schema({
  name: String,
  wateringFrequencyInDays: Number,
  lastWatering: Date,
  zoneID: Schema.Types.ObjectId,
  wateringUserID: Schema.Types.ObjectId,
  avatarURL: String
});

module.exports = mongoose.model("Flower", flowerSchema);
