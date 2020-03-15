import styled, { keyframes } from "styled-components";

const ChromeAutofill = props => keyframes`
  0% {}
  100% {
    color: white;
    background: transparent;
    background: url(${require(`../../img/${props.name}.svg`)}) no-repeat;
    }`;

export default styled.input`
  background-color: transparent;
  border: none;
  height: 3rem;
  width: 100%;
  margin: 2rem 0;
  border-bottom: 0.5px solid #ffffff70;
  font-size: 2.4rem;
  color: white;
  font-weight: lighter;
  padding: 0 0 8px 50px;
  background: url(${props => require(`../../img/${props.name}.svg`)}) no-repeat;
  &::placeholder {
    color: white;
  }
  &:focus {
    outline-width: 0;
  }
  &:-webkit-autofill {
    animation: ${props => ChromeAutofill(props)} 0.1s both;
  }
`;
