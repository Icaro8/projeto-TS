import styled from "styled-components";

export const BackgroundColor=styled.div`
  width: 100%;
  height:100%;

  display:flex;
  justify-content:center;

  background-image:linear-gradient(15deg,
      #E67E22,#d35400
    );
`;

export const Scroll= styled.div`
  width: 98%;
  height: 98%;
  
  background-color: #fff;

  margin-top: 12px;

  overflow-y:scroll;

  text-align:center;
  h1{
    text-transform: uppercase;
  }
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;

  &::-webkit-scrollbar{
    display:none
  }
`;

export const Component= styled.div`
  display:flex;
  justify-content: center;
  align-items: center;

  .text-aling{
    text-align:center;
  }

  
`;