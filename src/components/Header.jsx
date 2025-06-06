import styled from "styled-components";
import ThemeToggle from "./ThemeToggle";

const StyledHeader = styled.header`
  padding-inline: var(--space-xs);
  padding-block: 1.875rem;
  background: var(--clr-elments);

  @media (min-width: 37.5rem) {
    padding-inline: var(--space-lg);
  }

  @media (min-width: 64rem) {
    padding-block: var(--space-sm);
  }
`;

const Wrapper = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Title = styled.h1`
  font-weight: var(--fw-extra-bold);
  font-size: var(--fs-sm);
  line-height: var(--lh-relaxed);
  color: var(--clr-text);

  @media (min-width: 26.875rem) {
    font-size: var(--fs-xl);
    line-height: var(--lh-base);
  }
`;

function Header() {
  return (
    <StyledHeader>
      <Wrapper>
        <Title>Where in the world?</Title>

        <ThemeToggle />
      </Wrapper>
    </StyledHeader>
  );
}

export default Header;
