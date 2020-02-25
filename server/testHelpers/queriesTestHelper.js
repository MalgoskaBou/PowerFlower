const userData = {
  userEmail: "email5@email.com",
  userPassword: "haslo",
  userName: "Kitek"
};

const {userEmail, userPassword, userName} = userData

const querySignUp = (email = userEmail, password = userPassword, name = userName) => (`mutation {
          signupUser(email:"${email}", password: "${password}", name: "${name}"){
            email
            name
            id
          }
        }`);

const queryLogIn = (email = userEmail, password = userPassword) => (`mutation {
          loginUser(email:"${email}", password: "${password}"){
            email
            name
          }
        }`);

module.exports = { querySignUp, queryLogIn, userData };
