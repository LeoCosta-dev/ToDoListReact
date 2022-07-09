import React from "react";
import styled from "styled-components";
import check from "../assets/images/icon-check.svg"

const CheckStyle = styled.div`
    cursor: pointer;
    
    img{
        height: 40px;
        width: 40px;
        border-radius: 200px;
    }

    img:hover{
        background-color: #008000;
    }
`

export function Check(){
    return(
        <CheckStyle>
            <img src={check} alt="check" id="check"/>
        </CheckStyle>
    )
}