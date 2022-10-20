import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import * as S from "./Style/GlobalStyle.js";
import ODS from "./Components/Ods.js";
import Home from "./Components/Home.js";
import Certificados from "./Components/Certificados.js";
import Work from"./Components/Works.js";
<div>
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
          <S.Link href="/Certificados">
              <S.Li>Certificados</S.Li>
            </S.Link>
</S.Nav>
</S.Header>
             <Routes>
        <Route path="/ODS" element={<ODS />} />
        <Route path="/" element={<Home />} />
        <Route path="/Work" element={<Work />} />
        <Route path="=/Certificados" element={<Certificados/>}
      
  
    </Router>
    </div>