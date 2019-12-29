const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const zoneSchema = new Schema({
  name: String,
  flowersID: [Schema.Types.ObjectId],
  usersID: [Schema.Types.ObjectId],
  avatarURL: String
});

module.exports = mongoose.model("Zone", zoneSchema);
