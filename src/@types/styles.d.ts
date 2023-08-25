import 'styled-components'
import { defaultTheme } from '../styles/themes/default'

type ThemeType = typeof defaultTheme

// intelisense will be able to show my theme types from this file.
declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
