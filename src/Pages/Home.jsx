import { useState } from "react";
import styled from "styled-components";
import Input from "../Ui/Input";
import Header from "../Ui/Header";
import Button from "../Ui/Button";
import {
  validateName,
  validateEmail,
  validatePhone,
} from "../utils/formValidation";
import Row from "../Ui/Row";

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
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [isValid, setIsValid] = useState(false);

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
    let newErrors = { ...errors };
    if (name === "name") {
      newErrors.name = validateName(value);
    } else if (name === "email") {
      newErrors.email = validateEmail(value);
    } else if (name === "phone") {
      newErrors.phone = validatePhone(value);
    }

    // Update error state
    setErrors(newErrors);

    // Check if the form is valid
    const formIsValid = !newErrors.name && !newErrors.email && !newErrors.phone;
    setIsValid(formIsValid); // Set form validity in real-time
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
            {errors.name && <span style={{ color: "red" }}>{errors.name}</span>}
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
            {errors.email && (
              <span style={{ color: "red" }}>{errors.email}</span>
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
            {errors.phone && (
              <span style={{ color: "red" }}>{errors.phone}</span>
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
