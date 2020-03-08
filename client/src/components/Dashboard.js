import React, { useContext } from "react";
import { useMutation } from "@apollo/react-hooks";
import UserProvider from "./context/UserProvider";
import logoutUserMutation from "../queries/logoutUser";
import Wrapper from "./styled/Wrapper";

const Dashboard = () => {
  const userData = useContext(UserProvider.context);
  const [logoutUser] = useMutation(logoutUserMutation);

  const handleLogoutUser = async () => {
    try {
      await logoutUser();
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Wrapper>
      <div>
        Dashboard - Your zones:
        {userData.user.zones?.map(({ name, id }) => (
          <p key={id}>{name}</p>
        ))}
        <p>{`${userData.user.confirmed}`}</p>
        <p>{`${userData.user.name}`}</p>
        <button onClick={handleLogoutUser}>Log out</button>
      </div>
    </Wrapper>
  );
};

export default Dashboard;
