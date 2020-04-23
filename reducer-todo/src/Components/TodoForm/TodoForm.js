import React from 'react';

export default function TodoForm(props) {
  return(
    <div>
      <div>
        <form onSubmit={props.handleSubmit}>
          <label>
            <input type='text' name='description' onChange={props.handleChanges} />
          </label>
          <button type='submit'>Submit</button>
          <button onClick={props.clearCompleted}>Clear Completed Tasks</button>
        </form>
      </div>
    </div>
  )
}

