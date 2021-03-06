const passport = require("passport");
const { User } = require("../models/user");
const confirmLinkEmailTemplate = require("./confirmLinkEmailTemplate");

function signup({ email, password, name }) {
  const user = new User({ email, password, name });

  return User.findOne({ email }).then(existingUser => {
    if (existingUser) {
      throw new Error("Email in use");
    }
    return user.save();
  });
}

function createConfirmationMail(user, req) {
  const url = `${req.headers.host}/confirm/${user._id}`;
  return confirmLinkEmailTemplate(url);
}

function login({ email, password, req }) {
  return new Promise((resolve, reject) => {
    passport.authenticate("local", (err, user) => {
      if (!user) {
        reject("Invalid credentials.");
      }

      req.logIn(user, () => resolve(user));
    })({ body: { email, password } });
  });
}

function authorization(req) {
  if (!req.user) {
    throw new Error("You must be logged in!");
  }
}

function accountConfirm(req) {
  if (!req.user.confirmed) {
    throw new Error("You must confirm your account to use application!");
  }
}

module.exports = {
  signup,
  login,
  authorization,
  createConfirmationMail,
  accountConfirm
};
