import {
  LOGOUT_USER,
  PROFILE_SUCCESS,
  MODAL_ACCESSTOKEN,
  LOGIN_USER_SUCCESS,
  REFRESH_TOKEN_SUCCESS,
  REFRESH_TOKEN_FAILURE,
  REFRESH_TOKEN_REQUEST,
  CREATE_PASSWORD_SUCCESS
} from '../constants/actionTypes'

const initialState = {
  token: undefined,
  profile: {},
  permission: {},
  isRefreshToken: false,
  isAuthenticated: false,
  isModalAccessToken: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER_SUCCESS:
      return { ...state, token: action.payload.access_token, isAuthenticated: true }
    case REFRESH_TOKEN_SUCCESS:
      return { ...state, token: action.payload.access_token, isAuthenticated: true }
    case PROFILE_SUCCESS:
      return { ...state, profile: action.payload.profile, permission: action.payload.permission }
    case CREATE_PASSWORD_SUCCESS:
      return { ...state, profile: { isFirstTime: action.payload.isFirstTime } }
    case MODAL_ACCESSTOKEN:
      return { ...state, isModalAccessToken: action.payload.isModalAccessToken, isRefreshToken: false }
    case REFRESH_TOKEN_REQUEST:
      return { ...state, isRefreshToken: true }
    case LOGOUT_USER:
      return { token: undefined, profile: {}, isAuthenticated: false, isModalAccessToken: false }
    case REFRESH_TOKEN_FAILURE:
      return { token: undefined, profile: {}, isAuthenticated: false }
    default:
      return state
  }
}
