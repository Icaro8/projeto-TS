import React,{useState} from "react";
import {Container} from "./styled";

export default function Select( ){
  const [name,setName] = useState('')
  const [senha,setSenha] = useState('')

  function handleSubmit() {
    console.log(name, senha)

  }
  return(
    <Container>
      <main>
         <form action="">         
          <input type="text" name="name"  minLength={5} maxLength={30}  onChange={e => setName(e.target.value)}/>
          <input type="password"  name="senha" onChange={e => setSenha(e.target.value)}/>
          <button onClick={handleSubmit}>Entrar</button>
        </form>
      </main>
    </Container>
  )
}