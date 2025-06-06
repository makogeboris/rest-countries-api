import styled from "styled-components";

const Form = styled.form`
  width: 100%;
`;

const SearchWrapper = styled.div`
  position: relative;
`;

const SearchInput = styled.input`
  width: 100%;
  padding-inline: 4.0625rem 1.875rem;
  padding-block: 0.6875rem;
  border: 1px solid transparent;
  background: var(--clr-elments);
  box-shadow: 0px 2px 9px rgba(0, 0, 0, 0.0532439);
  border-radius: 0.3125rem;
  color: var(--clr-input);

  &:focus-visible {
    outline: 2px solid var(--outline);
  }

  &::placeholder {
    font-weight: var(--fw-regular);
    font-size: var(--fs-xs);
    line-height: var(--lh-tight);
    color: var(--clr-input);
  }

  @media (min-width: 26.875rem) {
    padding-inline: 4.0625rem 1.875rem;
    padding-block: 0.9375rem;
    max-width: 30rem;

    &::placeholder {
      font-size: var(--fs-sm);
      line-height: var(--lh-relaxed);
    }
  }
`;

const SearchIcon = styled.svg`
  position: absolute;
  top: 50%;
  left: 2rem;
  transform: translateY(-50%);
  pointer-events: none;
`;

const VisuallyHidden = styled.label`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`;

function SearchForm({ searchQuery, setSearchQuery }) {
  return (
    <Form>
      <VisuallyHidden htmlFor="search">Search for a country</VisuallyHidden>
      <SearchWrapper>
        <SearchIcon
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.5 11.25H11.7L11.4 10.95C12.4 9.85 13 8.35 13 6.75C13 3.15 10.1 0.25 6.5 0.25C2.9 0.25 0 3.15 0 6.75C0 10.35 2.9 13.25 6.5 13.25C8.1 13.25 9.6 12.65 10.7 11.65L11 11.95V12.75L16 17.75L17.5 16.25L12.5 11.25ZM6.5 11.25C4 11.25 2 9.25 2 6.75C2 4.25 4 2.25 6.5 2.25C9 2.25 11 4.25 11 6.75C11 9.25 9 11.25 6.5 11.25Z"
            fill="var(--clr-input)"
          />
        </SearchIcon>
        <SearchInput
          type="search"
          id="search"
          name="search"
          placeholder="Search for a country..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </SearchWrapper>
    </Form>
  );
}

export default SearchForm;
