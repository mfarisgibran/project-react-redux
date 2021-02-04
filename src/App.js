import React from 'react'
import { Provider } from 'react-redux'

import reduxStore from './redux/store'

// import Counter from './components/Counter'
// import Content from './components/Content'
// import Todos from './components/Todos'
import Posts from './components/Posts'

export default function App() {
  return (
    <Provider store={reduxStore}>
      <div>
        {/* <Content /> */}
        {/* <Counter /> */}
        {/* <hr /> */}
        {/* <Todos /> */}
        <Posts />
      </div>
    </Provider>
  )
}
