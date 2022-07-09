import React, { useState } from "react";
import styled from "styled-components";


const CreateTaskStyle = styled.div`
    display: flex;
    justify-content: space-between;
    width: 40%;
    height: 20%;
    background-color: rgb(38, 30, 45);

    input, button{
    border: 0;
    color: rgb(238, 237, 238);
    background-color: rgb(38, 30, 45);
    height: 100%;
    }
    input{
        width: 68%;
        height: 97%;
    }
    button{
        width: 28%;
        margin-bottom: 0;
        cursor: pointer;
    }
    button:hover, input:hover{
        border: 1px solid rgb(238, 237, 238); 
    }
`

export function CreateTask({tasks, setTasks}){

    const[task, setTask] = useState()
  

    function teste(){
        
        const newTask = {
            id: tasks.length,
            task: task
        }
        setTasks([...tasks, newTask])
    }

    return (
        <CreateTaskStyle>
            <input 
                type="text" 
                name="newTask" 
                onChange={(e)=>setTask(e.target.value)}
                />
            <button onClick={teste}>Create Task</button>
        </CreateTaskStyle>
    )
}