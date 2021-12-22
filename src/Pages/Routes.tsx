import React from "react";

import { Routes, Route } from "react-router-dom";

import Login from "./Login/Index";
import Chek from "./CheckIn";
import LineChart from "../Componentes/components/Grafico";
import GraficoPage from './Grafico';
import FormFuncionario from "./FormFuncionarios";

export default function RotasNav(){
  return(
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/check" element={<Chek/>}/>
      <Route path="/Grafico" element={< GraficoPage/> }/>
      <Route path="/Ponto" element={<FormFuncionario/>}/>
    </Routes>
  )

}