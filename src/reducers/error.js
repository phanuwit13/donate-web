import {
  ERROR_ADD_MESSAGE
} from '../constants/actionTypes'

const initialState = {}

export default (state = initialState, action) => {
  switch (action.type) {
    case ERROR_ADD_MESSAGE:
      return { message: action.payload }
    default:
      return state
  }
}
