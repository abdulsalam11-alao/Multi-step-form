import { Link } from "react-router-dom";
import styled from "styled-components";

const PageNotFoundWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;
  font-family: "Ubuntu", sans-serif;
`;

const NotFoundTitle = styled.h1`
  font-size: 72px;
  color: var(--Marine-blue);
  margin-bottom: 20px;
`;

const NotFoundMessage = styled.p`
  font-size: 20px;
  color: var(--Marine-blue);
  margin-bottom: 40px;
`;

const HomeLink = styled(Link)`
  font-size: 18px;
  padding: 10px 20px;
  background-color: var(--Light-blue);
  color: var(--White);
  text-decoration: none;
  border-radius: 5px;
  &:hover {
    background-color: var(--Marine-blue);
  }
`;

function PageNotFound() {
  return (
    <PageNotFoundWrapper>
      <NotFoundTitle>404</NotFoundTitle>
      <NotFoundMessage>
        Oops! The page you are looking for does not exist.
      </NotFoundMessage>
      <HomeLink to="/">Go Back Home</HomeLink>
    </PageNotFoundWrapper>
  );
}

export default PageNotFound;
