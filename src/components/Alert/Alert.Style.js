import styled from "styled-components";

export const AlertWrapper = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const AlertContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 3rem 5rem;
  border-radius: 0.8rem;
  background-color: #fff;
  min-width: 45rem;
  min-height: 15rem;

  h6 {
    text-align: center;
    font-size: 2.2rem;
  }
`;

export const Button = styled.button`
  display: block;
  margin: 0 auto;
  background-color: #0d6efd;
  border-radius: 0.4rem;
  border: 0;
  color: white;
  padding: 0.5rem 2rem;
  font-size: 1.6rem;
  cursor: pointer;
`;
