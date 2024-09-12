import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import propTypes from "prop-types";

const StyledButton = styled.button`
  display: flex;
  margin-top: 50px;
  padding: 10px;
  border-radius: 5px;
  outline: none;
  border: none;
  background-color: var(--Marine-blue);
  color: var(--White);
  font-family: "UbuntuR";
  cursor: pointer;
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  pointer-events: ${(props) => (props.disabled ? "none" : "auto")};
`;

function Button({ value, disabled }) {
  const navigate = useNavigate();

  function handleNavigate(to) {
    if (!disabled) {
      navigate(to);
    }
  }

  return (
    <StyledButton
      onClick={() => handleNavigate(value)}
      type="submit"
      disabled={disabled}
    >
      Next Step
    </StyledButton>
  );
}

Button.propTypes = {
  value: propTypes.string.isRequired,
  disabled: propTypes.bool,
};

export default Button;
