import styled from "styled-components";

export const CardPayementWrapper = styled.section`
  margin: 0 0 15rem;
`;

export const CardPayementContainer = styled.div`
  margin: 0rem auto;
  padding: 18rem 3rem 3rem;
  max-width: 57rem;
  background-color: white;
  box-shadow: 0 30px 60px 0 rgb(90 116 148 / 40%);
  border-radius: 8px;

  .form-control {
    margin-bottom: 2rem;

    &--select {
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
    }

    &--cvv {
      margin-bottom: 0;
    }
  }

  .form-control label {
    font-size: 1.4rem;
    margin-bottom: 0.5rem;
    font-weight: 500;
    color: #1a3b5d;
    width: 100%;
    display: block;
    user-select: none;
  }

  input,
  select {
    width: 100%;
    height: 50px;
    border-radius: 5px;
    box-shadow: none;
    border: 1px solid #ced6e0;
    transition: all 0.3s ease-in-out;
    font-size: 1.8rem;
    padding: 5px 15px;
    background: none;
    color: #1a3b5d;
    font-family: "Source Sans Pro", sans-serif;

    &:hover,
    &:focus {
      border-color: #3d9cff;
    }

    &:focus {
      box-shadow: 0px 10px 20px -13px rgb(32 56 117 / 35%);
      outline: 0;
    }
  }
`;

export const Button = styled.button`
  border: 0;
  width: 100%;
  height: 55px;
  background: #2364d2;
  border: none;
  border-radius: 5px;
  font-size: 22px;
  font-weight: 500;
  font-family: "Source Sans Pro", sans-serif;
  box-shadow: 3px 10px 20px 0px rgb(35 100 210 / 30%);
  color: #fff;
  margin-top: 20px;
  cursor: pointer;

  &:focus {
    outline: 0;
  }
`;
