import styled from "styled-components";

export const Container = styled.div`
 
  display: flex;
  flex-direction: column;

  justify-content:center;
  align-items:center;

  text-align: left;
  margin:30px auto;
  .input{
    display:block;
    width: 350px;
    height: 30px;
    margin: 5px;
    padding: 15px;

    border-radius: 5px;

    outline:none;
    border:none;

    background-color: #eee;

    text-align:center;

    font-family: 'Montserrat', sans-serif;

    box-shadow: 0 0 2px #272727;
  }
  .btn-Show{
    width: 250px;
    height: 30px;


    margin: 15px;


    border:none;
    border-radius: 5px;

    color: #fff;
      
    font-family: 'Montserrat', sans-serif;
    
    background:linear-gradient(20deg,#388e3c,#1b5e20) ;

    box-shadow: 0 0 5px #00c853;

    cursor : pointer
  }
  

  .btn-adc{
    width: 200px;
    height: 30px;
    margin: auto;
    padding: 0;

    font-family: 'Montserrat', sans-serif;

    border:none;

    text-transform:uppercase;

    color: #272727;

    cursor: pointer;
  }
  .btn-adc:hover{
    transform:scale(1.1);
    transition: linear .3s;
    
  }
  .Form-adc{
    text-align: center;
    font-family: 'Montserrat', sans-serif;


    & h3::after{
      content:"";

      width: 150px;
      height: 5px;

      background-color: #272727;

      display: block;

      margin:5px auto;

      border-radius: 10px;  
    }
  }
  input::placeholder{
    text-align:center;
    font-family: 'Montserrat', sans-serif;
  }
  .Escolha{
   
    height:25px; 
    padding: 10px;
  }
  .Radio-alinhamento{
    display:flex;
    flex-direction:column;
    justify-content:space-around;
    align-items:center;
  }
  .Row{
    width: 350px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    margin: 5px;

    border-bottom: 1px solid #272727;
  }
`;