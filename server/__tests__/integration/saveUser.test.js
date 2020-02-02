const mongoose = require("mongoose");
const Auth = require("../../services/auth");
require("dotenv").config();

const userData = {
  email: "email1@email.com",
  password: "haslo",
  name: "Kitek"
};

describe("User signup", () => {
  let connection;

  beforeAll(async () => {
    connection = await mongoose.connect(process.env.DB_TEST_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useFindAndModify: false
    });
    await connection.connection.db.dropDatabase();
  });

  afterAll(async () => {
    await connection.close();
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

  it("Try to register user with existing email in db", () => {
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
