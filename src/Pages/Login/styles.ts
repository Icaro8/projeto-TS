import styled from "styled-components";

export const Container = styled.div`
  background-image:linear-gradient(15deg,
      #E67E22,#d35400
  );
  width: 100%;
  height: 100%;

  display:flex;

  justify-content:center;
  align-items:center;
  flex-wrap:wrap;
  
  @media screen and (max-width:400px){
      flex-direction:column;
  }
`;