import React from "react";
import currentUserQuery from "../queries/currentUser";
import { useQuery } from "@apollo/react-hooks";

const Dashboard = () => {
  const { loading, error, data } = useQuery(currentUserQuery);
  console.log("test", data);

  return (
    <div>
      Dashboard - Your zones:
      {data?.currentUser?.zones?.map(({ name, id }) => (
        <p key={id}>{name}</p>
      ))}
    </div>
  );
};

export default Dashboard;
