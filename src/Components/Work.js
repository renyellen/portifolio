import React from "react";
import * as S from "../Style/WorkStyle";
import Github from "../assets/github.png";

export default function Work() {
    return (
      <S.Container>
        <S.GlobalStyle />
        <S.Div>
          <S.H1>Principais Trabalhos</S.H1>
          <S.P>Códigos no GitHub </S.P>
        </S.Div>
           <S.BoxOne>
          <S.Img src={Github} alt="github"/>
          <S.Img src={Github} alt="github"/>
          <S.Img src={Github} alt="github"/>
                  </S.BoxOne>
        <S.Section>
          <S.A href="https://github.com/renyellen/RocketCoffee">
            <S.H2>RocketCoffe</S.H2>
          </S.A>
          </S.Section>
          <S.BoxTwo>
          <S.A href="https://github.com/renyellen/igreja-refidim">
            <S.H2>Site igreja Refidim</S.H2>
          </S.A></S.BoxTwo>
          <S.BoxThree>
          <S.A href="https://github.com/renyellen/">
            <S.H2>Logo mais outros projetos</S.H2>
          </S.A></S.BoxThree>
          </S.Container>
    );
  }