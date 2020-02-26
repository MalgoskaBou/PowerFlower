const request = require("supertest");
const {
  queryLogIn,
  querySignUp,
  userData
} = require("../../testHelpers/queriesTestHelper");
const {User} = require("../../models/user")

describe("Authentication user", () => {

  let server;

  beforeEach(() => {
    server = require("../../index");
  });
  afterEach(async () => {
    await User.deleteMany({});
    await server.close();
  });

  const exec = async query => {
    return await request(server)
      .post("/graphql")
      .set("Content-Type", "application/json")
      .set("Accept", "application/json")
      .send({
        query
      });
  };

  describe("GraphQL queries for user", () => {
    it("User is not logged in", async () => {
      const res = await request(server)
        .post("/graphql")
        .send({ query: "{ currentUser { id } }" });
      expect(res.status).toBe(200);
      expect(res.text).toMatch(/errors/);
      expect(res.text).toMatch(/logged in/);
    });

    it("Login nonexisting user", async () => {
      const query = queryLogIn();
      const res = await exec(query);

      expect(res.status).toBe(200);
      expect(res.text).toMatch(/errors/);
      expect(res.text).toMatch(/Invalid credentials/);
    });

    it("Signup user correctly", async () => {
      const query = querySignUp();
      const res = await exec(query);

      expect(res).toHaveProperty("body.data.signupUser");
      expect(res.body.data.signupUser.email).toMatch(userData.userEmail);
    });

    it("Signup user without email", async () => {
      const email = "";
      const query = querySignUp(email);
      const res = await exec(query);

      expect(res.text).toMatch(/errors/);
      expect(res.text).toMatch(/\\\"email\\\" is not allowed to be empty/);
    });

    it("Login user correctly", async () => {
      const queryForSignUp = querySignUp();
      const queryForLogIn = queryLogIn();

      await exec(queryForSignUp);
      const res = await exec(queryForLogIn);

      expect(res).toHaveProperty("body.data.loginUser");
      expect(res.body.data.loginUser.email).toMatch(userData.userEmail);
    });
  });
});
