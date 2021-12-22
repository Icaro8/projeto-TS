import styled from "styled-components";

export const Container = styled.div`
  display:flex;
  flex-direction : column; 
  
  justify-content: space-around;

  background-image:linear-gradient(15deg,
      #E67E22,#d35400
    );
    width: 100vw;
    height:100vh;

  h1{
    font-family: 'Montserrat', sans-serif;
    padding: 10px;
  }
  .Background-color{
    background-color: #eee;
    height: 100%;
    width: 95%;
    margin:auto;

    overflow-y: scroll;
  }

  .Background-color::-webkit-scrollbar{
    display:none
      
    
  }
`;