import React from "react";
import styled from "styled-components";
import logo from "../img/loginFlower.svg";

const Wrapper = styled.section`
  height: 100vh;
  width: 100 wh;
  background: linear-gradient(125.61deg, #3f5169 0.46%, #202e45 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Button = styled.button`
  background-color: #e8988c;
  padding: 1rem 0px;
  border: none;
  border-radius: 3rem;
  color: white;
  font-size: 1.8rem;
  letter-spacing: 0.5em;
  width: 50%;
  max-width: 300px;
  text-transform: uppercase;
  font-weight: lighter;
`;

const Input = styled.input`
  background-color: transparent;
  border: none;
  height: 3rem;
  width: 50%;
  margin: 3rem 0;
  border-bottom: 0.5px solid white;
  max-width: 300px;
  font-size: 2.4rem;
  color: white;
  font-weight: lighter;
  padding-left: 50px;

  &::placeholder {
    color: white;
  }
`;

const CustomLink = styled.a`
  color: #ffffff70;
  font-size: 1.3rem;
  margin: 1rem;
  font-weight: lighter;
`;

const LoginForm = () => {
  return (
    <Wrapper>
      <img src={logo} />
      <Input type="email" name="email" placeholder="e-mail" />
      <Input type="password" name="password" placeholder="Password" />
      <Button type="submit" value="Wyślij">
        Log in
      </Button>
      <CustomLink>Forgot password</CustomLink>
    </Wrapper>
  );
};

export default LoginForm;
