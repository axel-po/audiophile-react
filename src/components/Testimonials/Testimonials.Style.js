import styled from "styled-components";

export const TestimonialsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap-reverse;
  margin: 16rem 0;

  div:nth-child(1) {
    max-width: 44.5rem;
    padding-right: 2rem;
    @media screen and (max-width: 1100px) {
      width: 100%;
      max-width: none;
      padding-right: 0;
      text-align: center;
      margin-top: 4rem;
    }
  }
`;

export const TestimonialsImg = styled.div`
  img {
    border-radius: 0.8rem;
    width: 100%;
  }

  @media screen and (max-width: 1100px) {
    width: 100%;

    img {
      max-height: 39rem;
      object-fit: cover;
      object-position: center;
    }
  }
`;
