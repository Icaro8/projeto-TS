import styled from "styled-components";

export const Container = styled.div`
  

 
  display:flex;
  flex-direction: column;
  align-items:center;


  & h2{
    padding: 10px;
    text-align:center;
    font-family: 'Montserrat', sans-serif;
  }
  & input{
    display:block;

    padding: 5px;

    margin: 15px;

    width: 250px;
    height:35px;
    border-radius: 5px;
    
    box-shadow: 0 0 2px #272727;

    border: none;
  }
  & input::placeholder{
    text-align: center;
    color: #272727;
  }
  & input:focus{
    outline: none
  }
  .btn{
    width: 200px;
    height: 30px;

    border-radius: 10px;

    background-color: #1BBC9B;

    border:none;

    color: #eee;

    box-shadow: 0 0 2px #272727;
    
    cursor: pointer;
    margin: auto
  }
  .btn:hover{
    transform: scale(1.1)
  }
`;
