import styled from "styled-components";
import Input from "../Ui/Input";
import Header from "../Ui/Header";

const StyledHome = styled.div``;
const StyledInput = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0px;
  label {
    color: var(--Marine-blue);
    font-family: "UbuntuR";
    font-size: 12px;
  }
`;
function Home() {
  return (
    <StyledHome>
      <Header
        title="Personal info"
        text="Please provide your name, email, and Phone number"
      />
      <form>
        <StyledInput>
          <label htmlFor="Name">Name</label>
          <Input typeOfInput="text" placeholder="e.g Stephen King" />
        </StyledInput>
        <StyledInput>
          <label htmlFor="Email Address">Email Address</label>
          <Input typeOfInput="email" placeholder="e.g StephenKing@lorem.com" />
        </StyledInput>
        <StyledInput>
          <label htmlFor="Phone Number">Phone Number</label>
          <Input typeOfInput="number" placeholder="e.g +1 234 567 890" />
        </StyledInput>
        <button>Enter</button>
      </form>
    </StyledHome>
  );
}

export default Home;
