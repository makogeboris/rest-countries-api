import styled from "styled-components";
import Button from "../components/Button";

const StyledPageNotFound = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 7rem;
  padding-block: 1.625rem;
  padding-inline: var(--space-md);
  max-width: 74.8125rem;
  margin: 0 auto;
  min-height: 71vh;

  @media (min-width: 37.5rem) {
    padding-block: 3.375rem;
    padding-inline: var(--space-xl);
  }

  @media (min-width: 64rem) {
    padding-block: 6.0625rem;
  }
`;

const Title = styled.h1`
  font-weight: var(--fw-semi-bold);
  font-size: var(--fs-2xl);
  line-height: var(--lh-base);
  color: var(--clr-text);

  @media (min-width: 26.875rem) {
    font-size: 3rem;
  }
`;

const Description = styled.p`
  font-style: italic;
  font-weight: var(--fw-regular);
  font-size: var(--fs-xl);
  line-height: var(--lh-relaxed);
  color: var(--clr-text);
`;

const MainContent = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: var(--space-md);
`;

function PageNotFound() {
  return (
    <StyledPageNotFound>
      <MainContent>
        <div>
          <Title>404 Not Found</Title>

          <Description>
            Sorry, we can’t find the page you’re looking for
          </Description>
        </div>

        <Button />
      </MainContent>
    </StyledPageNotFound>
  );
}

export default PageNotFound;
