import React, { useRef, useEffect } from "react";
import { animateTo, morphTo, PATHS } from "../../helpers/animationHelper";
import { ReactComponent as FlowerLoginSvg } from "../../img/flowerLogin.svg";

const Flower = props => {
  const flower = useRef(null);
  const { email, password } = props.focused;

  useEffect(() => {
    const face = flower.current.getElementById("face");
    const eyeR = flower.current.getElementById("eyeR_12_");
    const eyeL = flower.current.getElementById("eyeL_12_");

    if (email) {
      animateTo(face, props.eyePosition, 10);
      morphTo(eyeR, PATHS.openEyeR);
      morphTo(eyeL, PATHS.openEyeL);
    } else if (password) {
      animateTo(face, 0, -10);
      morphTo(eyeR, PATHS.closedEyeR);
      morphTo(eyeL, PATHS.closedEyeL);
    } else if (!password && !email) {
      animateTo(face, 0, 0);
      morphTo(eyeR, PATHS.eyeR);
      morphTo(eyeL, PATHS.eyeL);
    }
  });

  return <FlowerLoginSvg ref={flower} />;
};

export default Flower;
