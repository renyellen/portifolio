import styled, { createGlobalStyle, keyframes } from "styled-components";


export const GlobalStyle = createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
  }
`;

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  height: 100vh;
  @media only screen and (min-width: 360px) and (max-width: 800px) {
    align-items: center;
    display: flex;
    justify-content: center;
    position: relative;
    width: 100%;
    height: 100vh;
  }
`;
const Animar = keyframes`
from{
    transform: translateX(100px) 
   }
   to{
     transform: translateY(0px)
   }
`;
export const Div = styled.div`
  left: 33%;
  top: 30vh;
  position: absolute;
  display: flex;
  width: 50%;
  height: 50vh;
  align-items: center;
  justify-content: center;
  @media only screen and (min-width: 360px) and (max-width: 800px) {
    position: absolute;
    display: flex;
    width: 80%;
    height: 20vh;
    left: 10vw;
    top: 36vh;
    align-items: center;
    justify-content: center;
  }
`;
export const H1 = styled.h1`
  font-family: "Staatliches", cursive;
  letter-spacing: 0.2vw;
  display: inline-block;
  align-items: center;
  justify-content: center;
  width: 90%;
  font-size: 50px;
  height: 30vh;
  animation: ${Animar} 2s ease-in 2s;
  margin-top:10vh;

  @media only screen and (min-width: 360px) and (max-width: 800px) {
    font-family: "Staatliches", cursive;
    letter-spacing: 0.3vw;
    align-items: center;
    margin-bottom: 35vh;
    width: 100%;
    font-size: 32px;
    height: 30vh;
    animation: ${Animar} 3s ease-in 2s;
  }
`;
export const H2 = styled.h2`
  position: absolute;
  top: 30vh;
  font-size:15px;
  font-family: "Edu VIC WA NT Beginner", cursive;
  animation: ${Animar} 2s ease-out 2s;
  @media only screen and (min-width: 360px) and (max-width: 800px) {
    display: none;
    
  }
`;
export const Divi = styled.div`
  position: relative;
  align-items: center;
  justify-content: flex-start;
  margin-top: 25vh;
  margin-right: 58vw;
  height: 75vh;
  display: flex;

  @media only screen and (min-width: 360px) and (max-width: 800px) {
    position: absolute;
    display: flex;
    bottom: 20vh;
    left: 1%;
    height: 45vh;
    display: flex;
    width: 100%;
    background-repeat: no-repeat;
    background-size: contain;
    background-position-x: center;
  }
`;
export const Profile = styled.img`
  width: 98%;
  height: 74vh;
  animation: ${Animar} 1s ease-in 1s;

  @media only screen and (min-width: 360px) and (max-width: 800px) {
    display: none;
    width: 98%;
  height: 74vh;
  animation: ${Animar} 1s ease-in 1s;
  }
`;
export const Box = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 20%;
  height: 8vh;
  top: 70vh;
  left: 48%;

  @media only screen and (min-width: 360px) and (max-width: 800px) {
    display: flex;
    align-items: center;
    flex-direction: wrap;
    width: 70%;
    height: 10vh;
    top: 83vh;
    left: 16.8%;
  }
`;

export const Image = styled.img`
  display: flex;
  width: 100%;
  animation: ${Animar} 2s linear 2s;
  height: 7vh;

  @media only screen and (min-width: 360px) and (max-width: 800px) {
    width: 88%;
    animation: ${Animar} 2s linear 2s;
  }
`;

export const Img = styled.img`
  position: absolute;
  width: 21%;
  right: 20vw;
  height: 32.5vh;
  z-index: 3;
  top: 10vh;
  right: 13vw;
  @media only screen and (min-width: 360px) and (max-width: 800px) {
    display: none;
  }
`;

export const Imagi = styled.img`
  position: absolute;
  bottom: 30vh;
  width: 42%;
  right: 0.1vw;
  height: 70vh;
  @media only screen and (min-width: 360px) and (max-width: 800px) {
    position: absolute;
    width: 42%;
    right: 0.1vw;
    height: 40vh;
    top: 0vh;
  }
`;