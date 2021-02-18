import {
  SWITCH_LANGUAGE,
  LOCALSTORAGE_LANGUAGE
} from '../constants/actionTypes'

const initialState = {
  language: 'en'
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SWITCH_LANGUAGE:
      return {
        language: action.language
      }
    case LOCALSTORAGE_LANGUAGE:
      return {
        language: action.language
      }
    default:
      return state
  }
}
