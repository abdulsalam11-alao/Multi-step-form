import propTypes from "prop-types";
import styled from "styled-components";

const StyledDiv = styled.div`
  margin-left: 15px;
  display: flex;
  flex-direction: column;
  span {
    font-family: "UbuntuR";
    color: var(--Cool-gray);
    font-size: 16px;
    margin-bottom: 3px;
    text-transform: uppercase;
  }
  h2 {
    color: var(--Light-gray);
    font-family: "UbuntuM";
    text-transform: uppercase;
    font-size: 16px;
  }
`;

function StepComponent({ Step, title }) {
  return (
    <StyledDiv>
      <span>{Step}</span>
      <h2>{title}</h2>
    </StyledDiv>
  );
}
StepComponent.propTypes = {
  Step: propTypes.string,
  title: propTypes.string,
};
export default StepComponent;
