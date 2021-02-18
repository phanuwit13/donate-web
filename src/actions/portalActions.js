import { CALL_API } from 'redux-api-middleware'
import { push } from 'react-router-redux'

import oauth from '../constants/oauth'
import {
  LOGIN,
  LOGOUT,
  PROFILES,
  PASSWORD_CHANGE,
  PORTAL_GET_CAPTCHA,
  RORTAL_REDIRECT_LOGIN
} from '../constants/endpoints'
import {
  LOGOUT_USER,
  PROFILE_REQUEST,
  PROFILE_SUCCESS,
  PROFILE_FAILURE,
  MODAL_ACCESSTOKEN,
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  LOGOUT_USER_REQUEST,
  LOGOUT_USER_SUCCESS,
  LOGOUT_USER_FAILURE,
  REFRESH_TOKEN_REQUEST,
  REFRESH_TOKEN_SUCCESS,
  REFRESH_TOKEN_FAILURE,
  CREATE_PASSWORD_REQUEST,
  CREATE_PASSWORD_SUCCESS,
  CREATE_PASSWORD_FAILURE,
  PORTAL_CAPTCHA_CHANGE_REQUEST,
  PORTAL_CAPTCHA_CHANGE_FAILURE,
  PORTAL_CAPTCHA_CHANGE_SUCCESS
} from '../constants/actionTypes'
import config from '../constants/configs'
import { expireTimeRefeshToken, serialize, Redirect } from '../until'

export const removeCurrentUser = (is, dispatch) => {
  if (is) {
    Redirect(RORTAL_REDIRECT_LOGIN)
  }

  return dispatch({
    type: LOGOUT_USER
  })
}

// export const logout = (is = true) => {
//   return (dispatch) => {
//     localStorage.removeItem('portal')
//     localStorage.removeItem('auth')
//     localStorage.removeItem('expire')
//     sessionStorage.removeItem('location')
//     dispatch(removeCurrentUser(is))
//   }
// }

export const logout = (is = true) => (dispatch) => {
  const token = JSON.parse(localStorage.auth).token
  localStorage.removeItem('portal')
  localStorage.removeItem('auth')
  localStorage.removeItem('expire')
  sessionStorage.removeItem('location')

  return dispatch({
    [CALL_API]: {
      endpoint: LOGOUT,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Basic ZGlnaW86MXFhelpBUSE=',
        'x-access-token': token,
        'x-version': config.AppVersion
      },
      method: 'POST',
      types: [
        LOGOUT_USER_REQUEST,
        {
          type: LOGOUT_USER_SUCCESS,
          payload: (_action, _state, res) => {
            return res.json().then((results) => {
              // if (results.res_code === '0000') {
              removeCurrentUser(is, dispatch)
              // }
              return results
            })
          }
        },
        LOGOUT_USER_FAILURE
      ]
    }
  })
}

export const logoutExpired = () => {
  return dispatch => removeCurrentUser(false, dispatch)
}

export const login = values => (
  dispatch =>
    dispatch({
      [CALL_API]: {
        endpoint: LOGIN,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded',
          'x-version': config.AppVersion
        },
        method: 'POST',
        body: serialize({
          grant_type: 'password',
          client_id: oauth.client_id,
          client_secret: oauth.client_secret,
          username: values.username,
          password: values.password,
          captcha: values.captcha
        }),
        types: [
          LOGIN_USER_REQUEST,
          {
            type: LOGIN_USER_SUCCESS,
            payload: (_action, _state, res) => {
              return res.json().then((login) => {
                if (login.token_type === 'bearer') {
                  localStorage.setItem(
                    'auth',
                    JSON.stringify({
                      token: login.refresh_token,
                      access_token: login.access_token
                    })
                  )
                  expireTimeRefeshToken()
                }
                return login
              })
            }
          },
          LOGIN_USER_FAILURE
        ]
      }
    }
  )
)

export const UserProfile = () => (
  dispatch => dispatch({
    [CALL_API]: {
      endpoint: PROFILES,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'x-access-token': JSON.parse(localStorage.auth).access_token,
        'x-version': config.AppVersion
      },
      method: 'GET',
      types: [
        PROFILE_REQUEST,
        {
          type: PROFILE_SUCCESS,
          payload: (_action, _state, res) => {
            return res.json().then((results) => {
              return results
            })
          }
        },
        PROFILE_FAILURE
      ]
    }
  })
)

export const RefreshToken = () => (
  dispatch => dispatch({
    [CALL_API]: {
      endpoint: LOGIN,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
        'x-version': config.AppVersion
      },
      method: 'POST',
      body: serialize({
        grant_type: 'refresh_token',
        client_id: oauth.client_id,
        client_secret: oauth.client_secret,
        refresh_token: JSON.parse(localStorage.auth).token || ''
      }),
      types: [
        REFRESH_TOKEN_REQUEST,
        {
          type: REFRESH_TOKEN_SUCCESS,
          payload: (_action, _state, res) => {
            return res.json().then((results) => {
              localStorage.setItem(
                'auth',
                JSON.stringify({
                  token: results.refresh_token,
                  access_token: results.access_token
                })
              )
              return results
            })
          }
        },
        REFRESH_TOKEN_FAILURE
      ]
    }
  })
)

export const ModelAccessToken = () => (
  {
    type: MODAL_ACCESSTOKEN,
    payload: {
      isModalAccessToken: true
    }
  }
)

export const HideModelAccessToken = () => (
  {
    type: MODAL_ACCESSTOKEN,
    payload: {
      isModalAccessToken: false
    }
  }
)

export const CreatePassword = value => (
  dispatch => dispatch({
    [CALL_API]: {
      endpoint: PASSWORD_CHANGE,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'x-access-token': JSON.parse(localStorage.auth).access_token,
        'x-version': config.AppVersion
      },
      method: 'POST',
      body: JSON.stringify({
        passwordOld: value.passwordOld,
        passwordNew: value.passwordNew,
        passwordConfirm: value.passwordConfirm
      }),
      types: [
        CREATE_PASSWORD_REQUEST,
        {
          type: CREATE_PASSWORD_SUCCESS,
          payload: (_action, _state, res) => {
            return res.json().then((results) => {
              return results
            })
          }
        },
        CREATE_PASSWORD_FAILURE
      ]
    }
  })
)
