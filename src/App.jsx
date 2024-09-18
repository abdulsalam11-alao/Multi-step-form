import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { PlanProvider } from "./context/PlansContext";
import GlobalStyle from "./Styles/GlobalStyle";
import AppLayout from "./Ui/AppLayout";
import Home from "./Pages/Home";
import AddOns from "./Pages/AddOns";
import Plans from "./Pages/Plans";
import Summary from "./Pages/Summary";
import FinalPage from "./Pages/FinalPage";
import PageNotFound from "./Pages/PageNotFound";
import ProtectedRoute from "./Pages/ProtectedRoute";
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

              <Route
                path="Plans"
                element={
                  <ProtectedRoute>
                    <Plans />
                  </ProtectedRoute>
                }
              />
              <Route
                path="Add-ons"
                element={
                  <ProtectedRoute>
                    <AddOns />
                  </ProtectedRoute>
                }
              />
              <Route
                path="summary"
                element={
                  <ProtectedRoute>
                    <Summary />
                  </ProtectedRoute>
                }
              />
              <Route
                path="Approved"
                element={
                  <ProtectedRoute>
                    <FinalPage />
                  </ProtectedRoute>
                }
              />
              <Route path="*" element={<PageNotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </PlanProvider>
    </>
  );
}

export default App;
