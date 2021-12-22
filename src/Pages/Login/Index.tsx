import styled from "styled-components";
import { Container } from "./styles";

import GlobalStyles from "../../GlobalStyles/GlobalStyles";
import LoginPage from "../../Componentes/Login";
export default function Login(){
  return(
    <Container>
    <GlobalStyles/>
    <LoginPage/>
  </Container>
  )

}