import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterWrapper = styled.footer`
  position: absolute;
  left: 0;
  right: 0;
  background-color: #101010;
  padding: 50px;
`;

export const FooterContainer = styled.div`
  display: grid;
  grid-template-columns: max-content 1fr;
  grid-template-rows: 6rem max-content 5.5rem;

  width: 90%;
  max-width: 110rem;
  height: 100%;
  margin: auto;

  @media screen and (max-width: 1090px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(auto-fit, minmax(55px, min-content));
    row-gap: 30px;
  }
`;

export const Logo = styled(Link)`
  color: white;
  font-weight: bold;
  text-decoration: none;
  font-size: 2.5rem;
  @media screen and (max-width: 542px) {
    justify-self: center;
  }
`;

export const NavItems = styled.div`
  justify-self: flex-end;
  width: 100%;
  text-align: end;
  @media screen and (max-width: 1090px) {
    justify-self: flex-start;
    grid-row: 2;
    text-align: start;
  }

  @media screen and (max-width: 542px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  font-size: 1.3rem;
  margin-right: 2rem;
  font-weight: bold;
  letter-spacing: 0.2rem;
  text-transform: uppercase;

  &:hover {
    color: #d87d4a;
  }

  @media screen and (max-width: 542px) {
    margin-right: 0;
    margin-bottom: 1.6rem;
  }
`;

export const TextContainer = styled.div`
  max-width: 54rem;
  @media screen and (max-width: 542px) {
    text-align: center;
  }
`;

export const SocialMediaContainer = styled.div`
  display: flex;
  align-self: flex-end;
  justify-self: flex-end;
  @media screen and (max-width: 1090px) {
    justify-self: flex-start;
    align-self: flex-start;
  }
  @media screen and (max-width: 542px) {
    justify-self: center;
  }
`;

export const SocialMedia = styled.div`
  margin: 0 0.5rem;
  i {
    color: #fff;
    font-size: 3rem;
    &:hover {
      color: #d87d4a;
      cursor: pointer;
    }
  }
`;

export const CopyRight = styled.p`
  color: #c4c4c4;
  font-weight: bold;
  font-size: 1.3rem;
  align-self: flex-end;
  @media screen and (max-width: 542px) {
    justify-self: center;
  }
`;
