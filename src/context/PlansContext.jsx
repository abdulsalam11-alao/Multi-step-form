import { createContext, useReducer } from "react";
import PropTypes from "prop-types";
import {
  SET_PLAN,
  TOGGLE_BILLING,
  SET_ADD_ONS,
  SET_FORM_DATA,
  SET_FORM_ERRORS,
  SET_FORM_VALID,
} from "./ActionTypes";
import {
  validateEmail,
  validateName,
  validatePhone,
} from "../utils/formValidation";

const initialState = {
  activePlan: "Arcade",
  isYearly: false,
  selectedAddOns: {
    onlineService: false,
    largerStorage: false,
    customizableProfile: false,
  },
  formData: {
    name: "",
    email: "",
    phone: "",
  },
  formError: {
    name: "",
    email: "",
    phone: "",
  },
  isValid: false,
};

function planReducer(state, action) {
  switch (action.type) {
    case SET_PLAN:
      return { ...state, activePlan: action.payload };
    case TOGGLE_BILLING:
      return { ...state, isYearly: !state.isYearly };
    case SET_ADD_ONS:
      return { ...state, selectedAddOns: action.payload };
    case SET_FORM_DATA:
      return { ...state, formData: { ...state.formData, ...action.payload } };
    case SET_FORM_ERRORS:
      return { ...state, formError: { ...state.formError, ...action.payload } };
    case SET_FORM_VALID:
      return { ...state, isValid: action.payload };
    default:
      return state;
  }
}

export const PlanContext = createContext();
const planAmounts = {
  Arcade: { monthly: 9, yearly: 90 },
  Advanced: { monthly: 12, yearly: 120 },
  Pro: { monthly: 15, yearly: 150 },
};

export function PlanProvider({ children }) {
  const [state, dispatch] = useReducer(planReducer, initialState);

  const setPlan = (plan) => {
    dispatch({ type: SET_PLAN, payload: plan });
  };

  const toggleBilling = () => {
    dispatch({ type: TOGGLE_BILLING });
  };

  const setAddOns = (addOns) => {
    dispatch({ type: SET_ADD_ONS, payload: addOns });
  };

  const setFormData = (formData) => {
    dispatch({ type: SET_FORM_DATA, payload: formData });
  };

  const setFormError = (formError) => {
    dispatch({ type: SET_FORM_ERRORS, payload: formError });
  };

  const setFormValid = (formValid) => {
    dispatch({ type: SET_FORM_VALID, payload: formValid });
  };
  const ValidateForm = (name, value) => {
    let errors = { ...state.formErrors };
    if (name === "name") {
      errors.name = validateName(value);
    } else if (name === "email") {
      errors.email = validateEmail(value);
    } else if (name === "phone") {
      errors.phone = validatePhone(value);
    }

    setFormError(errors);

    return errors;
  };

  const handleToggleAddons = (addOn) => {
    const newState = {
      ...state.selectedAddOns,
      [addOn]: !state.selectedAddOns[addOn],
    };

    setAddOns(newState);
    return newState;
  };

  const setIsValid = () => {
    const formIsValid =
      !state.formError.name && !state.formError.email && !state.formError.phone;
    setFormValid(formIsValid);
  };
  return (
    <PlanContext.Provider
      value={{
        state,
        setPlan,
        toggleBilling,
        planAmounts,
        setAddOns,
        setFormData,
        setFormError,
        ValidateForm,
        handleToggleAddons,
        setIsValid,
      }}
    >
      {children}
    </PlanContext.Provider>
  );
}

PlanProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
