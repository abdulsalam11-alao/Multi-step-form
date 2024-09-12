import Header from "../Ui/Header";
import styled from "styled-components";

// Styled components
const SummaryContainer = styled.div`
  background-color: var(--Magnolia);
  border-radius: 10px;
  padding: 20px;
  margin-top: 20px;
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
    color: var(--Purplish-blue);
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
  margin-bottom: 10px;

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
  border-top: 1px solid var(--Light-gray);

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
            <h4>Arcade (Monthly)</h4>
            <a href="#">Change</a>
          </PlanInfo>
          <Price>$9/mo</Price>
        </PlanDetails>

        {/* Add-ons */}
        <AddOnDetails>
          <p>Online service</p>
          <span>+$1/mo</span>
        </AddOnDetails>
        <AddOnDetails>
          <p>Larger storage</p>
          <span>+$2/mo</span>
        </AddOnDetails>

        {/* Total */}
        <TotalContainer>
          <h4>Total (per month)</h4>
          <span>+$12/mo</span>
        </TotalContainer>
      </SummaryContainer>
    </div>
  );
}

export default Summary;
