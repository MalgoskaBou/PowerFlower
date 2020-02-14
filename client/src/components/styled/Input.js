import styled from "styled-components";
import iconMail from "../../img/icon_mail.svg";
import iconPassword from "../../img/icon_password.svg";

export default styled.input`
  background-color: transparent;
  border: none;
  height: 3rem;
  width: 50%;
  margin: 2rem 0;
  border-bottom: 0.5px solid #ffffff70;
  max-width: 300px;
  font-size: 2.4rem;
  color: white;
  font-weight: lighter;
  padding: 0 0 8px 50px;
  background: url(${props => props.type === "email" ? iconMail : iconPassword}) no-repeat;
  &::placeholder {
    color: white;
  }
  &:focus {
    outline-width: 0;
}
`;