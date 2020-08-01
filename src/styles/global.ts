import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    font-family: Roboto, sans-serif;
    -webkit-font-smoothing: antialiased;

    background: ${props => props.theme.colors.background}
  }

  button {
    cursor: pointer;
  }
`;
