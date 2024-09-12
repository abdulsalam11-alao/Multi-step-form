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
        <StyledNavLink to="summary">4</StyledNavLink>
        <StepComponent Step="Step4" title="summary" />
      </div>
    </StyledSidebar>
  );
}

export default Sidebar;
