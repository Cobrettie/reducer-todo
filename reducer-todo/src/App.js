import React, { useState, useReducer } from 'react';
import { reducer, initialState } from './reducers/reducers';
import TodoForm from './Components/TodoForm/TodoForm';
import './App.css';
import TodoList from './Components/TodoList/TodoList';

function App() {
  const [toDoList, dispatch] = useReducer(reducer, initialState);
  const [newTodo, setNewTodo] = useState();

  console.log('initialState', initialState);
  // console.log('dispatch', dispatch)
  console.log('toDoList', toDoList)

  const handleChanges = event => {
    setNewTodo(event.target.value)
  }

  const handleSubmit = event => {
    event.preventDefault()
    console.log('testing submit')
    dispatch({ type: 'ADD_TODO', payload: newTodo })
  }

  const clearCompleted = () => {
    dispatch({ type: 'CLEAR_COMPLETED' })
  }

  return (
    <div className="App">
      <h1>To Do Application Using React</h1>
      <TodoForm 
        handleChanges={handleChanges}
        handleSubmit={handleSubmit}
        clearCompleted={clearCompleted}
      />
      <TodoList 
        toDoList={toDoList} 
        // toggleCompleted={toggleCompleted}
        dispatch={dispatch}
      />
    </div>
  );
}

export default App;
