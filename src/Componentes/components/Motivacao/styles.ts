import styled from "styled-components";

export const Container= styled.div`
    width: 350px;
    box-shadow: 0 0 5px #272727;

    padding: 10px;

    border-radius: 10px;

    display:flex;

    align-items: center;

    font-family:'Montserrat', sans-serif;  

    &:hover{
        transform: scale(1.1);

        transition: .4s
    }
`;