import {
  CONSUMER_SUCCESS,
  CONSUMER_ID_SUCCESS
} from '../constants/actionTypes'

const initialState = []

export default (state = initialState, action) => {
  switch (action.type) {
    case CONSUMER_SUCCESS:
      return action.payload
    case CONSUMER_ID_SUCCESS:
      return action.payload
    default:
      return state
  }
}
