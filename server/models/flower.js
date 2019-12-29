const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const flowerSchema = new Schema({
  name: String,
  wateringFrequencyInDays: Number,
  lastWatering: Date,
  zoneID: String,
  wateringUserID: String,
  avatarURL: String
});

module.exports = mongoose.model("Flower", flowerSchema);
