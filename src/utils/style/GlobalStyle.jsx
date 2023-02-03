import { createGlobalStyle } from "styled-components"

const StyledGlobalStyle = createGlobalStyle`
*{
    color: #FF6060;
    font-family: Montserrat;
}
body{
    margin: 0;
}
`

function GlobalStyle(){
    return <StyledGlobalStyle />
}

export default GlobalStyle