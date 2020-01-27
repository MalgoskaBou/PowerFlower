const mongoose = require("mongoose");
const { User } = require("../../models/user");
require("dotenv").config();

const userData = { email: "email1@email.com", password: "dupa", name: "Kitek" };

describe("insert", () => {
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

  it("create & save user successfully", async () => {
    const validUser = new User(userData);
    const savedUser = await validUser.save();
    expect(savedUser._id).toBeDefined();
    expect(savedUser.name).toBe(userData.name);
  });
});
