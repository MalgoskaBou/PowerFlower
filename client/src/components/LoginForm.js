import React, { useState } from "react";
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

const onFocus = setFocus => {
  setFocus(true);
};

const onBlur = setFocus => {
  setFocus(false);
};

const LoginForm = () => {
  const [focus, setFocus] = useState(false);
  const [inputValue, setInputValue] = React.useState({
    email: "",
    password: ""
  });

  const handleChange = e => {
    const value = e.target.value;
    setInputValue({
      ...inputValue,
      [e.target.name]: value
    });
  };

  return (
    <WrapperLogin>
      <Flower focused={focus} />

      <Input
        type="email"
        name="email"
        placeholder="e-mail"
        onFocus={() => onFocus(setFocus)}
        onBlur={() => onBlur(setFocus)}
        value={inputValue.email}
        onChange={handleChange}
      />
      <Input
        type="password"
        name="password"
        placeholder="Password"
        value={inputValue.password}
        onChange={handleChange}
      />

      <Button type="submit" value="Log in">
        Log in
      </Button>
      <CustomLink>Forgot password</CustomLink>
    </WrapperLogin>
  );
};

export default LoginForm;
