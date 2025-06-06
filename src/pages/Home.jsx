import { useEffect, useState } from "react";
import countriesData from "../data/countries.json";
import styled from "styled-components";
import SearchForm from "../components/SearchForm";
import Filter from "../components/Filter";
import CountryCard from "../components/CountryCard";
import Loader from "../components/Loader";

const StyledHome = styled.main`
  padding-inline: var(--space-xs);
  padding-block: var(--space-sm) 4.0625rem;

  @media (min-width: 37.5rem) {
    padding-inline: var(--space-lg);
    padding-block: var(--space-xl) 3.625rem;
  }

  @media (min-width: 64rem) {
    padding-block-end: var(--space-xl);
  }
`;

const Wrapper = styled.div`
  margin: 0 auto;
`;

const SearchFilterWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-lg);
  width: 100%;

  @media (min-width: 37.5rem) {
    flex-direction: row;
    justify-content: space-between;
    gap: var(--space-xxs);
  }
`;

const ErrorWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-block-start: var(--space-xl);
  min-height: 30vh;

  @media (min-width: 37.5rem) {
    min-height: 50vh;
  }
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

function Home() {
  const [countries, setCountries] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRegion, setSelectedRegion] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      if (!Array.isArray(countriesData)) {
        throw new Error("Invalid countries data format.");
      }

      const sorted = [...countriesData].sort((a, b) =>
        a.name.localeCompare(b.name)
      );
      setCountries(sorted);
    } catch (err) {
      console.error("Failed to load countries from JSON:", err);
      setError("Failed to load countries. Please try again.");
    } finally {
      setLoading(false);
    }
  }, []);

  function matchesSearch(country, query) {
    const lowerQuery = query.toLowerCase();

    const fields = [
      country.name,
      ...(country.altSpellings || []),
      country.alpha2Code,
      country.alpha3Code,
    ];

    return fields.some((field) => field.toLowerCase().includes(lowerQuery));
  }

  const filteredCountries = countries.filter((country) => {
    const matchesRegion = selectedRegion
      ? country.region.toLowerCase() === selectedRegion
      : true;

    const matchesQuery = matchesSearch(country, searchQuery);

    return matchesRegion && matchesQuery;
  });

  return (
    <StyledHome>
      <Wrapper>
        <SearchFilterWrap>
          <SearchForm
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
          <Filter
            selectedRegion={selectedRegion}
            setSelectedRegion={setSelectedRegion}
          />
        </SearchFilterWrap>

        {loading ? (
          <Loader />
        ) : error ? (
          <ErrorWrap>
            <ErrorMessage>{error}</ErrorMessage>
          </ErrorWrap>
        ) : (
          <CountryCard countries={filteredCountries} />
        )}
      </Wrapper>
    </StyledHome>
  );
}

export default Home;
