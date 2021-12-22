import styled from "styled-components";

export const Container = styled.div`
  background-image:linear-gradient(15deg,
      #E67E22,#d35400
  );
  width: 100%;
  height: 100%;

    display: flex;

    justify-content: center;
    
    .principal-container{
      width: 98%;
      background-color: #f0f2f5;

      margin-top:10px;
      box-shadow: 0 0 5px #272727;
      
      border-top-right-radius: 5px;
      border-top-left-radius: 5px;
      overflow-y: scroll; 

      display: flex;
      flex-direction: column;
      justify-content:center;
      align-items:center;
    }
    .Flex-row{
      display:flex;
      flex-direction: row;
    }
    .principal-container::-webkit-scrollbar{
     display: none
   }

   .input-search{
      width: 300px;
      height: 30px;
      border: none;
      border-radius: 5px;

      margin: 10px;
      padding:5px;
      box-shadow: 0 0 2px #272727
   }
   .input-search::placeholder{
     text-align:center;
   }
   input[type='submit']{
    height: 30px;
    margin-top: 10px;

    border:none;

    background-color: #1BBC9B;
    box-shadow:0 0 2px #1BBC9B;

    padding: 10px;

    color: #fff;

    border-radius: 2px;

    cursor: pointer;
   }
   .input-search:focus{
     outline:none
   }
   input[type='submit']:hover{
     transform: scale(1.1);
     box-shadow:0 0 2px #1BBC9B;
   }
   .Texto-Motivacional{
      width:100%;
      display:flex;
      justify-content:space-evenly;
      align-items: center;
      flex-wrap:wrap;
      padding: 10px;
   }
`;