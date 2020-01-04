const graphql = require("graphql");
const { GraphQLString } = graphql;
const UserType = require("../types/user_type");
const Auth = require("../../services/auth");

const signup = {
  type: UserType,
  args: {
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    password: { type: GraphQLString }
  },
  resolve(parentValue, { email, password, name }, req) {
    return Auth.signup({ email, password, name, req });
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
