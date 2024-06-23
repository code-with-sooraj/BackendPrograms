import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import axios from 'axios';

function App() {
  return (
    <div>
      <Todo id={3} />
    </div>
  );
}

function Todo({ id }) {
  const [todo, setTodo] = useState({ title: '', description: '' });

  useEffect(() => {
    const fetchTodo = async () => {
      try {
        const res = await axios.get(`https://sum-server.100xdevs.com/todos?id=${id}`);
        setTodo(res.data.todo);
      } catch (error) {
        console.error('Error fetching the todo:', error);
      }
    };

    fetchTodo();
  }, [id]);

  return (
    <div>
      <h1>{todo.title}</h1>
      <p>{todo.description}</p>
    </div>
  );
}

export default App;
