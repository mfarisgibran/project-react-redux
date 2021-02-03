const initialState = {
  nextId: 1,
  items: [],
}

const todos = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        nextId: state.nextId + 1,
        items: [
          ...state.items,
          {
            id: state.nextId,
            text: action.payload.text,
            isCompleted: false,
          },
        ],
      }
    default:
      return state
  }
}

export default todos
