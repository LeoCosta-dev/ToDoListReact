import React from "react";
import styled from "styled-components";

const FooterStyle = styled.footer`
    margin-top: auto;
`

const year = new Date().toISOString().split("-")[0]

export function Footer(){
    return(
    <FooterStyle>
        <p>Léo Costa © {year}</p>
    </FooterStyle>
    )
}