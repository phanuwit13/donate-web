import { Redirect } from '../until'
import {
  ERROR_ADD_MESSAGE
} from '../constants/actionTypes'
import LANG from '../i18n/locals/Errors'
import { RORTAL_REDIRECT_ERROR_MESSAGES } from '../constants/endpoints'

export const addErrorMessage = (message = LANG.EN.ERRORS.DEFAULT, subMessage = '') => {
  Redirect(RORTAL_REDIRECT_ERROR_MESSAGES)
  return dispatch => dispatch({
    type: ERROR_ADD_MESSAGE,
    payload: { topic: message, text: subMessage }
  })
}

export const hasErrorMessage = (results) => {
  let error
  if (results.payload.response) {
    error = results.payload.response.res_desc
  } else if (results.payload.message) {
    error = results.payload.message
  } else {
    error = results.payload.res_desc
  }

  return error
}
