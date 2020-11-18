import { createGlobalStyle } from 'styled-components';
const GlobalStyles = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body{
    font-family: 'Montserrat', sans-serif;
}
h2{
    font-size: 3rem;
    font-family: "Abril Fatface";
    font-weight: lighter;
    color: #333;
}
h3{
    font-size: 1.3rem;
    color: #333;
    padding: 1.5rem 0;

}
p{
    font-size: 1.2rem;
    line-height: 200%;
    color: #696969;
}
`;

export default GlobalStyles;
