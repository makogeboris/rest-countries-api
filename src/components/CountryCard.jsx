import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledCountryCard = styled.div`
  margin-block-start: var(--space-md);
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(264px, 1fr));
  gap: var(--space-lg);
  width: 100%;

  @media (min-width: 22.5rem) {
    padding-inline: var(--space-lg);
  }

  @media (min-width: 37.5rem) {
    margin-block-start: var(--space-xl);
    gap: 4.375rem;
  }

  @media (min-width: 64rem) {
    padding-inline: 0;
  }
`;

const Card = styled.div`
  background: var(--clr-elments);
  box-shadow: 0px 0px 7px 2px rgba(0, 0, 0, 0.1);
  border-radius: 5px;

  @media (min-width: 64rem) {
    max-width: 16.5rem;
  }
`;

const FlagWrapper = styled.div`
  width: 100%;

  @media (min-width: 37.5rem) {
    aspect-ratio: 2 / 1;
    overflow: hidden;
    border-radius: 5px 5px 0 0;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  @media (min-width: 64rem) {
    aspect-ratio: 3 / 2;
  }
`;

const Img = styled.img`
  border-radius: 5px 5px 0 0;
`;

const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--space-xs);
  padding-inline: var(--space-sm);
  padding-block: 1.375rem var(--space-xl);
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-xxs);
`;

const Country = styled.h2`
  font-weight: var(--fw-extra-bold);
  font-size: var(--fs-lg);
  line-height: var(--lh-relaxed);
  color: var(--clr-text);
`;

const Population = styled.p`
  font-weight: var(--fw-semi-bold);
  font-size: var(--fs-sm);
  line-height: 1.4;
  color: var(--clr-text);
`;

const Region = styled.p`
  font-weight: var(--fw-semi-bold);
  font-size: var(--fs-sm);
  line-height: 1.4;
  color: var(--clr-text);
`;

const Capital = styled.p`
  font-weight: var(--fw-semi-bold);
  font-size: var(--fs-sm);
  line-height: 1.4;
  color: var(--clr-text);
`;

const Span = styled.span`
  font-weight: var(--fw-light);
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  width: fit-content;
`;

function CountryCard({ countries }) {
  return (
    <StyledCountryCard>
      {countries.map((country) => (
        <StyledLink
          to={`/country/${country.alpha3Code}`}
          key={country.alpha3Code}
        >
          <Card>
            <FlagWrapper>
              <Img src={country.flags.svg} alt={country.name} />
            </FlagWrapper>
            <CardInfo>
              <Country>{country.name}</Country>

              <Details>
                <Population>
                  Population: <Span>{country.population.toLocaleString()}</Span>
                </Population>
                <Region>
                  Region: <Span>{country.region}</Span>
                </Region>
                <Capital>
                  Capital: <Span>{country.capital}</Span>
                </Capital>
              </Details>
            </CardInfo>
          </Card>
        </StyledLink>
      ))}
    </StyledCountryCard>
  );
}

export default CountryCard;
