import styled from "styled-components";
import Input from "../Ui/Input";
import Header from "../Ui/Header";
import Button from "../Ui/Button";

import Row from "../Ui/Row";
import { usePlan } from "../hooks/usePlan";

const StyledHome = styled.div``;
const StyledInput = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0px;
  label {
    color: var(--Marine-blue);
    font-family: "UbuntuR";
    font-size: 12px;
  }
`;
const StyledFooter = styled.footer`
  display: flex;
  justify-content: end;
`;

function Home() {
  const {
    state: { formData, formError, isValid },
    setFormData,
    ValidateForm,
    setIsValid,
  } = usePlan();

  const { name, email, phone } = formData;

  // Handle form input changes and validate in real-time
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Update formData
    setFormData({
      ...formData,
      [name]: value,
    });

    // Validate the current field
    ValidateForm(name, value);

    setIsValid();
  };
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (isValid) {
      console.log("Form is valid. Proceeding to the next step.");
      // Navigate to next page or perform the next action
    } else {
      console.log("Form is invalid. Fix the errors.");
    }
  };

  return (
    <StyledHome>
      <Header
        title="Personal info"
        text="Please provide your name, email, and Phone number"
      />
      <form onSubmit={handleSubmit}>
        <StyledInput>
          <Row>
            <label htmlFor="Name">Name</label>
            {formError?.name && (
              <span style={{ color: "red" }}>{formError?.name}</span>
            )}
          </Row>

          <Input
            typeOfInput="text"
            placeholder="e.g Stephen King"
            name="name"
            value={name}
            onChange={handleInputChange}
          />
        </StyledInput>
        <StyledInput>
          <Row>
            <label htmlFor="Email Address">Email Address</label>
            {formError?.email && (
              <span style={{ color: "red" }}>{formError?.email}</span>
            )}
          </Row>

          <Input
            typeOfInput="email"
            placeholder="e.g StephenKing@lorem.com"
            name="email"
            value={email}
            onChange={handleInputChange}
          />
        </StyledInput>
        <StyledInput>
          <Row>
            <label htmlFor="Phone Number">Phone Number</label>
            {formError?.phone && (
              <span style={{ color: "red" }}>{formError?.phone}</span>
            )}
          </Row>
          <Input
            typeOfInput="tel"
            placeholder="e.g +1 234 567 890"
            name="phone"
            value={phone}
            onChange={handleInputChange}
          />
        </StyledInput>
        <StyledFooter>
          <Button value="/Plans" variation="next" disabled={!isValid} />
        </StyledFooter>
      </form>
    </StyledHome>
  );
}

export default Home;
