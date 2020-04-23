import React from 'react';
import '../../App.css';

export default function TodoList(props) {
  // console.log('TodoList component props', props)
  return (
    <div>
      <h2>Todo list component</h2>
      <div>
        {props.toDoList.map(task => {
          return (
            <div 
              key={task.id}
              className={task.completed ? 'completed-task task' : 'task'}
              onClick={() => props.dispatch({ type: 'COMPLETED', payload: task.id })}
            >
              <p>{task.item}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}