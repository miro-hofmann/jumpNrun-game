import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
html{
    background-color: black;
    color: white;
}
  
html, body {
  height: 100%;
}
  
  body {
    margin: 0;
    display: flex;
    flex-direction: column;  
    justify-content: center;  
    align-items: center;
  }
`;
