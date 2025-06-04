import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }

  body {
    background: #0c0c0c;
    color: #ffffff;
    overflow-x: hidden;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul {
    list-style: none;
  }

  section {
    padding: 80px 0;
  }

  .container {
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
  }

  button {
    cursor: pointer;
    border: none;
    outline: none;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
  }
`;

export default GlobalStyles;