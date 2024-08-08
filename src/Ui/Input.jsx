import styled from "styled-components";
import propTypes from "prop-types";

const Styledinput = styled.input`
  padding: 12px;
  margin-top: 5px;
  border-radius: 8px;
  color: var(--Marine-blue);
  border: 1px solid var(--Cool-gray);
  outline: 1px solid var(--Light-gray);
  font-family: "Ubuntu";
  line-height: 1.3rem;
`;
function Input({ typeOfInput, placeholder }) {
  return <Styledinput type={typeOfInput} placeholder={placeholder} required />;
}

Input.propTypes = {
  typeOfInput: propTypes.string,
  placeholder: propTypes.string,
};
export default Input;
