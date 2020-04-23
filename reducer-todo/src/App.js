import React, { useState, useReducer } from 'react';
import { reducer, initialState } from './reducers/reducers';
import TodoForm from './Components/Todo/TodoForm';
import './App.css';

function App() {
  const [toDoArray, dispatch] = useReducer(reducer, initialState);
  const [newTodo, setNewTodo] = useState();

  console.log('initialState', initialState);
  // console.log('dispatch', dispatch)
  console.log('toDoArray', toDoArray)

  const handleChanges = event => {
    setNewTodo(event.target.value)
  }

  const handleSubmit = event => {
    event.preventDefault()
    console.log('testing submit')
    dispatch({type: 'ADD_TODO', item: newTodo, id: Date.now() })
  }

  return (
    <div className="App">
      <TodoForm 
        handleChanges={handleChanges}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

export default App;
