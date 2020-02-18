const request = require("supertest");

let server;

beforeEach(() => {
  server = require("../../index");
});
afterEach(async () => {
  await server.close();
});
afterAll(async () => {
  await new Promise(resolve => setTimeout(() => resolve(), 500));
  // avoid jest open handle error
});

describe("GraphQL queries", () => {
  it("User is not logged in", async () => {
    const res = await request(server)
      .post("/graphql")
      .send({ query: "{ currentUser { id } }" });
    expect(res.status).toBe(200);
    expect(res.text).toMatch(/errors/);
    expect(res.text).toMatch(/logged in/);
  });

  it("Login nonexisting user", async () => {
    const res = await request(server)
      .post("/graphql")
      .set("Content-Type", "application/json")
      .set("Accept", "application/json")
      .send({
                query: `mutation {
          loginUser(email:"email5@email.com", password: "dupa"){
            email
            name
          }
        }`
      });
    expect(res.status).toBe(200);
    expect(res.text).toMatch(/errors/);
    expect(res.text).toMatch(/Invalid credentials/);
  });
});
