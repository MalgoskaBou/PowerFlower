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

const exec = async query => {
  return await request(server)
    .post("/graphql")
    .set("Content-Type", "application/json")
    .set("Accept", "application/json")
    .send({
      query
    });
};

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
    const query = `mutation {
          loginUser(email:"email5@email.com", password: "dupa"){
            email
            name
          }
        }`;

    const res = await exec(query);

    expect(res.status).toBe(200);
    expect(res.text).toMatch(/errors/);
    expect(res.text).toMatch(/Invalid credentials/);
  });

  it("Signup user correctly", async () => {
    const query = `mutation {
          signupUser(email:"email5@email.com", password: "dupa", name: "kitek"){
            email
            name
            id
          }
        }`;

    const res = await exec(query);

    expect(res).toHaveProperty("body.data.signupUser");
    expect(res.body.data.signupUser.email).toMatch("email5@email.com");
  });

  it("Login user correctly", async () => {
    const querySignUp = `mutation {
          signupUser(email:"email5@email.com", password: "dupa", name: "kitek"){
            email
            name
            id
          }
        }`;

    const queryLogIn = `mutation {
          loginUser(email:"email5@email.com", password: "dupa"){
            email
            name
          }
        }`;

    await exec(querySignUp);
    const res = await exec(queryLogIn);

    expect(res).toHaveProperty("body.data.loginUser");
    expect(res.body.data.loginUser.email).toMatch("email5@email.com");
  });
});
