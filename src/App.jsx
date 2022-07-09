import React from 'react'
import './App.css'
import { Footer } from './components/footer'
import { Header } from './components/Header'
import { Tasks } from './components/Tasks'

function App() {

  return (
    <div className="App">
      <Header/>
      <Tasks/>
      <Footer/>
    </div>
  )
}

export default App
