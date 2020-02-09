const graphql = require("graphql");
const { GraphQLString } = graphql;
const UserType = require("../types/user_type");
const Auth = require("../../services/auth");
const { validate } = require("../../models/user");
const sendEmail = require("../../services/sendEmailWithSendgrid");
require("../../services/passport-setup");

const signup = {
  type: UserType,
  args: {
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    password: { type: GraphQLString }
  },
  resolve(parentValue, { email, password, name }, req) {
    const { error } = validate({ email, password, name });
    if (error) throw new Error(error.details[0].message);

    return Auth.signup({ email, password, name }).then(user => {
      const emailContent = Auth.createConfirmationMail(user, req);
      sendEmail(email, emailContent);
      return Auth.login({ email, password, req });
    });
  }
};

const logout = {
  type: UserType,
  resolve(parentValue, args, req) {
    const { user } = req;
    req.logout();
    return user;
  }
};

const login = {
  type: UserType,
  args: {
    email: { type: GraphQLString },
    password: { type: GraphQLString }
  },
  resolve(parentValue, { email, password }, req) {
    return Auth.login({ email, password, req });
  }
};

module.exports = { signup, logout, login };
