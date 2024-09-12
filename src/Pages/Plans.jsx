// src/pages/Plans.jsx
import { usePlan } from "../hooks/usePlan";
import Card from "../Ui/Card";
import Header from "../Ui/Header";
import Button from "../Ui/Button";
import BackButton from "../Ui/BackButton";
import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  grid-template-columns: auto auto auto;
`;

const StyledSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--Light-gray);
  margin: 20px 0;
  border-radius: 5px;
  padding: 5px;
  p {
    color: var(--Marine-blue);
    font-family: UbuntuM;
    margin: 0px 10px;
  }
`;

const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

function Plans() {
  const {
    state: { isYearly, activePlan },
    setPlan,
    toggleBilling,
    planAmounts,
  } = usePlan();

  function getPlan(plan) {
    return planAmounts[plan]?.[isYearly ? "yearly" : "monthly"] || 0;
  }

  return (
    <div>
      <Header
        title="Select your plan"
        text="You have the option of monthly or yearly billing."
      />
      <StyledDiv>
        <Card
          text="Arcade"
          amount={getPlan("Arcade")}
          image="/icon-arcade.svg"
          isActive={activePlan === "Arcade"}
          onClick={() => setPlan("Arcade")}
          isYearly={isYearly}
        />
        <Card
          text="Advanced"
          amount={getPlan("Advanced")}
          image="/icon-advanced.svg"
          isActive={activePlan === "Advanced"}
          onClick={() => setPlan("Advanced")}
          isYearly={isYearly}
        />
        <Card
          text="Pro"
          amount={getPlan("Pro")}
          image="/icon-pro.svg"
          isActive={activePlan === "Pro"}
          onClick={() => setPlan("Pro")}
          isYearly={isYearly}
        />
      </StyledDiv>
      <StyledSection>
        <p>Monthly</p>
        <label className="switch">
          <input type="checkbox" checked={isYearly} onChange={toggleBilling} />
          <div className="slider round"></div>
        </label>
        <p>Yearly</p>
      </StyledSection>
      <StyledFooter>
        <BackButton />
        <Button value="/Add-ons" />
      </StyledFooter>
    </div>
  );
}

export default Plans;
