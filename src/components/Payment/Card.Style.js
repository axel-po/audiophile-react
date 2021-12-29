import styled from "styled-components";
import CardCover from "./img/card-cover.jpeg";

export const CardStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 8px;
  padding: 2rem 1.5rem;
  max-width: 43rem;
  min-height: 27rem;
  max-height: 27rem;
  background: url(${CardCover}) center / cover;
  margin: auto;
  color: white;
  transform: translateY(13rem);
  
  & > div {
    display: flex;
    justify-content: space-between;
    font-family: "Source Code Pro", monospace;
  }

  .card--number {
    span {
      font-size: 2.7rem;
    }

    span:nth-child(5n + 1) {
      color: transparent;
    }
  }
`;

export const ChipStyle = styled.img`
  width: 6rem;
`;

export const VisaLogo = styled.img`
  width: 8rem;
  object-fit: cover;
`;
