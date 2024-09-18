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

function Input({
  typeOfInput,
  placeholder,
  name,
  value,
  onChange,
  defaultValue,
}) {
  return (
    <Styledinput
      type={typeOfInput}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
      required
      defaultValue={defaultValue}
    />
  );
}

Input.propTypes = {
  typeOfInput: propTypes.string.isRequired,
  placeholder: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  value: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
};

export default Input;
