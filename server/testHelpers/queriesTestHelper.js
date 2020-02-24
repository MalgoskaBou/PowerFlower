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

module.exports = { querySignUp, queryLogIn };
