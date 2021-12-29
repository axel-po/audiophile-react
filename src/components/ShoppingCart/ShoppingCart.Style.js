import styled from "styled-components";

export const ShoppingCartContainer = styled.div`
  position: ${({ position }) => (position ? position : "absolute")};
  top: 10.8rem;
  right: 5rem;
  width: 90%;
  width: ${({ width }) => width};
  max-width: 37.7rem;
  height: ${({ height }) => height};
  padding: 3rem;
  background-color: #fff;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 0.8rem;
  margin: ${({ margin }) => margin};

  h3 {
    color: #000;
    font-size: 1.8rem;
    font-weight: bold;
    letter-spacing: 1.29px;
    text-transform: uppercase;
  }

  @media screen and (max-width: 911px) {
    right: 2.4rem;
  }

  @media screen and (max-width: 555px) {
    left: 0;
    right: 0;
    width: 90%;
    max-width: none;
    margin: auto;
  }
`;

export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: baseline;
  row-gap: 8px;
`;

export const ButtonRemove = styled.button`
  color: #808080;
  text-decoration: underline;
  background: transparent;
  border: 0;
  cursor: pointer;
`;

export const CartWrapper = styled.div`
  margin: 3.2rem 0;
`;

export const CartContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2.4rem;

  & > div {
    display: flex;
  }
`;

export const CartImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f1f1f1;
  border-radius: 0.8rem;
  height: 6.4rem;
  min-width: 6.4rem;
  margin-right: 1.6rem;

  img {
    max-width: 4rem;
    max-height: 4rem;
  }
`;

export const CartInfos = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  h2 {
    font-size: 1.5rem;
    max-width: 9.5rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  p {
    font-size: 1.4rem;
    color: #808080;
    font-weight: bold;
  }
`;

export const CartQuantity = styled.div`
  input {
    width: 96px;
    height: 32px;
    background-color: #f1f1f1;
    border: 0;
    padding: 1.5rem;
    outline: 0;
  }
`;

export const TitleCart = styled.h4`
  color: #808080;
  font-weight: 500;
  text-transform: uppercase;
  font-size: 1.5rem;
  margin: ${({ margin }) => (margin ? margin : "0 0 .8rem")};
`;

export const Price = styled.span`
  color: ${({ color }) => (color ? color : "#000")};
  font-size: 1.8rem;
  font-weight: bold;
  justify-self: end;
  height: fit-content;
`;

export const TitleNotProduct = styled.h4`
  text-align: center;
  font-size: 1.5rem;
  margin: 3rem 0 0;
`;
