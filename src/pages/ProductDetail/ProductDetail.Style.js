import styled from "styled-components";

export const Price = styled.p`
  color: black;
  font-weight: bold;
  font-size: 1.8rem;
  letter-spacing: 0.1rem;
`;

export const ContainerCart = styled.div`
  margin-top: 4.7rem;

  input {
    display: inline-block;
    background-color: #f1f1f1;
    border: 0;
    padding: 1.5rem;
    outline: 0;
    margin-right: 4rem;
  }

  @media screen and (max-width: 500px) {
    input {
      margin-right: 0;
      margin-bottom: 2rem;
    }
  }
`;

export const Infos = styled.span`
  display: none;
  background-color: #d4edda;
  padding: 1.3rem;
  margin-top: 2rem;
  border-radius: 8px;
`;

export const FeaturesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 12.5rem;

  div:nth-child(1) {
    max-width: 63.5rem;
  }

  div:nth-child(2) {
    width: 100%;
    height: 100%;
  }
`;

export const Title = styled.h2`
  font-size: 3.2rem;
  letter-spacing: 0.11rem;
  text-transform: uppercase;
  margin-bottom: 3.2rem;
`;

export const Kit = styled.li`
  color: #c4c4c4;
  line-height: 2.5rem;
  font-weight: 400;
  list-style-type: none;
  margin-bottom: 0.8rem;

  span {
    padding-right: 2.4rem;
  }
`;
