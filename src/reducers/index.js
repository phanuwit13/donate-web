import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { routerReducer } from 'react-router-redux'
import auth from './auth'
import flashMessages from './flashMessages'
import languages from './languages'
import error from './error'

const initialState = {
  consumers: {}
}

export default combineReducers({
  form: formReducer,
  routing: routerReducer,
  auth,
  flashMessages,
  languages,
  error
})
