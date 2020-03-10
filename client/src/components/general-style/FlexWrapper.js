import styled from "styled-components";

export default styled.section`
  display: flex;
  flex-direction: ${props => props.direction || "initial"};
  justify-content: ${props => props.justifyContent || "initial"};
  align-items: ${props => props.alignItems || "initial"};
`;
