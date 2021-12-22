import React from "react";

import { Container } from "./styles";

import TextoMotivacional from '../../Componentes/components/Motivacao'
import ImgMotivacao from '../../Componentes/components/MotivationFav'

export default function Chek(){
  return(
    <Container>
      <div className="principal-container">
          <div className="Flex-row">
            <input type="search" name="" id="" placeholder="Digite a linha" className="input-search"/>
            <input type="submit" value="Procurar" />
          </div>
          <div className="Texto-Motivacional">
            <ImgMotivacao/>
            <TextoMotivacional/>
          </div>
      </div>
    </Container>
  )

}