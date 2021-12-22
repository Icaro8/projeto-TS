import styled from "styled-components";

export const Container= styled.div`
    padding: 20px;
    display:flex;
    flex-direction: row;
    justify-content:center;
  
    input{
      margin-left: 10px;
    } 
    input[type=submit]{ 
      padding: 5px;
      
      background-color:#43a047;
      
      color:#eee;
      
      border:none;
      
      border-radius:5px;
      
      cursor:pointer; 
    }
    input[type=submit]:hover{
      transform: scale(1.1);
      
      transition: linear .3s;
      
      box-shadow: 0 0 5px #00e676
    }
    input[type=text]{
      height: 20px;
      width: 200px;
      
      border:none;
      
      
      box-shadow: 0 0 2px #272727 ; 
    }
    input[type=text]:focus{
      outline:none;
      
      text-align: center;
      
    }
`;