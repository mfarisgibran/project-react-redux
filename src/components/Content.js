import React from 'react'
import { connect } from 'react-redux'

function Content(props) {
  return <h1>We have done it {props.counter} times</h1>
}

function mapStateToProps(state) {
  return {
    counter: state.counter,
  }
}

export default connect(mapStateToProps)(Content)
