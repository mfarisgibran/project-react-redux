import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import Counter from './components/Counter'
import Content from './components/Content'
import Todos from './components/Todos'

import rootReducer from './reducers/index'

const reduxStore = createStore(
  rootReducer,

  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default function App() {
  return (
    <Provider store={reduxStore}>
      <div>
        <Content />
        <Counter />
        <hr />
        <Todos />
      </div>
    </Provider>
  )
}
