import axios from 'axios'

const API_URL = 'https://jsonplaceholder.typicode.com/posts'

const FETCH_POSTS_BEGIN = 'FETCH_POSTS_BEGIN'
const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS'
const FETCH_POSTS_FAILED = 'FETCH_POSTS_FAILED'

function fetchPostsBegin() {
  return {
    type: FETCH_POSTS_BEGIN,
  }
}

function fetchPostsSuccess(payload) {
  return {
    type: FETCH_POSTS_SUCCESS,
    payload,
  }
}

function fetchPostsFailed() {
  return {
    type: FETCH_POSTS_FAILED,
  }
}

export const fetchPosts = () => {
  return (dispatch) => {
    dispatch(fetchPostsBegin())

    axios
      .get(API_URL)
      .then((response) => {
        dispatch(fetchPostsSuccess(response))
      })
      .catch((error) => {
        dispatch(fetchPostsFailed())
      })
  }
}
