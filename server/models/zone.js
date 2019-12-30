const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const zoneSchema = new Schema({
  name: String,
  avatarURL: String
});

module.exports = mongoose.model("Zone", zoneSchema);
