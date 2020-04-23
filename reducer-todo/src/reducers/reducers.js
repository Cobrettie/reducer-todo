export function reducer(state, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          item: action.item,
          completed: false,
          id: action.id
        }
      ]
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