import React from "react";
import styled from "styled-components";
import { TaskElment } from "./TaskElement";

const TasksStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    min-height:700px;
    width: 40%;
    background-color: rgb(38, 30, 45);
    border-radius: 20px;
    padding: 10px;
    margin-top: -20px;
    height: 70%;

    @media (max-width: 800px){
        width: 90%;
    }
`

export function Tasks({tasks, removeTask}){
    return (
        <TasksStyle>
            {tasks.map((item)=>(
                <TaskElment newTask={item} removeTask={removeTask}/>
            ))}
        </TasksStyle>
    )
}