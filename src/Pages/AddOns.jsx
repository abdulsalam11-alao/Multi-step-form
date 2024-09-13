import { useState } from "react";
import Header from "../Ui/Header";
import AddOn from "../Ui/AddOn";
import styled from "styled-components";
import Button from "../Ui/Button";
import { usePlan } from "../hooks/usePlan";
import Row from "../Ui/Row";

// Styled components
const AddOnContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

function AddOns() {
  const { state, setAddOns } = usePlan();

  const [selectedAddOns, setSelectedAddOns] = useState({
    onlineService: false,
    largerStorage: false,
    customizableProfile: false,
  });

  const isFalsed = !(
    selectedAddOns.customizableProfile ||
    selectedAddOns.largerStorage ||
    selectedAddOns.onlineService
  );

  // Handle add-on toggle
  const handleToggle = (addOn) => {
    setSelectedAddOns((prevState) => {
      const newState = {
        ...prevState,
        [addOn]: !prevState[addOn],
      };
      // Update global state via context
      setAddOns(newState);
      return newState;
    });
  };

  return (
    <div>
      <Header
        title="Pick add-ons"
        text="Add-ons help enhance your gaming experience"
      />
      <AddOnContainer>
        <AddOn
          title="Online service"
          description="Access to multiplayer games"
          price={state.isYearly ? 10 : 1}
          isChecked={selectedAddOns.onlineService}
          onChange={() => handleToggle("onlineService")}
          isYearly={state.isYearly}
        />
        <AddOn
          title="Larger storage"
          description="Extra 1TB of cloud save"
          price={state.isYearly ? 20 : 2}
          isChecked={selectedAddOns.largerStorage}
          onChange={() => handleToggle("largerStorage")}
          isYearly={state.isYearly}
        />
        <AddOn
          title="Customizable profile"
          description="Custom theme on your profile"
          price={state.isYearly ? 20 : 2}
          isChecked={selectedAddOns.customizableProfile}
          onChange={() => handleToggle("customizableProfile")}
          isYearly={state.isYearly}
        />
      </AddOnContainer>
      <Row>
        <Button value="/plans" variation="back" />
        <Button value="/summary" variation="next" disabled={isFalsed} />
      </Row>
    </div>
  );
}

export default AddOns;
