import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import * as S from "./Style/GlobalStyle.js";
import ODS from "./Components/Ods.js";
import Home from "./Components/Home.js";
import Certificados from "./Components/Certificados.js";
import Works from"./Components/Works.js";
<Router>
      <S.GlobalStyle />
      <S.Header>
        <S.Nav>
          <S.Ul>
            <S.Link href="/">
              <S.Li>Home</S.Li>
            </S.Link>
            <S.Link href="/Work">
              <S.Li>Work</S.Li>
            </S.Link>
            <S.Link href="/ODS">
              <S.Li>ODS</S.Li>
            </S.Link>
          </S.Ul>
        </S.Nav>
      </S.Header>
      <Routes>
        <Route path="/ODS element={<ODS />} />
        <Route path="/" element={<Home />} />
        <Route path="/Work" element={<Work />} />]
      </Routes>
    </Router>
  );
}

