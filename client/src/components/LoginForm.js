import React from "react";
import styled from "styled-components";
import logo from "../img/loginFlower.svg";
import iconMail from "../img/icon_mail.svg";
import iconPassword from "../img/icon_password.svg";

const Wrapper = styled.section`
  height: 100vh;
  width: 100 wh;
  background: linear-gradient(125.61deg, #3f5169 0.46%, #202e45 100%);
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

const Button = styled.button`
  background-color: #e8988c;
  padding: 0.7rem 0px;
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
  margin: 2rem 0;
  border-bottom: 0.5px solid #ffffff70;
  max-width: 300px;
  font-size: 2.4rem;
  color: white;
  font-weight: lighter;
  padding: 0 0 8px 50px;
  background: url(${props =>
      props.type === "email" ? iconMail : iconPassword})
    no-repeat;
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
      <img src={logo} style={{ maxWidth: "150px" }} />

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
