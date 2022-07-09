import React from "react";
import styled from "styled-components";

const TasksStyle = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    height:1000px;
    width: 40%;
    background-color: rgb(38, 30, 45);
    border-radius: 20px;
    padding: 10px;

    input, button{
        border: 0;
        color: rgb(238, 237, 238);;
        background-color: rgb(38, 30, 45);
        height: 5%;
        border-radius: 5px;
    }
    input{
        width: 70%;
    }
    button{
        width: 30%;
    }
`

export function Tasks(){
    return (
        <TasksStyle>
            <input type="text" name="newTask" id="newTask" />
            <button>Create</button>
        </TasksStyle>
    )
}