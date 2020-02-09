const request = require("supertest");

let server, agent;
const graphQLURL = "http://localhost:4000/graphql";

describe("GraphQL queries", () => {
  beforeEach(() => {
    server = require("../../index");
  });
  afterEach(async () => {
    await server.close();
  });
  afterAll(async () => {
    await new Promise(resolve => setTimeout(() => resolve(), 500)); // avoid jest open handle error
  });

  it("User is not logged in", async () => {
    const res = await request(server)
      .post(graphQLURL)
      .send({ query: "{ currentUser { id } }" });

    expect(res.status).toBe(403);
  });

  it("User is not logged in", async () => {
    const res = await request(server)
      .post(graphQLURL)
      .send({ query: "{ currentUser { id } }" });

    expect(res.status).toBe(403);
  });
});
