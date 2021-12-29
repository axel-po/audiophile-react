import styled from "styled-components";

export const HeaderWrapper = styled.header`
  position: relative;
  background-color: #1c1c1c;
  height: 100vh;
  max-height: 72.9rem;
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  width: 90%;
  max-width: 110rem;
  height: 100%;
  margin: auto;

  @media screen and (min-width: 320px) and (max-width: 911px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`;

export const HeaderData = styled.div`
  width: 50%;
  z-index: 2;
  h1 {
    color: white;
    font-size: clamp(3.6rem, 6vw, 5.6rem);
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 0.2rem;
    margin: 2.4rem 0;
  }

  p {
    color: #c4c4c4;
    line-height: 2.5rem;
    font-weight: 500;
    margin-bottom: 4rem;
  }

  @media screen and (min-width: 320px) and (max-width: 911px) {
    width: 100%;
  }
`;

export const HeaderImg = styled.img`
  width: 50%;
  @media screen and (min-width: 320px) and (max-width: 911px) {
    position: absolute;
    z-index: 0;
    width: 90%;
    opacity: 0.2;
  }
`;
