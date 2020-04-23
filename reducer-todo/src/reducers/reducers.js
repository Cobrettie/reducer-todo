export function reducer(state, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          task: action.payload, // was item
          completed: false,
          id: new Date()
        }
      ]
    case 'COMPLETED':
      return state.map(task => {
        if (task.id === action.payload) {
          return {
            ...task,
            completed: !task.completed
          }
        }
        return task
      })
    case 'CLEAR_COMPLETED':
      return state.filter(task => !task.completed)


    default:
      return 'default'
  }
}

export const initialState = [
  {
    task: 'test item 1',
    completed: false,
    id: 392182
  },
  {
    task: 'test item 2',
    completed: false,
    id: 392379
  }
]