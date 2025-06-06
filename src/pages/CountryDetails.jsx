import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import countriesData from "../data/countries.json";
import styled from "styled-components";
import Button from "../components/Button";
import Loader from "../components/Loader";

const StyledCountryDetails = styled.main`
  padding-inline: var(--space-sm);
  padding-block: var(--space-lg) 3.4375rem;

  @media (min-width: 37.5rem) {
    padding-inline: var(--space-lg);
    padding-block: var(--space-lg) var(--space-3xl);
  }

  @media (min-width: 64rem) {
    padding-block: var(--space-5xl) 21.4375rem;
  }
`;

const Wrapper = styled.div`
  max-width: 87.875rem;
  margin: 0 auto;
`;

const CountryInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-block-start: var(--space-3xl);
  gap: var(--space-xl);

  @media (min-width: 37.5rem) {
    margin-block-start: var(--space-2xl);
    gap: var(--space-2xl);
  }

  @media (min-width: 64rem) {
    flex-direction: row;
    justify-content: space-between;
    margin-block-start: var(--space-5xl);
  }
`;

const CountryDetailsWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  @media (min-width: 37.5rem) {
    gap: var(--space-sm);
  }

  @media (min-width: 64rem) {
    justify-content: center;
    gap: 0;
  }
`;

const Img = styled.img`
  border-radius: 10px;

  @media (min-width: 64rem) {
    max-width: 35rem;
  }
`;

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--space-md);
  margin-block-start: var(--space-xs);

  @media (min-width: 37.5rem) {
    flex-direction: row;
    justify-content: space-between;
    gap: 0.75rem;
    margin-block-start: var(--space-sm);
  }

  @media (min-width: 64rem) {
    margin-block-start: var(--space-sm);
  }
`;

const Country = styled.h2`
  font-weight: var(--fw-extra-bold);
  font-size: var(--fs-xl);
  line-height: var(--lh-base);
  color: var(--clr-text);

  @media (min-width: 26.875rem) {
    font-size: var(--fs-2xl);
  }
`;

const Name = styled.p`
  font-weight: var(--fw-semi-bold);
  font-size: var(--fs-sm);
  line-height: var(--lh-ultra);
  color: var(--clr-text);

  @media (min-width: 26.875rem) {
    font-size: var(--fs-md);
    line-height: var(--lh-loose);
  }
`;

const Population = styled.p`
  font-weight: var(--fw-semi-bold);
  font-size: var(--fs-sm);
  line-height: var(--lh-ultra);
  color: var(--clr-text);

  @media (min-width: 26.875rem) {
    font-size: var(--fs-md);
    line-height: var(--lh-loose);
  }
`;

const Region = styled.p`
  font-weight: var(--fw-semi-bold);
  font-size: var(--fs-sm);
  line-height: var(--lh-ultra);
  color: var(--clr-text);

  @media (min-width: 26.875rem) {
    font-size: var(--fs-md);
    line-height: var(--lh-loose);
  }
`;

const SubRegion = styled.p`
  font-weight: var(--fw-semi-bold);
  font-size: var(--fs-sm);
  line-height: var(--lh-ultra);
  color: var(--clr-text);

  @media (min-width: 26.875rem) {
    font-size: var(--fs-md);
    line-height: var(--lh-loose);
  }
`;

const Capital = styled.p`
  font-weight: var(--fw-semi-bold);
  font-size: var(--fs-sm);
  line-height: var(--lh-ultra);
  color: var(--clr-text);

  @media (min-width: 26.875rem) {
    font-size: var(--fs-md);
    line-height: var(--lh-loose);
  }
`;

const Domain = styled.p`
  font-weight: var(--fw-semi-bold);
  font-size: var(--fs-sm);
  line-height: var(--lh-ultra);
  color: var(--clr-text);

  @media (min-width: 26.875rem) {
    font-size: var(--fs-md);
    line-height: var(--lh-loose);
  }
`;

const Currencies = styled.p`
  font-weight: var(--fw-semi-bold);
  font-size: var(--fs-sm);
  line-height: var(--lh-ultra);
  color: var(--clr-text);

  @media (min-width: 26.875rem) {
    font-size: var(--fs-md);
    line-height: var(--lh-loose);
  }
`;

const Languages = styled.p`
  font-weight: var(--fw-semi-bold);
  font-size: var(--fs-sm);
  line-height: var(--lh-ultra);
  color: var(--clr-text);

  @media (min-width: 26.875rem) {
    font-size: var(--fs-md);
    line-height: var(--lh-loose);
  }
`;

const Span = styled.span`
  font-weight: 300;
`;

const BorderContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: var(--space-xs);
  margin-block-start: var(--space-md);

  @media (min-width: 37.5rem) {
    flex-direction: row;
    align-items: center;
    margin-block-start: 1.625rem;
  }

  @media (min-width: 64rem) {
    margin-block-start: var(--space-3xl);
  }
`;

const BorderText = styled.p`
  font-weight: var(--fw-semi-bold);
  font-size: var(--fs-md);
  line-height: var(--lh-relaxed);
  color: var(--clr-text);
`;

const NoBoderText = styled.p`
  font-weight: var(--fw-light);
  font-size: var(--fs-md);
  line-height: var(--lh-relaxed);
  color: var(--clr-text);
`;

const BordersWrap = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: var(--space-xs);
`;

const BorderCountries = styled(Link)`
  background: var(--clr-elments);
  box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.104931);
  border-radius: 2px;
  padding: 0.125rem 1.625rem;
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
`;

const ErrorWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-block-start: var(--space-xl);
  min-height: 30vh;
`;

const ErrorMessage = styled.p`
  font-style: italic;
  font-weight: var(--fw-semi-bold);
  font-size: var(--fs-xl);
  line-height: var(--lh-base);
  text-align: center;
  color: var(--clr-text);

  @media (min-width: 26.875rem) {
    font-size: var(--fs-2xl);
  }
`;

function CountryDetails() {
  const { code } = useParams();
  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      setLoading(true);

      const selected = countriesData.find(
        (c) => c.alpha3Code.toLowerCase() === code.toLowerCase()
      );

      if (!selected) {
        throw new Error("Country not found");
      }

      setCountry(selected);
      setError(null);
    } catch (err) {
      console.error("Error loading country:", err);
      setError("Failed to load country data. Please try again.");
      setCountry(null);
    } finally {
      setLoading(false);
    }
  }, [code]);

  return (
    <StyledCountryDetails>
      <Wrapper>
        <Button />

        {loading ? (
          <Loader />
        ) : error ? (
          <ErrorWrap>
            <ErrorMessage>{error}</ErrorMessage>
          </ErrorWrap>
        ) : (
          <CountryInfo>
            <Img src={country.flags.svg} alt={country.name} />

            <CountryDetailsWrap>
              <Country>{country.name}</Country>

              <DetailsContainer>
                <div>
                  <Name>
                    Native Name: <Span>{country.nativeName || "N/A"}</Span>
                  </Name>
                  <Population>
                    Population:{" "}
                    <Span>{country.population.toLocaleString()}</Span>
                  </Population>
                  <Region>
                    Sub Region: <Span>{country.subregion || "N/A"}</Span>
                  </Region>
                  <SubRegion>
                    Sub Region: <Span>{country.subregion}</Span>
                  </SubRegion>
                  <Capital>
                    Capital: <Span>{country.capital || "N/A"}</Span>
                  </Capital>
                </div>

                <div>
                  <Domain>
                    Top Level Domain:{" "}
                    <Span>{country.topLevelDomain?.join(", ")}</Span>
                  </Domain>
                  <Currencies>
                    Currencies:{" "}
                    <Span>
                      {country.currencies?.length > 0
                        ? country.currencies
                            .map((curr) => `${curr.name} (${curr.symbol})`)
                            .join(", ")
                        : "N/A"}
                    </Span>
                  </Currencies>
                  <Languages>
                    Languages:{" "}
                    <Span>
                      {country.languages?.length > 0
                        ? country.languages.map((lang) => lang.name).join(", ")
                        : "N/A"}
                    </Span>
                  </Languages>
                </div>
              </DetailsContainer>

              <BorderContainer>
                <BorderText>Border Countries:</BorderText>

                <BordersWrap>
                  {country.borders && country.borders.length > 0 ? (
                    country.borders.map((borderCode) => {
                      const borderCountry = countriesData.find(
                        (c) => c.alpha3Code === borderCode
                      );
                      return (
                        <BorderCountries
                          to={`/country/${borderCode}`}
                          key={borderCode}
                        >
                          {borderCountry?.name || borderCode}
                        </BorderCountries>
                      );
                    })
                  ) : (
                    <NoBoderText>No border countries</NoBoderText>
                  )}
                </BordersWrap>
              </BorderContainer>
            </CountryDetailsWrap>
          </CountryInfo>
        )}
      </Wrapper>
    </StyledCountryDetails>
  );
}

export default CountryDetails;
