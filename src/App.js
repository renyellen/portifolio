import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import * as S from "./Style/LinkStyle";
import Ods from "./Components/Ods.js";
import Home from "./Components/Home.js";
import Work from "./Components/Work.js";

  export default function App() {
    return (
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
            <S.Link href="/Ods">
              <S.Li>ODS</S.Li>
            </S.Link>
          </S.Ul>
        </S.Nav>
      </S.Header>
      <Routes>
        <Route path="/Ods" element={<Ods />} />
        <Route path="/" element={<Home />} />
        <Route path="/Work" element={<Work />} />
      </Routes>
    </Router>
  );
}