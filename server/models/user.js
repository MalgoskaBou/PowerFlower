const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  email: String,
  password: String,
  zoneID: [Schema.Types.ObjectId],
  avatarURL: String
});

module.exports = mongoose.model("User", userSchema);
