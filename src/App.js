import React, { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    "Take Python course",
    "Submit Freelance",
    "Do some sport"
  ]);
  const [input, setInput] = useState(''); 

  const addTodo = (event) => {
    //This will fire off when we click the button 
    setTodos([...todos, input])
  } 

  return (
    <div className="App">
      <h1>Hello World🔥! This Adibe here🚀 </h1>
      <input value={input} onChange={event => setInput(event.target.value)}/>
      <button onClick={addTodo}>Add Todo</button>
      <ul>
        {todos.map(todo => (
          <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
 