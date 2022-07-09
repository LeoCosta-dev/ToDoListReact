import React from "react";
import styled from "styled-components";
import remove from "../assets/images/icon-cross.svg"

const CheckStyle = styled.div`
    cursor: pointer;
    
    img{
        height: 40px;
        width: 40px;
        border-radius: 200px;
    }

    img:hover{
        background-color: #920d0d;
    }
`

export function Remove(){
    return(
        <CheckStyle>
            <img src={remove} alt="check"/>
        </CheckStyle>
    )
}