import moment from 'moment'
import {
  SWITCH_LANGUAGE,
  LOCALSTORAGE_LANGUAGE
} from '../constants/actionTypes'

export function switchLanguage (language) {
  localStorage.setItem('language', language)
  if (language === 'en') {
    moment.locale('en-US')
  } else {
    moment.locale('th-TH')
  }
  return dispatch =>
    dispatch({
      type: SWITCH_LANGUAGE,
      language
    }
  )
}

export const localLanguage = language => dispatch => dispatch({
  type: LOCALSTORAGE_LANGUAGE,
  language: language.toLowerCase()
})
