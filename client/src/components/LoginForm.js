import React from "react";
import styled from "styled-components";
import CustomLink from "./styled/CustomLink"
import Button from "./styled/Button"
import Input from "./styled/Input"
import Wrapper from "./styled/Wrapper"
import Flower from "./FLowerAnimation"


const WrapperLogin = styled(Wrapper)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  input:first-of-type {
    margin-top: 10rem;
  }
  input:last-of-type {
    margin-bottom: 5rem;
  }
`;

const LoginForm = () => {
  return (
    <WrapperLogin>
      <Flower/>

      <Input type="email" name="email" placeholder="e-mail" />
      <Input type="password" name="password" placeholder="Password" />

      <Button type="submit" value="Log in">
        Log in
      </Button>
      <CustomLink>Forgot password</CustomLink>
    </WrapperLogin>
  );
};

export default LoginForm;
