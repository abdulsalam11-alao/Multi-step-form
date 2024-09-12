import styled from "styled-components";
import propTypes from "prop-types";

// Styled components
const AddOnItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border: 1px solid var(--Purplish-blue);
  border-radius: 8px;
  background-color: ${({ isChecked }) =>
    isChecked ? "var(--Magnolia)" : "white"};
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: var(--Magnolia);
  }
`;

const AddOnDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  h4 {
    margin: 0;
    color: var(--Marine-blue);
    font-size: 16px;
  }

  p {
    margin: 0;
    color: var(--Cool-gray);
    font-size: 14px;
  }
`;

const Checkbox = styled.input`
  transform: scale(1.5);
  cursor: pointer;
`;

const AddOnPrice = styled.span`
  color: var(--Purplish-blue);
  font-size: 16px;
`;

// AddOn component
function AddOn({ title, description, price, isChecked, onChange }) {
  return (
    <AddOnItem isChecked={isChecked} onClick={onChange}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Checkbox
          type="checkbox"
          checked={isChecked}
          onChange={onChange}
          onClick={(e) => e.stopPropagation()} // Prevents triggering the outer onClick
        />
        <AddOnDetails style={{ marginLeft: "15px" }}>
          <h4>{title}</h4>
          <p>{description}</p>
        </AddOnDetails>
      </div>
      <AddOnPrice>+${price}/mo</AddOnPrice>
    </AddOnItem>
  );
}

// Add propTypes validation
AddOn.propTypes = {
  title: propTypes.string.isRequired,
  description: propTypes.string.isRequired,
  price: propTypes.number.isRequired,
  isChecked: propTypes.bool.isRequired,
  onChange: propTypes.func.isRequired,
};

export default AddOn;
