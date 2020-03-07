import React, { useContext } from "react";
import UserProvider from "./context/UserProvider";

const Dashboard = () => {
  const userData = useContext(UserProvider.context);

  return (
    <div>
      Dashboard - Your zones:
      {userData.user.zones?.map(({ name, id }) => (
        <p key={id}>{name}</p>
      ))}
      <p>{`${userData.user.confirmed}`}</p>
      <p>{`${userData.user.name}`}</p>
    </div>
  );
};

export default Dashboard;
