import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import Counter from './components/Counter'
import Content from './components/Content'

const initialState = {
  counter: 0,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        counter: state.counter + 1,
      }
    case 'DECREMENT':
      return {
        counter: state.counter - 1,
      }
    default:
      return state
  }
}

const reduxStore = createStore(
  reducer,

  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default function App() {
  return (
    <Provider store={reduxStore}>
      <div>
        <Content />
        <Counter />
      </div>
    </Provider>
  )
}
