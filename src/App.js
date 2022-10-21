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
      
      <Routes>
        <Route path="/Ods" element={<Ods />} />
        <Route path="/" element={<Home />} />
        <Route path="/Work" element={<Work />} />
      </Routes>
    </Router>
  );
}