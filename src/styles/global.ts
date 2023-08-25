import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:focus {
    outline: 0;
    box-shadow: 0 0 0 2x ${(props) => props.theme['green-500']};
}

body {
    background: ${(props) => props.theme['gray-900']};
    color: ${(props) => props.theme['gray-600']};
    -webkit-font-smoothing: antialiased;
}

body, input, textarea, button {
  font-family: 'Montserrat', sans-serif;
  font-size: 1rem;
}
`
