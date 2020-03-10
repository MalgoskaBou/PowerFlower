import styled from "styled-components";
import Wrapper from "../../components/general-style/Wrapper";

export default styled(Wrapper)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .login-form {
    display: flex;
    align-items: center;
    flex-direction: column;
    max-width: 300px;
    min-width: 240px;
  }

  input[name="email"] {
    margin-top: 10rem;
  }
  input[name="password"] {
    margin-bottom: 5rem;
  }
`;
