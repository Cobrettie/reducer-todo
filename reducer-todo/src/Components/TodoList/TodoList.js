import React from 'react'

export default function TodoList(props) {
  console.log('TodoList component props', props)
  return (
    <div>
      <h2>Todo list component</h2>
      <div>
        {props.toDoList.map(item => {
          return (
            <div key={item.id}>
              <p>{item.item}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}