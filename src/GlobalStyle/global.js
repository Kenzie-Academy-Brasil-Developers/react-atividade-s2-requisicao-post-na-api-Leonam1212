import {createGlobalStyle} from "styled-components"


const GlobalStyle = createGlobalStyle`
   body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-image: radial-gradient(circle at 120.29% 50%, #23313d 0, #23313d 50%, #23313d 100%);
    font-family: 'Bebas Neue', cursive;
    letter-spacing:2px;
   } 
   button{
    font-family: 'Bebas Neue', cursive;
    letter-spacing:2px;
   }
`

export default GlobalStyle