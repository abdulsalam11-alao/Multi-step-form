// src/utils/formValidation.js

// Validate name input
export const validateName = (name) => {
  if (!name.trim()) {
    return "Name is required";
  }
  if (!/^[a-zA-Z\s]+$/.test(name)) {
    return "this Field is required";
  }
  return "";
};

// Validate email input
export const validateEmail = (email) => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    return "This Field is Required";
  }
  return "";
};

// Validate phone input
export const validatePhone = (phone) => {
  const phonePattern =
    /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;
  if (!phonePattern.test(phone)) {
    return "This Field is Required";
  }
  return "";
};

// Overall form validation
export const isFormValid = (formData, setErrors) => {
  const { name, email, phone } = formData;

  const nameError = validateName(name);
  const emailError = validateEmail(email);
  const phoneError = validatePhone(phone);

  setErrors({ name: nameError, email: emailError, phone: phoneError });

  return !nameError && !emailError && !phoneError;
};
