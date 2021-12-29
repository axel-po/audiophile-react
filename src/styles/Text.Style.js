import styled from "styled-components";

export const NewProductSpan = styled.span`
  font-size: 1.4rem;
  letter-spacing: 1rem;
  text-transform: uppercase;
  color: ${({ color }) => color};
`;

export const TitleProduct = styled.h2`
  letter-spacing: 0.4rem;
  font-size: clamp(2rem, 6vw, 4rem);
  color: #000;
  text-transform: uppercase;
`;

export const TextStyle = styled.p`
  color: #c4c4c4;
  line-height: 2.5rem;
  font-weight: 400;
  margin: ${({ margin }) => margin};
`;
