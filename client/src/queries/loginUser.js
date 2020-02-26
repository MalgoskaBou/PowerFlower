import { gql } from "apollo-boost";

export default gql`
   mutation LoginUser($nemail: String!, $password: String!) {{
    loginUser(email: "email5@email.com", password: "dupa") {
      email
      name
    }
  }
`;
