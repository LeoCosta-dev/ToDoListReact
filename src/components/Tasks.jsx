import React from "react";
import styled from "styled-components";

const TasksStyle = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    height:700px;
    width: 40%;
    background-color: rgb(38, 30, 45);
    border-radius: 20px;
    padding: 10px;
    margin-top: -20px;
    max-height: fit-content;


`

export function Tasks(){
    return (
        <TasksStyle>
            
        </TasksStyle>
    )
}