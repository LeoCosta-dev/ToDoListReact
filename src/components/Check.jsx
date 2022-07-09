import React, { useState } from "react";
import styled from "styled-components";
import check from "../assets/images/icon-check.svg"

const CheckStyle = styled.div`
    cursor: pointer;
    
    img{
        height: 40px;
        width: 40px;
        border-radius: 200px;
        background-color: ${({done})=>done?'#008000':'none'};
    }

`

export function Check(){
    const [done, setDone] = useState(false)

    return(
        <CheckStyle done={done}>
            <img src={check} alt="check" onClick={()=>setDone(done?false:true)}/>
        </CheckStyle>
    )
}