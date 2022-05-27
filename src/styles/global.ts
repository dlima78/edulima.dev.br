import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
  font-size: 62.5%;

  @media only screen and (max-width: 75em) {
    // width < 1200?
    font-size: 56.25%; //1 rem = 9px, 9/16 = 50%
  }

  @media only screen and (max-width: 56.25em) {
    // width < 900?
    font-size: 50%; //1 rem = 8px, 8/16 = 50%
  }

  @media only screen and (min-width: 112.5em) {
    font-size: 75%; //1rem = 12, 12/16
  }
}

html, body, #__next {
  height: 100%;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  position: relative;
  box-sizing: border-box;
  background-color: var(--color-background);
  color: var(--color-text);
}

a {
  text-decoration: none;
}

li {
  list-style: none;
}

.container-grid {
  display: grid;
  grid-template-rows: 7rem 1fr 7rem;
  grid-template-columns: repeat(auto-fit, 1fr);
}
`
export default GlobalStyles
