import styled from "styled-components";
// Adjust the path to where you saved the image

// Styled components
const ThankYouContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: 100px;
`;

const ConfirmImage = styled.img`
  width: 80px;
  height: 80px;
  margin-bottom: 20px;
`;

const Title = styled.h1`
  color: #004080;
  margin-bottom: 10px;
`;

const Text = styled.p`
  color: #666;
  font-size: 16px;
  max-width: 400px;
`;

const EmailLink = styled.a`
  color: #004080;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;

function ThankYou() {
  return (
    <ThankYouContainer>
      <ConfirmImage src="./icon-thank-you.svg" alt="Confirmation" />
      <Title>Thank you!</Title>
      <Text>
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at{" "}
        <EmailLink href="mailto:support@loremgaming.com">
          support@loremgaming.com
        </EmailLink>
        .
      </Text>
    </ThankYouContainer>
  );
}

export default ThankYou;
