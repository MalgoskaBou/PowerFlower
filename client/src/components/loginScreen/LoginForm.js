import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { useMutation } from "@apollo/react-hooks";
import loginUserMutation from "../../queries/loginUser";
import CustomLink from "../styled/CustomLink";
import Button from "../styled/Button";
import Input from "../styled/Input";
import Wrapper from "../styled/Wrapper";
import Flower from "./FLowerAnimation";
import currentUserQuery from "../../queries/currentUser";

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
  const [focus, setFocus] = useState({
    email: false,
    password: false
  });
  const [inputValue, setInputValue] = useState({
    email: "",
    password: ""
  });
  const [eyeMove, setEyeMove] = useState(null);

  const textSize = useRef(null);
  const emailInputSize = useRef(null);

  const [loginUser] = useMutation(loginUserMutation);

  const padding = 50;
  const maxMove = 10;

  const handleInputChange = e => {
    const value = e.target.value;
    setInputValue({
      ...inputValue,
      [e.target.name]: value
    });
  };

  const handleInputFocus = (e, isFocused) => {
    setFocus({
      ...focus,
      [e.target.name]: isFocused
    });
  };

  const handleLoginUser = async e => {
    e.preventDefault();
    try {
      await loginUser({
        variables: {
          email: inputValue.email,
          password: inputValue.password
        },
        refetchQueries: [{ query: currentUserQuery }]
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const calcEyeMove =
      ((textSize.current.clientWidth /
        (emailInputSize.current.clientWidth - padding)) *
        2 -
        1) *
      maxMove;
    setEyeMove(calcEyeMove < maxMove ? calcEyeMove : maxMove);
  }, [inputValue.email]);

  return (
    <WrapperLogin>
      <Flower focused={focus} eyeMove={eyeMove} />

      <Input
        type="text"
        name="email"
        placeholder="e-mail"
        onFocus={e => handleInputFocus(e, true)}
        onBlur={e => handleInputFocus(e, false)}
        value={inputValue.email}
        onChange={handleInputChange}
        ref={emailInputSize}
        autocomplete="off"
      />
      <Input
        type="password"
        name="password"
        onFocus={e => handleInputFocus(e, true)}
        onBlur={e => handleInputFocus(e, false)}
        placeholder="Password"
        value={inputValue.password}
        onChange={handleInputChange}
        autocomplete="off"
      />

      <Button type="submit" value="Log in" onClick={handleLoginUser}>
        Log in
      </Button>
      <CustomLink>Forgot password</CustomLink>
      <span
        ref={textSize}
        style={{ zIndex: -9999, fontSize: "2.4rem", height: 0 }}
      >
        {inputValue.email}
      </span>
    </WrapperLogin>
  );
};

export default LoginForm;
