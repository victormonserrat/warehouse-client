import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

const GlobalStyle = createGlobalStyle`
  ${reset}

  :root {
    --color-black: #111111;
    --color-blue-light: #0058a3;
    --color-blue: #004f93;
    --color-blue-dark: #003e72;
    --color-grey-light: #dfdfdf;
    --color-grey: #929292;
    --color-grey-dark: #484848;
    --color-red: #e00751;
    --color-white: #ffffff;

    --font-primary: 'Noto Sans', 'Roboto', 'Open Sans', system-ui, sans-serif;
  }

  * {
    box-sizing: border-box;
  }

  body {
    color: ${({ theme }) => theme.colors.black};
    font-family: ${({ theme }) => theme.fonts.primary};
    font-size: ${({ theme }) => theme.sizes.medium};
  }

  button {
    cursor: pointer;
  }

  button, input {
    appearance: unset;
    background-color: unset;
    border: unset;
    color: unset;
    font: unset;
    margin: unset;
    outline: unset;
    padding: unset;

    :disabled {
      cursor: unset;
    }
  }
`

export default GlobalStyle
