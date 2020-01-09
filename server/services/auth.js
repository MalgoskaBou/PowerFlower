const passport = require("passport");
const User = require("../models/user");

function signup({ email, password, name, req }) {
  const user = new User({ email, password, name });
  if (!email || !password) {
    throw new Error("You must provide an email and password.");
  }

  return User.findOne({ email })
    .then(existingUser => {
      if (existingUser) {
        throw new Error("Email in use");
      }
      return user.save();
    })
    .then(user => {
      return new Promise((resolve, reject) => {
        req.logIn(user, err => {
          if (err) {
            reject(err);
          }
          resolve(user);
        });
      });
    });
}

function login({ email, password, req }) {
  return new Promise((resolve, reject) => {
    passport.authenticate("local", (err, user) => {
      if (!user) {
        reject("Invalid credentials.");
      }

      req.login(user, () => resolve(user));
    })({ body: { email, password } });
  });
}

function authorization(req) {
  if (!req.user) {
    throw new Error("You must be logged in!");
  }
}

module.exports = { signup, login, authorization };
