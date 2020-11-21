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
    font-size: 2rem;
    font-family: "Abril Fatface";
    font-weight: lighter;
    color: #333;
    @media (max-width: 700px) {
    font-size: 1.4rem;
    }
}
h3{
    font-size: 1.2rem;
    color: #252525;
    font-weight: 500;
    @media (max-width: 700px) {
    font-size: 1rem;
    }
}
p{
    font-size: 1.2rem;
    line-height: 130%;
    color: #696969;
}
span{
    font-size: 1.2rem;
    color: #696969;
    padding-left: 2rem;
}
`;

export default GlobalStyles;
