import React, { useState, useReducer } from 'react';
import { reducer, initialState } from './reducers/reducers';
import TodoForm from './Components/TodoForm/TodoForm';
import './App.css';
import TodoList from './Components/TodoList/TodoList';

function App() {
  const [toDoList, dispatch] = useReducer(reducer, initialState);
  const [newTodo, setNewTodo] = useState();
  let id = 0

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

  // const toggleCompleted = () => {
  //   dispatch({ type: 'COMPLETED' })
  // }

  return (
    <div className="App">
      <TodoForm 
        handleChanges={handleChanges}
        handleSubmit={handleSubmit}
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
