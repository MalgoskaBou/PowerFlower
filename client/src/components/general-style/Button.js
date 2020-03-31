import styled from "styled-components";

export default styled.button`
  background-color: #e8988c;
  padding: 0.7rem 0px;
  border: none;
  border-radius: 3rem;
  color: white;
  font-size: ${props => (props.fontSize ? props.fontSize : 1.8)}rem;
  letter-spacing: ${props => (props.smallerLetterSpace ? "0.2em" : "0.5em")};
  width: 50%;
  max-width: 300px;
  min-width: 200px;
  text-transform: uppercase;
  font-weight: lighter;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  &:focus {
    outline-width: 0;
  }
`;
