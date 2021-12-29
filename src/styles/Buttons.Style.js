import styled from "styled-components";
import { Link } from "react-router-dom";

export const Button = styled(Link)`
  display: inline-block;
  padding: 1.5rem 3rem;
  letter-spacing: 0.1rem;
  outline: 0;
  border: 0;
  color: white;
  text-transform: uppercase;
  font-weight: bold;
  text-decoration: none;
  background-color: ${({ bg }) => (bg ? bg : "#d87d4a")};
  text-align: center;
  cursor: pointer;
  transition: background 0.2s ease;
  width: ${({ width }) => width};
  margin: ${({ margin }) => margin};
  &:hover {
    background-color: ${({ bg }) => (bg ? "#4C4C4C" : "#fbaf85")};
  }
`;

export const ButtonBack = styled(Link)`
  position: absolute;
  top: ${({ top }) => (top ? top : "-7.6rem")};
  color: #333;
  text-decoration: none;
  font-size: medium;
  cursor: pointer;

  &:hover {
    color: #d87d4a;
  }

  @media screen and (max-width: 1060px) {
    top: ${({ top }) => (top ? top : "5rem")};
  }
`;
