import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: var(--space-xxs);
  padding: var(--space-xxs) var(--space-sm);
  background: var(--clr-elments);
  box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.1);
  border-radius: 2px;
  border: 2px solid transparent;
  font-weight: var(--fw-light);
  font-size: var(--fs-sm);
  line-height: var(--lh-ultra);
  color: var(--clr-text);
  text-decoration: none;
  width: fit-content;
  transition: all ease 0.3s;

  &:focus-visible {
    outline: 2px solid var(--outline);
  }

  &:hover {
    border: 2px solid var(--outline);
  }

  @media (min-width: 26.875rem) {
    padding: var(--space-xxs) var(--space-md);
    font-size: var(--fs-md);
    line-height: var(--lh-loose);
  }
`;

function Button() {
  return (
    <StyledLink to="/">
      <svg
        width="22"
        height="14"
        viewBox="0 0 22 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.56991 0.370847L8.95692 1.69667L4.37977 6.07189L21.8562 6.07189L21.8562 7.92805L4.37977 7.92805L8.95692 12.3033L7.56991 13.6291L0.634821 6.99997L7.56991 0.370847Z"
          fill="var(--clr-text)"
        />
      </svg>
      Back
    </StyledLink>
  );
}

export default Button;
