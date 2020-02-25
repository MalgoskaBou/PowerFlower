const { User } = require("../../models/user");
const Auth = require("../../services/auth");

const userData = {
  email: "email1@email.com",
  password: "haslo",
  name: "Kitek"
};

describe.skip("User signup", () => {
  let server;

  beforeEach(() => {
    server = require("../../index");
  });
  afterEach(async done => {
    await User.deleteMany({});
    await server.close(done());
  });
  afterAll(async () => {
    await new Promise(resolve => setTimeout(() => resolve(), 500)); // avoid jest open handle error
  });

  it("Create & save user successfully", async () => {
    await Auth.signup(userData).then(user => {
      expect(user._id).toBeDefined();
      expect(user.confirmed).toBeFalsy();
      expect(user.email).toBe(userData.email);
      expect(user.name).toBe(userData.name);
      expect(user.password).not.toBe(userData.password);
    });
  });

  it("Try to register user with existing email in db", async () => {
    await Auth.signup(userData);
    return expect(Auth.signup(userData)).rejects.toThrowError("Email in use");
  });

  it("Try to register user without password", () => {
    return expect(
      Auth.signup({
        email: "other@mail.com",
        name: userData.name
      })
    ).rejects.toThrowError(
      "User validation failed: password: Path `password` is required."
    );
  });
});
