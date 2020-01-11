const UserType = require("../types/user_type");
const { User } = require("../../models/user");
const { authorization } = require("../../services/auth");

const currentUser = {
  type: UserType,
  resolve(parentValue, args, req) {
    authorization(req);
    return User.findById(req.user.id);
  }
};

module.exports = currentUser;
