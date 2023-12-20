import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;  
    font-family: 'Plus Jakarta Sans', sans-serif;
}

img {
  user-drag: none;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
  -ms-user-select: none;
    }

  ::-moz-selection {
  /* Code for Firefox */
  color: white;
  background-color:  ${(props) => props.theme['yellow-500']};
}

::selection {
  color: ${(props) => props.theme['dark-900']};
  background-color: ${(props) => props.theme['yellow-500']};
}

:focus {
    outline: 0;
    box-shadow: 0 0 0 2x ${(props) => props.theme['green-500']};
}

body {
    background: ${(props) => props.theme['gray-100']};
    color: ${(props) => props.theme['dark-900']};
    -webkit-font-smoothing: antialiased;
    font-size: 0.85rem;
  color: ${(props) => props.theme['dark-900']};
  font-weight: 600;
}

body, input, textarea, button {
  font-size: 0.85rem;
  color: ${(props) => props.theme['dark-900']};
  font-weight: 600;
}


::-webkit-scrollbar {
  width: 20px;
}

::-webkit-scrollbar-track {
  background-color: transparent;
}

::-webkit-scrollbar-thumb {
  background-color: #d6dee1;
  border-radius: 20px;
  border: 6px solid transparent;
  background-clip: content-box;
}

::-webkit-scrollbar-thumb:hover {
  background-color:  ${(props) => props.theme['gray-500']};
}
`
