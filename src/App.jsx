import React from 'react'
import { useState } from "react";
import './App.css'
import { Footer } from './components/footer'
import { Header } from './components/Header'
import { Tasks } from './components/Tasks'

function App() {

  const [tasks, setTasks] = useState([])

  const removeTask = (key)=>{
    const newList = tasks.filter(item=>item.id!=key)
    setTasks(newList)
    }

  return (
    <div className="App">
      <Header tasks={tasks} setTasks={setTasks}/>
      <Tasks tasks={tasks} removeTask={removeTask}/>
      <Footer/>
    </div>
  )
}

export default App
