import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import styled from "styled-components";

const StyledAppLayout = styled.main`
  display: flex;
  justify-content: start;
  width: 100%;
  max-width: 900px;
  background-color: var(--White);
  height: 90vh;
  padding: 1.2rem;
  margin-top: -30px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  @media screen and (max-width: 894px) {
    flex-direction: column;
    padding: 0;
    height: auto;
    width: 90%; /* Adjust width to 90% on smaller screens */
    margin: 0 auto; /* Center align the layout */
  }
`;

const StyledOutLet = styled.div`
  width: 60%;
  margin-left: 3rem;
  margin-top: 3rem;
  background-color: white;
  padding: 2rem;
  border-radius: 10px;

  @media screen and (max-width: 894px) {
    width: 100%;
    margin: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    background-color: var(--White);
    border-radius: 20px;
    position: static; /* Position fixed removed for better flow */
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
