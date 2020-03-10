import styled from "styled-components";
import React from "react";

const Background = styled.div`
  background-color: #98b9ab;
  padding: 0.7rem;
  border: none;
  color: white;
  border-radius: 1rem;
  min-width: 10rem;
  min-height: 10rem;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Zone = props => {
  return (
    <Wrapper>
      <Background></Background>
      <p>{props.name}</p>
    </Wrapper>
  );
};

export default Zone;
