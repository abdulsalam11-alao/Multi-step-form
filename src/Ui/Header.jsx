import styled from "styled-components";
import propTypes from "prop-types";

const StyledHeader = styled.header`
  margin-bottom: 20px;
  font-family: "Ubuntu";
  h1 {
    margin-bottom: 10px;
  }
  p {
    font-size: 16px;
    color: var(--Cool-gray);
    font-family: "UbuntuR";
  }
`;
{
  /* <h1></h1>
<p></p> */
}
function Header({ title, text }) {
  return (
    <StyledHeader>
      <h1>{title}</h1>
      <p>{text}</p>
    </StyledHeader>
  );
}
Header.propTypes = {
  title: propTypes.string,
  text: propTypes.string,
};
export default Header;
