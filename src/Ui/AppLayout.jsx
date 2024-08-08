import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import styled from "styled-components";

const StyledAppLayout = styled.main`
  display: flex;
  justify-content: start;
  width: 900px;
  border: 1px solid red;
  background-color: var(--White);
  height: 90vh;
  padding: 1.2rem 1.2rem;
  margin-top: -30px;
  border-radius: 10px;
`;
const StyledOutLet = styled.div`
  width: 400px;
  margin-left: 6rem;
  margin-top: 3rem;
`;

function AppLayout() {
  return (
    <StyledAppLayout>
      <Sidebar />
      <StyledOutLet>
        <Outlet />
      </StyledOutLet>
    </StyledAppLayout>
  );
}

export default AppLayout;
