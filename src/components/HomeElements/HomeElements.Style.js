import styled from "styled-components";
import Circle from "./img/pattern-circles.svg";
import img2 from "./img/image-speaker-zx7.jpg";
import img3 from "./img/image-earphones-yx1.jpg";

export const HomeElementsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: max-content repeat(2, 32rem);
  row-gap: 4.8rem;
  column-gap: 3rem;

  & > div {
    border-radius: 0.8rem;
  }

  @media screen and (max-width: 667px) {
    grid-template-columns: 1fr;
    grid-template-rows: max-content 320px 200px 200px;
  }
`;

export const ElementOne = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 3rem;
  background-color: #d87d4a;
  background-image: url(${Circle});
  background-repeat: no-repeat;
  background-position: bottom left;
  grid-column: 1/-1;
  min-height: 54.6rem;
  padding: 0 7rem;
  overflow: hidden;

  img {
    align-self: flex-end;
    justify-items: center;
    max-width: 41rem;
    max-height: 100%;
    transform: translateY(1rem);
  }

  & > div {
    align-self: center;
    padding: 0 8rem;
  }

  @media screen and (max-width: 1048px) {
    grid-template-columns: 1fr;
    row-gap: 6rem;
    padding: 7rem 0;
    img {
      width: 200px;
      justify-self: center;
    }

    & > div {
      justify-self: center;
      text-align: center;
    }
  }

  @media screen and (max-width: 667px) {
    & > div {
      padding: 0 2rem;
    }
  }
`;

export const Title = styled.h2`
  color: ${({ color }) => color};
  font-weight: bold;
  font-size: ${({ size }) => (size ? size : "2.8rem")};
  letter-spacing: 0.2rem;
  text-transform: uppercase;
  margin-bottom: ${({ mb }) => mb};

  
`;

export const Description = styled.p`
  line-height: 2.5rem;
  font-weight: 200;
  margin: 2.4rem 0 4rem;
  color: #fff;
`;

export const ElementTwo = styled.div`
  position: relative;
  grid-column: 1/-1;
  background: url(${img2});

  & > div {
    position: absolute;
    top: 50%;
    left: 9.5rem;
    transform: translateY(-50%);
  }
`;

export const ElementThree = styled.div`
  background: url(${img3}) center / cover;
`;

export const ElementFour = styled.div`
  position: relative;
  background-color: #f1f1f1;

  & > div {
    position: absolute;
    top: 50%;
    left: 9.5rem;
    transform: translateY(-50%);
  }

  @media screen and (max-width: 855px) {
    & > div {
      left: 0;
      padding-left: 4rem;
    }
  }
`;
