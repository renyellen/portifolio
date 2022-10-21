import React from "react";
import * as S from "../Style/HomeStyle";
import instagram from "../assets/instagram.png";
import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png"
import facebook from "../assets/facebook.png"
import profile from "../assets/renyellen sem fundo.png"


export default function Home() {
  return (
    <S.Container>
       <S.Divi>
        <S.Profile src={profile} />
      </S.Divi>
      <S.GlobalStyle />
      <S.Div>
        <S.H1>Renyellen Machado</S.H1>
       <S.H2>Prazer, sou estudante de Front-end, moradora de SP.
        Esse é meu portifólio para o final do curso Vai na Web.
       </S.H2>
      </S.Div>
        <S.Box>
        <a href="https://github.com/renyellen">
          <S.Image src={github} />
        </a>
        <a href="https://www.instagram.com/renyellen_/">
          <S.Image src={instagram} />
        </a>
        <a href="https://www.linkedin.com/in/renyellen-santos-a5344833/">
          <S.Image src={linkedin} />
        </a>
        <a href="https://www.facebook.com/renyellen.santos">
          <S.Image src={facebook} />
          </a>
          </S.Box>
         </S.Container>
  );
}
