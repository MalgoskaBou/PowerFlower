const mockingoose = require("mockingoose").default;
const { User } = require("../../models/user");
const Auth = require("../../services/auth");

const userData = { email: "email1@email.com", password: "dupa", name: "Kitek" };

describe("User auth ", () => {
  it("sign up user with email which already exist", async () => {
    mockingoose(User).toReturn(userData, "findOne");

    Auth.signup(userData).then(err => expect(err).toEqual("Email in use"));
  });
});
