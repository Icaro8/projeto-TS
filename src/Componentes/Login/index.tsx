import React from "react";

import {Container} from './styles'
import LoginItems from '../components/LoginItems'
import FavIcon from '../components/FavIcon'

function LoginPage(){
  return(
    <Container>
      <FavIcon/>
      <LoginItems />
    </Container>
  )
};


export default LoginPage;