export function reducer(state, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          item: action.payload,
          completed: false,
          id: new Date()
        }
      ]
    case 'COMPLETED':
      return state.map(item => {
        if (item.id === action.payload) {
          return {
            ...item,
            completed: !item.completed
          }
        }
        return item
      })


    default:
      return 'default'
  }
}

export const initialState = [
  {
    item: 'test item 1',
    completed: false,
    id: 392182
  },
  {
    item: 'test item 2',
    completed: false,
    id: 392379
  }
]