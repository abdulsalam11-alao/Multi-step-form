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
  const {
    state: { selectedAddOns, isYearly },
    handleToggleAddons,
  } = usePlan();

  const { onlineService, largerStorage, customizableProfile } = selectedAddOns;

  const isFalsed = !(customizableProfile || largerStorage || onlineService);

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
          price={isYearly ? 10 : 1}
          isChecked={onlineService}
          onChange={() => handleToggleAddons("onlineService", selectedAddOns)}
          isYearly={isYearly}
        />
        <AddOn
          title="Larger storage"
          description="Extra 1TB of cloud save"
          price={isYearly ? 20 : 2}
          isChecked={largerStorage}
          onChange={() => handleToggleAddons("largerStorage", selectedAddOns)}
          isYearly={isYearly}
        />
        <AddOn
          title="Customizable profile"
          description="Custom theme on your profile"
          price={isYearly ? 20 : 2}
          isChecked={customizableProfile}
          onChange={() =>
            handleToggleAddons("customizableProfile", selectedAddOns)
          }
          isYearly={isYearly}
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
