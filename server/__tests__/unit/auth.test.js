const Auth = require("../../services/auth");

describe("User authorization", () => {
  it("User is not logged in", () => {
    const req = {
      user: null
    };
    expect(() => Auth.authorization(req)).toThrowError(/logged in!/);
  });
});

describe("sendMailWIthConfirmLink", () => {
  it("Create email content with confirmation link properly", () => {
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
