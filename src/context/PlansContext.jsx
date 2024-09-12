// src/context/PlansContext.jsx
import { createContext, useReducer } from "react";
import PropTypes from "prop-types";
import { SET_PLAN, TOGGLE_BILLING, SET_ADD_ONS } from "./ActionTypes";

const initialState = {
  activePlan: "Arcade",
  isYearly: false,
  selectedAddOns: {
    onlineService: false,
    largerStorage: false,
    customizableProfile: false,
  },
};

function planReducer(state, action) {
  switch (action.type) {
    case SET_PLAN:
      return { ...state, activePlan: action.payload };
    case TOGGLE_BILLING:
      return { ...state, isYearly: !state.isYearly };
    case SET_ADD_ONS:
      return { ...state, selectedAddOns: action.payload };
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

  return (
    <PlanContext.Provider
      value={{ state, setPlan, toggleBilling, planAmounts, setAddOns }}
    >
      {children}
    </PlanContext.Provider>
  );
}

PlanProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
