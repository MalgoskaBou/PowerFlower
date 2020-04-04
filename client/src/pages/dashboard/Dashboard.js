import React, { useContext } from "react";
import { useMutation } from "@apollo/react-hooks";
import styled from "styled-components";
import UserProvider from "../../components/context/UserProvider";
import logoutUserMutation from "../../queries/logoutUser";
import Wrapper from "../../components/general-style/Wrapper";
import IconButton from "../../components/general-style/IconButton";
import FlexWrapper from "../../components/general-style/FlexWrapper";
import Button from "../../components/general-style/Button";
import Zone from "../../components/Zone";
import Zone2 from "../../img/zone2.svg";

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

  const ActionBar = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 2.5rem;
    margin-bottom: 5rem;
  `;

  return (
    <Wrapper>
      <ActionBar>
        <Button fontSize={1.4} smallerLetterSpace>
          Dodaj przestrzeń
        </Button>
        <IconButton icon="icon-user" onClick={handleLogoutUser}>
          Wyloguj - {`${userData?.user?.name}`}
        </IconButton>
      </ActionBar>
      <FlexWrapper>
        {userData?.user?.zones?.map(({ name, id }) => (
          <Zone key={id} name={name} image={Zone2} zoneID={id} />
        ))}
      </FlexWrapper>
    </Wrapper>
  );
};

export default Dashboard;
