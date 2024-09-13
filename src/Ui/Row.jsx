import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
function Row({ children }) {
  return <StyledDiv>{children}</StyledDiv>;
}

export default Row;
