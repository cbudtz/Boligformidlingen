import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Todo, todoStore} from "./stores/TodoStore";
import {observer} from "mobx-react-lite";

const App = observer(() => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
          {todoStore.todoList.map((todo: Todo) =>{
            return <div>{todo.task} </div>;
          })}
          Finished:
          {todoStore.finishedTodoList.map((todo: Todo) =>{
            return <div>{todo.task} </div>;
          })}

          <button onClick={()=>todoStore.todoList.push({task:"Test2",isComplete:false})}>add task</button>

      </header>
    </div>
  );
})

export default App;
