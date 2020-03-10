import styled from "styled-components";

export default styled.section`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: ${props => props.direction || "initial"};
  justify-content: ${props => props.justifyContent || "initial"};
  align-items: ${props => props.alignItems || "initial"};
`;
