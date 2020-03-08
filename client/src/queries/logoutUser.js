import { gql } from "apollo-boost";

export default gql`
  mutation LogoutUser {
    logoutUser {
      name
    }
  }
`;
