import styled from "styled-components";
import React from "react";
import { Link } from "react-router-dom";
import zone1 from "../img/zone1.svg";

const Background = styled.div`
  background-color: #98b9ab;
  padding: 0.7rem;
  border: none;
  color: white;
  border-radius: 1rem;
  width: 30rem;
  height: 30rem;
  margin-bottom: 2rem;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;
  padding: 3rem;
`;

const Img = styled.img`
  height: 100%;
  padding: 3rem;
`;

const Paragraph = styled.p`
  font-weight: lighter;
  margin-top: 2rem;
`;

const Zone = props => {
  return (
    <Wrapper>
      <Link to={`/zones/${props.zoneID}`}>
        <Background>
          <Img src={props.image || zone1} />
        </Background>
      </Link>
      <p>{props.name.toUpperCase()}</p>
      <Paragraph>Ilość kwiatków: 3</Paragraph>
    </Wrapper>
  );
};

export default Zone;
