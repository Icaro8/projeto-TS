import React from "react";

import {BackgroundColor,Component,Scroll} from './style';
import FormAdc from '../../Componentes/components/AdicionarLinha'
import GoodJob from "../../Componentes/components/GodJob";
import Select from "../../Componentes/components/Selecao";

export default function FormFuncionario(){
  return(
    <BackgroundColor>
      
      <Scroll>
        <div className="text-aling">
          <h1 >Cadastro de Linha</h1>
        </div>
        <div>
          <Select/>
        </div>
        <Component>
         
            <GoodJob/>
        </Component>
      </Scroll>
      
    </BackgroundColor>
  )
};
//http://localhost:3000/?