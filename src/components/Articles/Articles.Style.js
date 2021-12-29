import styled from "styled-components";

export const ArticlesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 11.9rem;
  margin: ${({ margin }) => margin};
`;
