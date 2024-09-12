import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const StyledButton = styled.button`
  display: flex;
  margin-top: 50px;
  border-radius: 5px;
  width: 200px;
  outline: none;
  background: transparent;
  border: none;
  outline: none;
  border: none;
  color: var(--Cool-gray);
  font-family: "Ubuntu";
  cursor: pointer;
  &:hover {
    color: var(--Marine-blue);
  }
`;

function BackButton() {
  const navigate = useNavigate();
  function handleNavigate(to) {
    navigate(to);
  }
  return (
    <StyledButton onClick={() => handleNavigate(-1)}>Go Back</StyledButton>
  );
}

export default BackButton;
