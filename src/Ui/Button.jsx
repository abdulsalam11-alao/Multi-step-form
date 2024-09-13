import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import propTypes from "prop-types";

const StyledButton = styled.button`
  display: flex;
  margin-top: 50px;
  padding: 10px;
  border-radius: 5px;
  width: ${(props) =>
    props.variation === "custom"
      ? "auto"
      : props.variation === "back"
      ? "200px"
      : "auto"};
  background-color: ${(props) =>
    props.variation === "next"
      ? "var(--Marine-blue)"
      : props.variation === "custom"
      ? "var(--Purplish-blue)"
      : "transparent"};
  color: ${(props) =>
    props.variation === "next" || props.variation === "custom"
      ? "var(--White)"
      : "var(--Cool-gray)"};
  border: none;
  font-family: "Ubuntu";
  cursor: pointer;
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  pointer-events: ${(props) => (props.disabled ? "none" : "auto")};
  font-size: ${(props) => (props.variation === "custom" ? "1.2rem" : "1rem")};
  &:hover {
    background-color: ${(props) =>
      props.variation === "next"
        ? "var(--Marine-blue)"
        : props.variation === "custom"
        ? "var(--Purplish-blue)"
        : "transparent"};
    color: ${(props) =>
      props.variation === "next" || props.variation === "custom"
        ? "var(--White)"
        : "var(--Marine-blue)"};
  }
`;

function Button({ value, variation, disabled }) {
  const navigate = useNavigate();

  function handleNavigate(to) {
    if (!disabled) {
      navigate(to);
    }
  }

  return (
    <StyledButton
      onClick={() => handleNavigate(value)}
      type="button"
      variation={variation}
      disabled={disabled}
    >
      {variation === "next"
        ? "Next Step"
        : variation === "custom"
        ? "Confirm"
        : "Go Back"}
    </StyledButton>
  );
}

Button.propTypes = {
  value: propTypes.string.isRequired,
  variation: propTypes.oneOf(["back", "next", "custom"]).isRequired,
  disabled: propTypes.bool,
};

export default Button;
