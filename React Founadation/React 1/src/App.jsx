import { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      todo: "going to gymgoing to gym",
      desc: "from 7-9",
      completed: false,
    },
    {
      id: 2,
      todo: "going for study",
      desc: "from 10-12",
      completed: false,
    }
   
  ]);
  function addtohandler(){
    setTodos([...todos,{
      id:1,
      todo:"going"
    }])
  }

  return (
    <>
      <h1>Todo APP </h1>

      <button onClick={addtohandler}>Add randome todo</button>

      {todos.map(function(todo){
         return <Todo id={todo.id} todo={todo.todo} desc={todo.desc} completed={todo.completed} ></Todo>

      })}
{/*    
    <Todo id='1' todo="going for study" desc="from 10-12" completed="false"></Todo>
    <Todo id='2' todo="going to gym" desc="from 7-9" completed="true"></Todo> */}
    </>
  );
}

function Todo(props){
  return <>
  <p>{props.id}</p>
  <p>{props.todo}</p>
  <p>{props.desc}</p>
  <p>{props.completed}</p>
  </>
}

export default App;
