import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'
import axios from "axios"

function App() {
  const [todos,setTodos] = useState([]);
  useEffect(() => {
    axios.get("https://sum-server.100xdevs.com/todos")
    .then(function(res){
      setTodos(res.data.todos);
    });
  }, []);
  return (
    <>
      {todos.map(todo=><Todo title={todo.title} description={todo.description}/>)}
    </>
  )
}

function Todo ({title,description}){
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  )
}

export default App
