import React from "react";
import * as S from "../Style/HomeStyle";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import Email from "../assets/email.png";
import github from "../assets/github.png";
import Profile from "../assets/renyellen com fundo.jpg";


export default function Home() {
  return (
    <S.Container>
      <S.GlobalStyle />
      <S.Div>
        <S.H1>Renyellen Machado</S.H1>
        <S.H2>Dev, Marketeira, Administradora e</S.H2>
      </S.Div>
      <main>
        <S.Img src={Element} alt="element" />
        <S.Imagi src={Wallpaper} alt="wall" />
      </main>
      <S.Box>
        <a href="">
          <S.Image src={github} />
        </a>
        </S.Box>
      <S.Divi>
        <S.Profile src={Profile} alt="Renyellen Machado" />
         </S.Divi>
    </S.Container>
  );
}