import { useNavigate } from "react-router-dom";
import { usePlan } from "../hooks/usePlan";
import { useEffect } from "react";

function ProtectedRoute({ children }) {
  const {
    state: { isValid },
  } = usePlan();
  const navigate = useNavigate();

  useEffect(
    function () {
      if (!isValid) navigate("/");
    },
    [isValid, navigate]
  );
  return isValid ? children : null;
}

export default ProtectedRoute;
