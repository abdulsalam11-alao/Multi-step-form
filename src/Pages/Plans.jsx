import { useState } from "react";
import Card from "../Ui/Card"; // Adjust the path if necessary
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
  const [activePlan, setActivePlan] = useState("Arcade");
  const [isYearly, setIsYearly] = useState(false); // State to track billing period

  const handleCardClick = (plan) => {
    setActivePlan(plan);
  };

  const handleToggle = () => {
    setIsYearly((prev) => !prev); // Toggle between monthly and yearly
  };

  return (
    <div>
      <Header
        title="Select your plan"
        text="You have the option of monthly or yearly billing."
      />
      <StyledDiv>
        <Card
          text="Arcade"
          amount={isYearly ? 90 : 9} // Update amount based on billing period
          image="/icon-arcade.svg"
          isActive={activePlan === "Arcade"}
          onClick={() => handleCardClick("Arcade")}
          isYearly={isYearly}
        />
        <Card
          text="Advanced"
          amount={isYearly ? 120 : 12} // Update amount based on billing period
          image="/icon-advanced.svg"
          isActive={activePlan === "Advanced"}
          onClick={() => handleCardClick("Advanced")}
          isYearly={isYearly}
        />
        <Card
          text="Pro"
          amount={isYearly ? 150 : 15} // Update amount based on billing period
          image="/icon-pro.svg"
          isActive={activePlan === "Pro"}
          onClick={() => handleCardClick("Pro")}
          isYearly={isYearly}
        />
      </StyledDiv>
      <StyledSection>
        <p>Monthly</p>
        <label className="switch">
          <input type="checkbox" checked={isYearly} onChange={handleToggle} />
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
