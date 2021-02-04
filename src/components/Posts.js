import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../redux/actions/fetchPosts'

function Posts({ posts, isLoading, isError, fetchPosts }) {
  useEffect(() => {
    fetchPosts()
  }, [fetchPosts])
  return (
    <div>
      <h1>Posts</h1>
      {posts.map((post, index) => {
        return (
          <div key={index}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        )
      })}
    </div>
  )
}

function mapStateToProps(state) {
  return {
    posts: state.posts.data,
    isLoading: state.posts.isLoading,
    isError: state.posts.isError,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchPosts: () => dispatch(fetchPosts()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts)
