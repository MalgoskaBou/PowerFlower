import { gql } from "apollo-boost";

export default gql`
  {
    currentUser {
      name
      confirmed
      zones {
        id
        name
      }
    }
  }
`;
