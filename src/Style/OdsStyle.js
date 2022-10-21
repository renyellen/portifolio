import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

*{
  margin:0;
  padding:0;
  box-sizing:border-box;
  list-style:none;
 
}
`;

export const nav = styled.nav`
display: flex;
align-items: center;
position: relative;
border: solid;
width: 100%;
height: 100vh;
display:none;

`;

