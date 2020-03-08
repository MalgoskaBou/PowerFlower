import React, { useContext } from "react";
import { useMutation } from "@apollo/react-hooks";
import UserProvider from "./context/UserProvider";
import logoutUserMutation from "../queries/logoutUser";

const Dashboard = () => {
  const userData = useContext(UserProvider.context);
  const [logoutUser] = useMutation(logoutUserMutation);

  const handleLogoutUser = async e => {
    try {
      await logoutUser();
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      Dashboard - Your zones:
      {userData.user.zones?.map(({ name, id }) => (
        <p key={id}>{name}</p>
      ))}
      <p>{`${userData.user.confirmed}`}</p>
      <p>{`${userData.user.name}`}</p>
      <button onClick={handleLogoutUser}>Log out</button>
    </div>
  );
};

export default Dashboard;
