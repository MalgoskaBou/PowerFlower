const Auth = require("../../services/auth");

describe("authorization", () => {
  it("there is no user logged", () => {
    const req = {
      user: null
    };
    expect(() => Auth.authorization(req)).toThrowError(
      "You must be logged in!"
    );
  });

  it("user didn't confirm email", () => {
    const req = {
      user: {
        name: "kitek",
        confirmed: false
      }
    };
    expect(() => Auth.authorization(req)).toThrowError(
      "You must confirm your account to use application!"
    );
  });
});
