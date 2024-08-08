import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import GlobalStyle from "./Styles/GlobalStyle";
import AppLayout from "./Ui/AppLayout";
import Home from "./Pages/Home";
import AddOns from "./Pages/AddOns";
import Plans from "./Pages/Plans";
import Summary from "./Pages/Summary";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="Home" />} />
            <Route path="Home" element={<Home />} />
            <Route path="Plans" element={<Plans />} />
            <Route path="Add-ons" element={<AddOns />} />
            <Route path="summary" element={<Summary />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
