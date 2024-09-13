// src/pages/Summary.jsx
import { Link } from "react-router-dom";
import { usePlan } from "../hooks/usePlan";
import Header from "../Ui/Header";
import styled from "styled-components";
import Button from "../Ui/Button";
import Row from "../Ui/Row";

// Styled components
const SummaryContainer = styled.div`
  background-color: var(--Magnolia);
  border-radius: 10px;
  padding: 20px;
  margin-top: 20px;
  font-family: UbuntuR;
`;

const PlanDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--Light-gray);
  padding-bottom: 10px;
  margin-bottom: 10px;
`;

const PlanInfo = styled.div`
  display: flex;
  flex-direction: column;

  h4 {
    margin: 0;
    font-size: 16px;
    color: var(--Marine-blue);
  }

  a {
    font-size: 14px;
    color: var(--Cool-gray);
    cursor: pointer;
    text-decoration: underline;
  }
`;

const Price = styled.div`
  font-size: 16px;
  color: var(--Marine-blue);
  font-weight: bold;
`;

const AddOnDetails = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 0;

  p {
    font-size: 14px;
    color: var(--Cool-gray);
    margin: 0;
  }

  span {
    font-size: 14px;
    color: var(--Marine-blue);
  }
`;

const TotalContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 10px;
  margin-top: 10px;

  h4 {
    font-size: 14px;
    color: var(--Cool-gray);
  }

  span {
    font-size: 18px;
    color: var(--Purplish-blue);
    font-weight: bold;
  }
`;

function Summary() {
  const {
    state: { activePlan, isYearly, selectedAddOns },
    planAmounts,
  } = usePlan();

  const planAmount =
    planAmounts[activePlan]?.[isYearly ? "yearly" : "monthly"] || 0;

  const addOnPrices = {
    onlineService: isYearly ? 10 : 1,
    largerStorage: isYearly ? 20 : 2,
    customizableProfile: isYearly ? 20 : 2,
  };

  // Calculate total for add-ons
  const addOnsTotal = Object.keys(selectedAddOns).reduce((total, key) => {
    return selectedAddOns[key] ? total + addOnPrices[key] : total;
  }, 0);

  const totalAmount = planAmount + addOnsTotal;

  return (
    <div>
      <Header
        title="Finishing up"
        text="Double-check everything looks OK before confirming"
      />

      <SummaryContainer>
        {/* Plan details */}
        <PlanDetails>
          <PlanInfo>
            <h4>{`${activePlan} (${isYearly ? "Yearly" : "Monthly"})`}</h4>
            <Link to="/Plans">Change</Link>
          </PlanInfo>
          <Price>{`$${planAmount}/${isYearly ? "yr" : "mo"}`}</Price>
        </PlanDetails>

        {/* Add-ons */}
        {Object.keys(selectedAddOns).map(
          (addOnKey) =>
            selectedAddOns[addOnKey] && (
              <AddOnDetails key={addOnKey}>
                <p>{addOnKey.replace(/([A-Z])/g, " $1").trim()}</p>
                <span>{`+$${addOnPrices[addOnKey]}/${
                  isYearly ? "yr" : "mo"
                }`}</span>
              </AddOnDetails>
            )
        )}
      </SummaryContainer>

      <TotalContainer>
        <h4>{`Total (${isYearly ? "per year" : "per month"})`}</h4>
        <span>{`$${totalAmount}/${isYearly ? "yr" : "mo"}`}</span>
      </TotalContainer>

      <Row>
        <Button value="/Add-ons" variation="back" />
        <Button value="/Approved" variation="custom" />
      </Row>
    </div>
  );
}

export default Summary;
