import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import styled from "styled-components";

const StyledAppLayout = styled.main`
  display: flex;
  justify-content: start;
  width: 900px;
  background-color: var(--White);
  height: 90vh;
  padding: 1.2rem 1.2rem;
  margin-top: -30px;
  border-radius: 10px;
  @media screen and (max-width: 894px) {
    flex-direction: column;
    padding: 0;
    height: auto;
  }
`;
const StyledOutLet = styled.div`
  width: 400px;
  margin-left: 6rem;
  margin-top: 3rem;
  @media screen and (max-width: 894px) {
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;
    width: auto;
    position: absolute;
    left: -10%;
    top: 10%;
    background-color: white;
    padding: 20px;
    border-radius: 20px;
  }
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
