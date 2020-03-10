import styled from "styled-components";
import React from "react";

const ButtonText = styled.button`
  background-color: transparent;
  padding: 0.7rem 0px;
  border: none;
  color: white;
  font-size: ${props => (props.fontSize ? props.fontSize : 1.8)}rem;
  text-transform: uppercase;
  font-weight: normal;
  &:focus {
    outline-width: 0;
  }
  .icon {
    padding-left: 0.5rem;
    font-size: 2.3rem;
  }
`;

const IconButton = props => {
  return (
    <ButtonText>
      {props.children}
      <i className={`${props.icon || "icon-flower"} icon`}></i>
    </ButtonText>
  );
};

export default IconButton;
