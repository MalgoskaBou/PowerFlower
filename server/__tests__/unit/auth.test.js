const Auth = require("../../services/auth");

describe("User authorization", () => {
  it("User is not logged in", () => {
    const req = {
      user: null
    };
    expect(() => Auth.authorization(req)).toThrowError(/logged in!/);
  });

  it("User didn't confirm email", () => {
    const req = {
      user: {
        confirmed: false
      }
    };
    expect(() => Auth.authorization(req)).toThrowError(/confirm/);
  });
});

describe("Service auth func", () => {
  it("sendMailWIthConfirmLink", () => {
    const req = {
      headers: {
        host: "http://host.com/"
      }
    };
    const user = {
      _id: "1",
      email: "email@email.com"
    };
    const emailContent = Auth.createConfirmationMail(user, req);
    expect(emailContent).toMatch(/confirm\/1/);
  });
});
