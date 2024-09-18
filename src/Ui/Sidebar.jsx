import { NavLink } from "react-router-dom";
import styled from "styled-components";
import StepComponent from "./StepComponent";

const StyledSidebar = styled.aside`
  background-image: url("/bg-sidebar-desktop.svg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 300px;
  border-radius: 10px;
  height: auto;
  display: flex;
  flex-direction: column;
  padding-top: 30px;
  padding-left: 30px;
  border: 1px solid var(--Marine-blue);
  font-family: "Ubuntu";
  @media screen and (max-width: 894px) {
    flex-direction: row;
    justify-content: center;
    background-image: url("/bg-sidebar-mobile.svg");
    background-size: contain;
    width: 100%;
    height: 200px;
    margin: 0;
  }
`;
const StyledNavLink = styled(NavLink)`
  width: 40px;
  height: 40px;
  text-decoration: none;
  border-radius: 50%;
  color: var(--White);
  border: 1px solid var(--White);
  padding: 5px 8px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    background-color: var(--Light-blue);
    color: var(--Marine-blue);
  }

  &.summary-active {
    background-color: var(--Light-blue);
    color: var(--Marine-blue);
  }
  @media screen and (max-width: 894px) {
    margin-left: 20px;
    margin-top: 20px;
  }
`;

function Sidebar() {
  return (
    <StyledSidebar>
      <div className="num">
        <StyledNavLink to="Home">1</StyledNavLink>
        <StepComponent Step="Step1" title="Your Info" />
      </div>
      <div className="num">
        <StyledNavLink to="Plans">2</StyledNavLink>
        <StepComponent Step="Step2" title="Select Plan" />
      </div>
      <div className="num">
        <StyledNavLink to="Add-ons">3</StyledNavLink>
        <StepComponent Step="Step3" title="Add-ons" />
      </div>{" "}
      <div className="num">
        <StyledNavLink
          to="summary"
          className={({ isActive }) =>
            isActive || window.location.pathname === "/Approved"
              ? "active summary-active"
              : ""
          }
        >
          4
        </StyledNavLink>
        <StepComponent Step="Step4" title="Summary" />
      </div>
    </StyledSidebar>
  );
}

export default Sidebar;
