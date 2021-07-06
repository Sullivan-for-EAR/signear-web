import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    min-width: 0;
    box-sizing: inherit;
  }

  body {
    display: flex;
    min-height: 100vh;
    margin: 0;
    background-color: #F7F8FC;
  }

  #root {
    flex: 1;
  }

  svg, img {
    max-width: 100%;
    max-height: 100%;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button,
  input,
  optgroup,
  select,
  textarea {
    line-height: inherit;
    appearance: none;
    &:focus:not(:focus-visible) {
      outline: 0;
    }
  }

  .root {
    display: flex;
    flex-flow: column;
    min-height: 100vh;
  }

  button {
    padding: 0;
    border: 0 none;
    background-color: transparent;
    cursor: pointer;
  }
`;

export default GlobalStyle;
