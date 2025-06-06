import styled from "styled-components";
import Select from "react-select";

const Wrapper = styled.div`
  width: 100%;
  max-width: 12.5rem;
  align-self: flex-start;

  .custom-select__control {
    background-color: var(--clr-elments);
    border: none;
    box-shadow: var(--shadow);
    border-radius: 0.3125rem;
    padding: 0.375rem;
    font-size: 0.875rem;
    color: var(--clr-text);
    cursor: pointer;
    transition: box-shadow 0.2s ease;
  }

  .custom-select__control--is-focused {
    box-shadow: 0 0 0 2px var(--outline);
  }

  .custom-select__single-value,
  .custom-select__placeholder {
    color: var(--clr-input);
    font-weight: var(--fw-regular);
    font-size: var(--fs-xs);
    line-height: var(--lh-tight);
  }

  .custom-select__menu {
    background-color: var(--clr-elments);
    box-shadow: var(--shadow);
    border-radius: 0.3125rem;
    padding: 0.375rem;
  }

  .custom-select__option {
    cursor: pointer;
    color: var(--clr-input);
    font-weight: var(--fw-regular);
    font-size: var(--fs-xs);
    line-height: var(--lh-tight);
  }

  .custom-select__option--is-focused {
    background-color: var(--select-hover);
  }

  .custom-select__option--is-selected {
    background-color: var(--select-selected);
  }

  @media (min-width: 26.875rem) {
    .custom-select__control {
      padding: 0.625rem;

      font-size: var(--fs-sm);
      line-height: var(--lh-relaxed);
    }

    .custom-select__single-value,
    .custom-select__placeholder {
      font-size: var(--fs-sm);
      line-height: var(--lh-relaxed);
    }

    .custom-select__menu {
      padding: 0.625rem;
    }
  }
`;
function Filter({ selectedRegion, setSelectedRegion }) {
  const options = [
    { value: "africa", label: "Africa" },
    { value: "americas", label: "America" },
    { value: "asia", label: "Asia" },
    { value: "europe", label: "Europe" },
    { value: "oceania", label: "Oceania" },
  ];

  return (
    <Wrapper>
      <Select
        aria-label="Filter by region"
        options={options}
        placeholder="Filter by Region"
        classNamePrefix="custom-select"
        isSearchable={false}
        value={options.find((opt) => opt.value === selectedRegion) || null}
        onChange={(selected) =>
          setSelectedRegion(selected ? selected.value : null)
        }
      />
    </Wrapper>
  );
}

export default Filter;
