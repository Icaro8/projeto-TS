import React from "react";

import {Container} from './styles'
import Grafico from "../../Componentes/components/Grafico";
import BotaoAdicionar from "../../Componentes/components/AdicionarLinha";

export default function GraficoPage(){
  return(
    <Container>
      <div className="Background-color">
        <h1>Painel de controle e Gráfico</h1>
        
        <div>
          <Grafico/>
        </div>
     </div>  
    </Container>
  );
};