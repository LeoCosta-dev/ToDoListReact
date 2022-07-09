import React from "react";
import styled from "styled-components";
import backgroundHeader from "../assets/images/bg-desktop-dark.jpg"
import { CreateTask } from "./CreateTask";
import { Title } from "./Title";

const HeaderStyle = styled.header`
    display: flex;
    flex-direction: column;
    background-image: url(${backgroundHeader});
    background-size: cover;
    width: 100%;
    height: 250px;
    align-items: center;
    justify-content: center;
`

export function Header({ tasks, setTasks}){
    return(
    <HeaderStyle>
        <Title/>
        <CreateTask tasks={tasks} setTasks={setTasks}/>
    </HeaderStyle>)
}