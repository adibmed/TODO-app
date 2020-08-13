import React, { useState } from "react"
import "./App.css"
import { Button, FormControl, InputLabel, Input } from "@material-ui/core"
import Todo from './Todo'

function App() {
  const [todos, setTodos] = useState([
    "Take Python course",
    "Submit Freelance",
    "Do some sport",
  ]);
  const [input, setInput] = useState("");
  const addTodo = (event) => {
    //This will fire off when we click the button
    event.preventDefault();
    setTodos([...todos, input]);
    setInput("");
  };

  return (
    <div className="App">
      <h1>Hello World🔥! This Adibe here🚀 </h1>
    <form>
      <FormControl>
        <InputLabel>Write a Todo</InputLabel>
        <Input
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
      </FormControl>
      <Button
        disabled={!input}
        variant="contained"
        color="primary"
        type="submit"
        onClick={addTodo}
      >
        Add Todo
      </Button>
      </form>
      <ul>
        {todos.map((todo) => (
         <Todo todo={todo}/>
        ))}
      </ul>
    </div>
  );
}

export default App

 