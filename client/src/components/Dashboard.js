import React from "react";
import currentUserQuery from "../queries/currentUser";
import { useQuery } from "@apollo/react-hooks";

const Dashboard = () => {
  const { loading, error, data } = useQuery(currentUserQuery);
  console.log("test", error);

  return (
    <div>
      Dashboard - only login
      {error?.graphQLErrors.map(({ message }, i) => (
        <p key={i}>{message}</p>
      ))}
    </div>
  );
};

export default Dashboard;
