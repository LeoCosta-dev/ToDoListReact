import React from "react";
import styled from "styled-components";
import remove from "../assets/images/icon-cross.svg"
import { Check } from "./Check";
import { Remove } from "./Remove";


const TaskElementStyle = styled.div`
    display: flex;
    border: solid 3px rgb(24, 18, 30);
    border-radius: 10px;
    justify-content: space-between;
    align-items: center;
    margin: 2px;
    width: 90%;
    height: 50px;
    padding: 10px;


`
export function TaskElment({newTask, removeTask}){
    const idTask = newTask.id
    return(
        <TaskElementStyle>
            <Check/>
            <p>{newTask.task}</p>
            <Remove removeTask={removeTask} task={idTask}/>
        </TaskElementStyle>
    )
}