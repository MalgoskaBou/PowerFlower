import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import CustomLink from "./styled/CustomLink";
import Button from "./styled/Button";
import Input from "./styled/Input";
import Wrapper from "./styled/Wrapper";
import Flower from "./FLowerAnimation";

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

  const handleChange = e => {
    const value = e.target.value;
    setInputValue({
      ...inputValue,
      [e.target.name]: value
    });
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
    const calcEyeMOve =
      ((textSize.current.clientWidth /
        (emailInputSize.current.clientWidth - padding)) *
        2 -
        1) *
      maxMove;
    setEyeMove(calcEyeMOve < maxMove ? calcEyeMOve : maxMove);
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

      <Button type="submit" value="Log in">
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
