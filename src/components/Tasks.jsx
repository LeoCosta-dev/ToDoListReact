import React from "react";
import styled from "styled-components";
import { taskList } from "../utils/constants";
import { TaskElment } from "./TaskElement";

const TasksStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height:700px;
    width: 40%;
    background-color: rgb(38, 30, 45);
    border-radius: 20px;
    padding: 10px;
    margin-top: -20px;
    max-height: fit-content;


`

export function Tasks(){
    const listRender = taskList.reverse()
    return (
        <TasksStyle>
            {listRender.map((item, index)=>(
                <TaskElment key={index} newTask={item}/>
            ))}
        </TasksStyle>
    )
}