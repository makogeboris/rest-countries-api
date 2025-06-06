import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  to {
    transform: rotate(1turn)
  }
`;

const LoaderWrap = styled.div`
  display: grid;
  place-content: center;
  gap: 1rem;
  width: 100%;
  margin-top: 7em;
`;

const StyledLoader = styled.div`
  margin: 0 auto;
  width: 8rem;
  aspect-ratio: 1;
  border-radius: 50%;
  background: radial-gradient(farthest-side, var(--loader) 94%, #0000) top/10px
      10px no-repeat,
    conic-gradient(#0000 30%, var(--loader));
  -webkit-mask: radial-gradient(farthest-side, #0000 calc(100% - 10px), #000 0);
  animation: ${rotate} 1.5s infinite linear;
`;

function Loader() {
  return (
    <LoaderWrap>
      <StyledLoader></StyledLoader>
    </LoaderWrap>
  );
}

export default Loader;
