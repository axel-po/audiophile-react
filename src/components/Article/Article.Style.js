import styled from "styled-components";
import { Link } from "react-router-dom";

export const ArticleContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-height: 20.4rem;
  border-radius: 0.8rem;
  padding: 5rem;
  background-color: #f1f1f1;
  transition: transform 0.3s ease-in-out;

  h2 {
    font-size: 1.8rem;
    margin: 3.6rem 0 1.5rem;
    letter-spacing: 0.129rem;
    font-weight: 600;
    text-transform: uppercase;
  }
`;

export const ArticleImg = styled.img`
  position: absolute;
  top: -50%;
`;

export const ButtonCart = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #797979;
  letter-spacing: 0.1rem;
  font-weight: bold;
  font-size: 1.3rem;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.2s ease;
  text-decoration: none;
  
  img {
    padding-left: 1.3rem;
  }

  &:hover {
    color: #d87d4a;
  }
`;
