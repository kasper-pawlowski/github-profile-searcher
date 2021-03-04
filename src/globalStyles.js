import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
    
    *, *::before, *::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    html, body {
        max-width: 100vw;
        max-height: 100vh;
        overflow-x: hidden;
        font-family: 'Montserrat', sans-serif;
        overflow-x: hidden;
        background-color: #e4e7e7;
    }
    
    input {
        font-family: 'Montserrat', sans-serif;
    }

    button {
        font-family: 'Montserrat', sans-serif;
    }
`;
 
export default GlobalStyle;