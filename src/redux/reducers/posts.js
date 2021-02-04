const FETCH_POSTS_BEGIN = 'FETCH_POSTS_BEGN'
const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS'
const FETCH_POSTS_FAILED = 'FETCH_POSTS_FAILED'

const initialState = {
  isLoading: false,
  isError: false,
  data: [],
}

const posts = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS_BEGIN:
      return {
        ...state,
        isLoading: true,
      }
    case FETCH_POSTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload.data,
      }
    case FETCH_POSTS_FAILED:
      return {
        ...state,
        isLoading: false,
        isError: action.payload.isError,
      }

    default:
      return state
  }
}

export default posts
