import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { useMutation } from "@apollo/react-hooks";
import loginUserMutation from "../queries/loginUser";
import CustomLink from "./styled/CustomLink";
import Button from "./styled/Button";
import Input from "./styled/Input";
import Wrapper from "./styled/Wrapper";
import Flower from "./FLowerAnimation";
import currentUserQuery from "../queries/currentUser";

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

  const handleChange = e => {
    const value = e.target.value;
    setInputValue({
      ...inputValue,
      [e.target.name]: value
    });
  };

  const handleClick = async e => {
    e.preventDefault();
    let user;
    try {
      user = await loginUser({
        variables: {
          email: inputValue.email,
          password: inputValue.password
        },
        refetchQueries: [{ query: currentUserQuery }]
      });
      console.log(user);
    } catch (err) {
      console.log(err);
    }
  };

  const onFocus = e => {
    setFocus({
      ...focus,
      [e.target.name]: true
    });
  };

  const onBlur = e => {
    setFocus({
      ...focus,
      [e.target.name]: false
    });
  };

  const padding = 50;
  const maxMove = 10;

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
        onFocus={onFocus}
        onBlur={onBlur}
        value={inputValue.email}
        onChange={handleChange}
        ref={emailInputSize}
        autocomplete="off"
      />
      <Input
        type="password"
        name="password"
        onFocus={onFocus}
        onBlur={onBlur}
        placeholder="Password"
        value={inputValue.password}
        onChange={handleChange}
        autocomplete="off"
      />

      <Button type="submit" value="Log in" onClick={handleClick}>
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
