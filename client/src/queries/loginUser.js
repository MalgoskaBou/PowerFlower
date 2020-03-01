import { gql } from "apollo-boost";

export default gql`
  mutation LoginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      email
      name
    }
  }
`;
