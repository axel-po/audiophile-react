import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavWrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 7.6rem;
  background-color: ${(props) => (props.toggleBackground ? "#000" : "transparent")};
  transition: all 0.3s ease;
  z-index: 9999999;
`;

export const Logo = styled(Link)`
  color: white;
  font-weight: bold;
  text-decoration: none;
  font-size: 2.5rem;
`;

export const NavContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 90%;
  max-width: 110rem;
  margin: auto;
  border-bottom: ${({ toggleBackground, toggleNav }) =>
    toggleNav ? "0.1rem solid #979797" : "none" || toggleBackground ? "none" : "0.1rem solid #979797"};

  @media screen and (min-width: 320px) and (max-width: 911px) {
    position: relative;
    justify-content: center;
    padding: 0 2.4rem;
    width: 100%;
    margin: 0;
  }
`;

export const NavItems = styled.div`
  display: flex;
  align-items: center;
  @media screen and (min-width: 320px) and (max-width: 911px) {
    position: absolute;
    top: 7.6rem;
    left: 0;
    right: 0;
    display: ${({ toggleNav }) => (toggleNav ? "flex" : "none")};
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 3rem;
    background-color: #000;
  }
`;

export const NavLink = styled(Link)`
  font-size: 1.3rem;
  margin: 0 3.4rem;
  letter-spacing: 0.2rem;
  color: #fff;
  text-transform: uppercase;
  text-decoration: none;
  font-weight: bold;
  cursor: pointer;
  transition: color 0.2s ease;

  &:hover {
    color: #d87d4a;
  }

  @media screen and (min-width: 320px) and (max-width: 911px) {
    margin: 2rem 0;
  }
`;

export const Shop = styled.img`
  &:hover {
    cursor: pointer;
  }

  @media screen and (min-width: 320px) and (max-width: 911px) {
    position: absolute;
    right: 2.4rem;
  }
`;

export const ButtonMenu = styled.img`
  position: absolute;
  left: 2.4rem;
  width: 2.1rem;
  height: 2.1rem;
  cursor: pointer;
`;
