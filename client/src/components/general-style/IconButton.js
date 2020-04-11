import styled from "styled-components";
import React from "react";

const ButtonText = styled.button`
  background-color: transparent;
  padding: 0.7rem 0px;
  border: none;
  color: white;
  font-size: ${(props) => (props.fontSize ? props.fontSize : 1.8)}rem;
  text-transform: uppercase;
  font-weight: normal;
  cursor: pointer;
  &:focus {
    outline-width: 0;
  }
  .icon {
    padding-left: 0.5rem;
    font-size: 2.3rem;
  }
`;

const IconButton = (props) => {
  const { onClick, icon, children } = props;
  return (
    <ButtonText onClick={onClick}>
      {children}
      <i className={`${icon} icon`}></i>
    </ButtonText>
  );
};

IconButton.defaultProps = {
  icon: "icon-flower",
};

export default IconButton;
