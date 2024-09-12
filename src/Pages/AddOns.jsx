// AddOns.jsx
import { useState } from "react";
import Header from "../Ui/Header";
import AddOn from "../Ui/AddOn"; // Importing AddOn component
import styled from "styled-components";
import Button from "../Ui/Button";

// Styled components
const AddOnContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

function AddOns() {
  const [selectedAddOns, setSelectedAddOns] = useState({
    onlineService: true,
    largerStorage: true,
    customizableProfile: true,
  });

  const handleToggle = (addOn) => {
    setSelectedAddOns((prevState) => ({
      ...prevState,
      [addOn]: !prevState[addOn],
    }));
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
          price={1}
          isChecked={selectedAddOns.onlineService}
          onChange={() => handleToggle("onlineService")}
        />
        <AddOn
          title="Larger storage"
          description="Extra 1TB of cloud save"
          price={2}
          isChecked={selectedAddOns.largerStorage}
          onChange={() => handleToggle("largerStorage")}
        />
        <AddOn
          title="Customizable profile"
          description="Custom theme on your profile"
          price={2}
          isChecked={selectedAddOns.customizableProfile}
          onChange={() => handleToggle("customizableProfile")}
        />
      </AddOnContainer>
      <Button value="/summary" />
    </div>
  );
}

export default AddOns;
