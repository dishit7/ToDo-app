import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import React from 'react'
import './App.css'
import CreateTodo from '../components/CreateTodo'
import Todos from '../components/Todos'
import CreateRandomTodo from '../components/RandomTask'
function App() {
 const [todos,setTodos]=useState([])
 fetch("http://localhost:3000/todos").then(async function(res){
  const json=await res.json();
  setTodos(json.todos)
 })
  return (
    <>
    <div>
      <div className='button-container'>
        <CreateTodo />
        <CreateRandomTodo />
      </div>
      <Todos todos={todos} />
      </div>
    </>
  )
}


export default App
