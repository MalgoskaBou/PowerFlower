import { gql } from "apollo-boost";

export default gql`
  {
    currentUser {
      name
      zones {
        id
        name
      }
    }
  }
`;
