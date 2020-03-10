import React, { useState, useRef, useEffect } from "react";
import { useMutation } from "@apollo/react-hooks";
import loginUserMutation from "../../queries/loginUser";
import CustomLink from "../../components/general-style/CustomLink";
import Button from "../../components/general-style/Button";
import Input from "../../components/general-style/InputStyle";
import WrapperLogin from "./WrapperLogin";
import Flower from "./FLowerAnimation";
import currentUserQuery from "../../queries/currentUser";
import { handleInputState } from "../../helpers/inputHelpers";

const LoginForm = () => {
  const [focus, setFocus] = useState({
    email: false,
    password: false
  });
  const [inputValue, setInputValue] = useState({
    email: "",
    password: ""
  });
  const [eyePosition, setEyePosition] = useState(null);

  const textSize = useRef(null);
  const emailInputSize = useRef(null);

  const [loginUser] = useMutation(loginUserMutation);

  const padding = 50;
  const maxMove = 10;

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
    const calcEyePosition =
      ((textSize.current.clientWidth /
        (emailInputSize.current.clientWidth - padding)) *
        2 -
        1) *
      maxMove;
    setEyePosition(calcEyePosition < maxMove ? calcEyePosition : maxMove);
  }, [inputValue.email]);

  return (
    <WrapperLogin>
      <Flower focused={focus} eyePosition={eyePosition} />
      <form onSubmit={handleLoginUser} className="login-form">
        <Input
          type="text"
          name="email"
          placeholder="e-mail"
          onFocus={e => handleInputState(e, focus, setFocus, true)}
          onBlur={e => handleInputState(e, focus, setFocus, false)}
          value={inputValue.email}
          onChange={e => handleInputState(e, inputValue, setInputValue)}
          ref={emailInputSize}
          autocomplete="off"
        />
        <Input
          type="password"
          name="password"
          onFocus={e => handleInputState(e, focus, setFocus, true)}
          onBlur={e => handleInputState(e, focus, setFocus, false)}
          placeholder="Password"
          value={inputValue.password}
          onChange={e => handleInputState(e, inputValue, setInputValue)}
          autocomplete="off"
        />

        <Button type="submit" value="Log in">
          Log in
        </Button>
      </form>
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
