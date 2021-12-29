import styled from "styled-components";

export const ProductWrapper = styled.div`
  & > div:nth-child(even) > div:nth-child(1) {
    grid-column: 2;
    @media screen and (max-width: 1059px) {
      grid-column: 1;
    }
  }

  & > div:nth-child(even) > div:nth-child(2) {
    grid-column: 1;
    @media screen and (max-width: 1059px) {
      grid-column: 1;
    }
  }
`;

export const ProductContainer = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 8rem;
  margin: ${({ margin }) => margin};

  @media screen and (max-width: 1059px) {
    grid-template-columns: 1fr;
    row-gap: 3rem;
    margin: 6.4rem 0;
  }
`;

export const ProductImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 60px 0;
  background: #f1f1f1;
  border-radius: 0.8rem;
  grid-row: 1;
  @media screen and (max-width: 1060px) {
    /* max-height: 35.2rem; */
    margin: ${({ margin }) => margin};
  }
`;

export const ProductImg = styled.img`
  max-width: 70%;
  @media screen and (max-width: 500px) {
    width: 50%;
  }
`;

export const ProductData = styled.div`
  align-self: center;
  @media screen and (max-width: 500px) {
    text-align: center;
  }
`;
