import styled from "styled-components";

export const CheckoutWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 35rem;
  gap: 3rem;

  @media screen and (max-width: 1027px) {
    grid-template-columns: 1fr;
  }
`;

export const CheckoutContainer = styled.section`
  margin: 15.8rem 0 7rem;
  box-shadow: 0px -1px 8px rgb(0 0 0 / 25%);
  border-radius: 0.8rem;
  padding: 5rem;
  max-width: 730px;
  width: 100%;
  min-width: 55rem;
  background-color: #fff;
  @media screen and (max-width: 1027px) {
    max-width: none;
    margin: 15.8rem 0 0;
  }
`;

export const Title = styled.h2`
  font-size: 3.2rem;
  letter-spacing: 1.14px;
  text-transform: uppercase;
  margin-bottom: 4.1rem;
`;

export const SpanInfos = styled.span`
  display: block;
  color: #d87d4a;
  font-size: 1.3rem;
  font-weight: bold;
  text-transform: uppercase;
  margin: ${({ margin }) => (margin ? margin : "5.3rem 0 2rem;")};
`;

export const FormCheckout = styled.form`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 1.6rem;
  row-gap: 2.4rem;
`;

export const InputContainer = styled.div`
  grid-column: ${({ col }) => col};
`;

export const Label = styled.label`
  display: block;
  font-weight: bold;
  color: #000;
  font-size: 1.2rem;
  margin-bottom: 0.9rem;
`;

export const InputForm = styled.input`
  font-family: "Manrope", sans-serif;
  background-color: transparent;
  border: 1px solid #cfcfcf;
  padding: 1.5rem 2.5rem;
  font-size: 1.4rem;
  width: 100%;
  border-radius: 0.8rem;
  color: #000;
  font-weight: bold;
  transition: all 0.3s ease;

  &:focus {
    outline: 0;
    border-color: #d87d4a;
  }

  &::placeholder {
    font-weight: normal;
    color: #999999;
  }
`;
