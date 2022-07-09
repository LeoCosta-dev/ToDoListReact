import React from 'react'
import { useState } from "react";
import './App.css'
import { Footer } from './components/footer'
import { Header } from './components/Header'
import { Tasks } from './components/Tasks'

function App() {

  const [tasks, setTasks] = useState([])

  return (
    <div className="App">
      <Header tasks={tasks} setTasks={setTasks}/>
      <Tasks/>
      <Footer/>
    </div>
  )
}

export default App
