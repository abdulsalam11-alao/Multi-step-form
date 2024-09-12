// src/hooks/usePlan.js
import { useContext } from "react";
import { PlanContext } from "../context/PlansContext";

export function usePlan() {
  const context = useContext(PlanContext);
  if (!context) {
    throw new Error("usePlan must be used within a PlanProvider");
  }
  return context;
}
