import React, { useContext } from "react";
import { useMutation } from "@apollo/react-hooks";
import UserProvider from "../../components/context/UserProvider";
import logoutUserMutation from "../../queries/logoutUser";
import Wrapper from "../../components/general-style/Wrapper";
import IconButton from "../../components/general-style/IconButton";
import Button from "../../components/general-style/Button";

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
        <Button fontSize={1.4} smallerLetterSpace>
          Dodaj przestrzeń
        </Button>
        <IconButton onClick={handleLogoutUser}>Wyloguj</IconButton>
        {userData.user.zones?.map(({ name, id }) => (
          <p key={id}>{name}</p>
        ))}
        <p>{`${userData.user.confirmed}`}</p>
        <p>{`${userData.user.name}`}</p>
      </div>
    </Wrapper>
  );
};

export default Dashboard;
