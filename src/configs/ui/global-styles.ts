// GlobalStyles.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --font-primary: ${({ theme }) => theme.font.primary.light};
    --color-text: ${({ theme }) => theme.color.text?.light};
    --color-background: ${({ theme }) => theme.color.bg.light};
  }

  *,
  *::before,
  ::after {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  html {
	  font-size: 14px;
  }

  body {
    font-family: var(--font-primary);
    background-color: var(--color-background);
    color: var(--color-text);
    margin: 0;
  }

  /* Add more global styles as needed */
`;

export default GlobalStyles;
