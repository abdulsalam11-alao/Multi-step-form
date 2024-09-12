import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { PlanProvider } from "./context/PlansContext";
import GlobalStyle from "./Styles/GlobalStyle";
import AppLayout from "./Ui/AppLayout";
import Home from "./Pages/Home";
import AddOns from "./Pages/AddOns";
import Plans from "./Pages/Plans";
import Summary from "./Pages/Summary";
import FinalPage from "./Pages/FinalPage";

function App() {
  return (
    <>
      <PlanProvider>
        <GlobalStyle />
        <BrowserRouter>
          <Routes>
            <Route element={<AppLayout />}>
              <Route index element={<Navigate replace to="Home" />} />
              <Route path="Home" element={<Home />} />
              <Route path="Plans" element={<Plans />} />
              <Route path="Add-ons" element={<AddOns />} />
              <Route path="summary" element={<Summary />} />
              <Route path="Approved" element={<FinalPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </PlanProvider>
    </>
  );
}

export default App;
