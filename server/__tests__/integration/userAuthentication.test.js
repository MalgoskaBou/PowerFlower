const request = require("supertest");
const {
  queryLogIn,
  querySignUp,
  userData
} = require("../../testHelpers/queriesTestHelper");
const { User } = require("../../models/user");

describe("Authentication user", () => {
  let server;

  beforeEach(() => {
    server = require("../../index");
  });
  afterEach(async () => {
    await User.deleteMany({});
    await server.close();
  });

  const execQuery = async (query, url = "/graphql") => {
    return await request(server)
      .post(url)
      .set("Content-Type", "application/json")
      .set("Accept", "application/json")
      .send({
        query
      });
  };

  describe("GraphQL queries for user", () => {
    it("Signup user correctly", async () => {
      const query = querySignUp();
      const res = await execQuery(query);

      expect(res).toHaveProperty("body.data.signupUser");
      expect(res.body.data.signupUser.email).toMatch(userData.userEmail);
    });

    it("Signup user without email", async () => {
      const email = "";
      const query = querySignUp(email);
      const res = await execQuery(query);

      expect(res.text).toMatch(/errors/);
      expect(res.text).toMatch(/\\\"email\\\" is not allowed to be empty/);
    });

    it("Login user correctly", async () => {
      const queryForSignUp = querySignUp();
      const queryForLogIn = queryLogIn();

      await execQuery(queryForSignUp);
      const res = await execQuery(queryForLogIn);

      expect(res).toHaveProperty("body.data.loginUser");
      expect(res.body.data.loginUser.email).toMatch(userData.userEmail);
    });

    it("User is not logged in and try to check current user", async () => {
      const res = await request(server)
        .post("/graphql")
        .send({ query: "{ currentUser { id } }" });

      expect(res.text).toMatch(/errors/);
      expect(res.text).toMatch(/logged in/);
    });

    it("Login nonexisting user", async () => {
      const query = queryLogIn();
      const res = await execQuery(query);

      expect(res.text).toMatch(/errors/);
      expect(res.text).toMatch(/Invalid credentials/);
    });

    it("Login user without password", async () => {
      const password = "";
      const query = queryLogIn(password);
      const res = await execQuery(query);

      expect(res.text).toMatch(/errors/);
      expect(res.text).toMatch(/Invalid credentials/);
    });

    it("Create correctly confirm email link", async () => {
      const queryForSignUp = querySignUp();
      const queryForLogIn = queryLogIn();

      await execQuery(queryForSignUp);
      const res = await execQuery(queryForLogIn);

      const user = await request(server)
        .get(`/confirm/${res.body.data.loginUser.id}`)
        .set("Content-Type", "application/json")
        .set("Accept", "application/json");

      expect(user.text).toMatch(/true/);
    });
  });
});
