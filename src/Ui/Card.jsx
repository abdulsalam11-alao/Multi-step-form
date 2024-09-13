import styled from "styled-components";
import propTypes from "prop-types";

const StyledCard = styled.div`
  width: 170px;
  height: auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  border: 1px solid
    ${({ $isActive }) =>
      $isActive ? "var(--Purplish-blue)" : "var(--Light-gray)"};
  border-radius: 10px;
  background: ${({ $isActive }) =>
    $isActive ? "var(--Magnolia)" : "var(--White)"};
  color: var(--Marine-blue);
  margin: 10px;
  cursor: pointer;

  img {
    width: 40px;
    margin-bottom: 30px;
  }

  span {
    font-family: "UbuntuM";

    p {
      color: var(--Cool-gray);
    }
  }
`;
const StyledP = styled.p`
  margin-top: 10px;
  font-family: UbuntuM;
  color: var(--Marine-blue);
  font-size: 10px;
`;

function Card({ image, text, amount, isActive, onClick, isYearly }) {
  return (
    <StyledCard $isActive={isActive} onClick={onClick}>
      <img src={image} alt={image} />
      <span>
        {text}

        <p>
          ${amount}/{isYearly ? "yr" : "mo"}
        </p>
      </span>

      {isYearly && <StyledP> 2 Months Free</StyledP>}
    </StyledCard>
  );
}

Card.propTypes = {
  image: propTypes.string.isRequired,
  text: propTypes.string.isRequired,
  amount: propTypes.number.isRequired,
  isActive: propTypes.bool.isRequired,
  isYearly: propTypes.bool.isRequired,
  onClick: propTypes.func.isRequired,
};

export default Card;
