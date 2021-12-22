import React from "react";
import { useForm } from 'react-hook-form'



import {Container} from './styles';




export default function LoginItems(){
  
  // const {register, handleSubmit, formState: {errors}} = useForm()

  // const addUser = (dados) => console.log(dados)

  return( 
    <Container>
      <h2>Página de Login</h2>
      <main>
        
        <form action="" >
          <input type="text" name="" id="" placeholder="Nome" required/>
          <input type="text" name="" id="" placeholder="Numero"required/>
          <input type="submit" value="Enviar" className="btn"/> 
        </form>
      
      </main>
    </Container>
  )
}