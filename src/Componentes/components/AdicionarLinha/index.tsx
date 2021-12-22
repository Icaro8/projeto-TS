import React,{useState} from "react";

import {Container} from './style'

export default function BotaoAdicionar(){
  const [Show, setShow] = useState(false);

  function showForm(){
    setShow(!Show);
  }

  return(
    <Container>
      {Show && <FormAdc />}
        <button onClick={showForm} className="btn-Show">{Show ? 'Ocultar':'Adicionar linha'}</button>
    </Container>
  )
};

function FormAdc(){
  return(
    <div className="Form-adc">
        
      <h3>Cadastro de linha</h3>
      <main >
        <form action="">
          <label htmlFor="Linha">Digite o numero da linha :</label>
          <input type="text"name="" id="Linha" placeholder="Numero da Linha" className="input"/>
          <label htmlFor="Nome-Linha">Linha :</label>
          <input type="text" name="" id="Nome-Linha" placeholder="Linha" className="input"/>
          <label htmlFor="Cliente">Cliente :</label>
          <input type="text" name="" id="Cliente" placeholder="Cliente" className="input"/>
          <label htmlFor="Maquina">Maquina :</label>
          <input type="text" name="" id="" placeholder="Maquina"className="input"/>
          <label htmlFor="Operador">Operador :</label>
          <input type="text" name="" id="Operador" placeholder="Operador" className="input"/>
          <label htmlFor="Numero-Pecas">Número de peças :</label>
          <input type="text" name="" id="Numero-Pecas" placeholder="Digite o numero de peças" className="input"/>
           <div className="Radio-alinhamento"> 
            <div className="Row">
              <label htmlFor="Desenho">Desenho :</label>
              <input type="checkbox" name="" id="Desenho" className="Escolha" />
            </div>
            <div className="Row">
              <label htmlFor="Filtro">Filtro está ligado :</label>
              <input type="checkbox" id="Filtro" className="Escolha"/>
            </div> 
            <div className="Row">
              <label htmlFor="Folha">Possui folha de operação :</label>
              <input type="checkbox" id="Folha" className="Escolha"/>
            </div> 
            <div className="Row">
              <label htmlFor="Folha">Pressão de acoordo c/especificação :</label>
              <input type="checkbox" id="Folha" className="Escolha"/>
            </div>
            <div className="Row">
              <label htmlFor="Plano">Plano disponível na metrologia :</label>
              <input type="checkbox" id="Plano" className="Escolha"/>
            </div>
            <div className="Row">
              <label htmlFor="Plano-Controle">Tem plano de controle no teste :</label>
              <input type="checkbox" id="Plano-Controle" className="Escolha"/>
            </div>

          </div>

          <input type="submit" value="Adicionar" className="btn-adc input"/>
        </form>
      </main>
    </div>
  )
}