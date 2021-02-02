import React from 'react'
import { connect } from 'react-redux'

function Counter({ counter, increment, decrement }) {
  return (
    <div>
      <p>Clicked {counter} times</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    counter: state.counter,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    increment: () => dispatch({ type: 'INCREMENT' }),
    decrement: () => dispatch({ type: 'DECREMENT' }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
