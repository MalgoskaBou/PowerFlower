const userData = {
  userEmail: "email5@email.com",
  userPassword: "haslo",
  userName: "Kitek"
};

const { userEmail, userPassword, userName } = userData;

const querySignUp = (
  email = userEmail,
  password = userPassword,
  name = userName
) => `mutation {
          signupUser(email:"${email}", password: "${password}", name: "${name}"){
            email
            name
            id
          }
        }`;

const queryLogIn = (password = userPassword, email = userEmail) => `mutation {
          loginUser(email:"${email}", password: "${password}"){
            email
            name
            id
          }
        }`;

module.exports = { querySignUp, queryLogIn, userData };
