import React from "react";
import styled from "styled-components";
import sun from "../assets/images/icon-sun.svg"

const TitleStyle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 40%;
    height: 50%;
    cursor: default;

    h1{
        margin-bottom: 0;
    }
    img{
        cursor: pointer;
    }
`
export function Title(){
    return (
        <TitleStyle>
            <h1>T O D O</h1>
            <img src={sun} alt="sun-icon" />
        </TitleStyle>
    )
}