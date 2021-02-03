import React, { useState } from 'react'
import { connect } from 'react-redux'

function Todos(props) {
  const [text, setText] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    props.add(text)
  }

  function handleChangeText(event) {
    setText(event.target.value)
  }

  return (
    <div>
      <h1>Todos</h1>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChangeText}
          type="text"
          placeholder="Activity to do"
        />
        <input type="submit" value="Add todo" />
      </form>
      <ul>
        {props.items.map((item) => {
          return <li key={item.id}>{item.text}</li>
        })}
      </ul>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    items: state.todos.items,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    add: (text) =>
      dispatch({
        type: 'ADD_TODO',
        payload: {
          text: text,
        },
      }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Todos)
