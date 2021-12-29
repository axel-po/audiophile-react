import { createGlobalStyle } from "styled-components";
import { useLocation } from "react-router-dom";

const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-family: 'Manrope', sans-serif;
    background-color: ${({ bodyColor }) => bodyColor};
    /* background-color: #ddeefc;; */
    font-size: 1.5rem;
  }

  /* custom scroll bar */
  ::-webkit-scrollbar {
    width: 10px;
  }
  
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  ::-webkit-scrollbar-thumb {
    background: #888;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

export default GlobalStyle;
