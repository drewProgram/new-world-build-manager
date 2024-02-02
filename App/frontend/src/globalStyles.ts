import { createGlobalStyle } from 'styled-components'


const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: "Roboto",sans-serif;
  }

  html {
    overflow-x: hidden;
  }
 
  body {
    overflow-x: hidden;
    position: relative;
    font-size: 16px;
    line-height: 1.4;
    box-sizing: border-box;
    outline: 0;
    background-color: #515160;
  }
`

export { GlobalStyle }