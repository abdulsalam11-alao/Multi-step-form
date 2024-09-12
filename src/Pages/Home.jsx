import { useState, useEffect } from "react";
import styled from "styled-components";
import Input from "../Ui/Input";
import Header from "../Ui/Header";
import Button from "../Ui/Button";

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
const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
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

  const [touched, setTouched] = useState({
    name: false,
    email: false,
    phone: false,
  });

  const [isValid, setIsValid] = useState(false);

  const { name, email, phone } = formData;

  // Handle form input changes
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle input field blur (mark as touched)
  const handleBlur = (e) => {
    setTouched({
      ...touched,
      [e.target.name]: true,
    });
  };

  // Validation functions
  const validateName = (name) => {
    if (!name.trim()) {
      return "Name is required";
    }
    if (!/^[a-zA-Z\s]+$/.test(name)) {
      return "Name can only contain letters and spaces";
    }
    return "";
  };

  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      return "Invalid email address";
    }
    return "";
  };

  const validatePhone = (phone) => {
    const phonePattern =
      /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;
    if (!phonePattern.test(phone)) {
      return "Invalid phone number";
    }
    return "";
  };

  // Check if all form fields are valid
  const isFormValid = () => {
    const nameError = validateName(name);
    const emailError = validateEmail(email);
    const phoneError = validatePhone(phone);

    setErrors({ name: nameError, email: emailError, phone: phoneError });

    // If all errors are empty, the form is valid
    return !nameError && !emailError && !phoneError;
  };

  useEffect(() => {
    const nameError = validateName(name);
    const emailError = validateEmail(email);
    const phoneError = validatePhone(phone);

    setErrors({ name: nameError, email: emailError, phone: phoneError });

    // If all errors are empty, the form is valid
    setIsValid(!nameError && !emailError && !phoneError);
  }, [name, email, phone]);

  const handleSubmit = (e) => {
    e.preventDefault();

    setTouched({
      name: true,
      email: true,
      phone: true,
    });

    if (isFormValid()) {
      console.log("Form is valid. Proceeding to the next step.");
      // Navigate to next page or perform desired action
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
          <StyledDiv>
            <label htmlFor="Name">Name</label>
            {touched.name && errors.name && (
              <span style={{ color: "red" }}>{errors.name}</span>
            )}
          </StyledDiv>

          <Input
            typeOfInput="text"
            placeholder="e.g Stephen King"
            name="name"
            value={name}
            onChange={handleInputChange}
            onBlur={handleBlur} // Track when the field is blurred
          />
        </StyledInput>
        <StyledInput>
          <StyledDiv>
            <label htmlFor="Email Address">Email Address</label>
            {touched.email && errors.email && (
              <span style={{ color: "red" }}>{errors.email}</span>
            )}
          </StyledDiv>

          <Input
            typeOfInput="email"
            placeholder="e.g StephenKing@lorem.com"
            name="email"
            value={email}
            onChange={handleInputChange}
            onBlur={handleBlur} // Track when the field is blurred
          />
        </StyledInput>
        <StyledInput>
          <StyledDiv>
            <label htmlFor="Phone Number">Phone Number</label>
            {touched.phone && errors.phone && (
              <span style={{ color: "red" }}>{errors.phone}</span>
            )}
          </StyledDiv>
          <Input
            typeOfInput="tel"
            placeholder="e.g +1 234 567 890"
            name="phone"
            value={phone}
            onChange={handleInputChange}
            onBlur={handleBlur} // Track when the field is blurred
          />
        </StyledInput>
        <StyledFooter>
          <Button value="/Plans" disabled={!isValid} />
        </StyledFooter>
      </form>
    </StyledHome>
  );
}

export default Home;
