import { CALL_API, apiMiddleware } from 'redux-api-middleware'
import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import createLogger from 'redux-logger'
import thunk from 'redux-thunk'
import moment from 'moment'

import rootReducer from '../reducers'
import oauth from '../constants/oauth'
import { PORTAL_REDIRECT } from '../constants/endpoints'
import { localLanguage } from '../actions/languageActions'
import { logoutExpired, ModelAccessToken, RefreshToken } from '../actions/portalActions'
import { Redirect } from '../until'

let settimeOut
let timeOutAuth
let setTimeactive
let checkSetTime = false
let checkSetTimeAuth = false

export default (history) => {
  const middlewares = [thunk, apiMiddleware, routerMiddleware(history)]

  const callApiMiddleware = store => next => (action) => {
    const callAPI = action[CALL_API]
    if (typeof callAPI === 'undefined') {
      return next(action)
    }

    const {endpoint, headers, method} = callAPI
    return fetch(endpoint, headers, method)
  }

  if (process.env.NODE_ENV !== 'production')
    middlewares.push(createLogger())

  const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(...middlewares),
      process.env.NODE_ENV !== 'production' && window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  )

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      System.import('../reducers').then(nextRootReducer =>
        store.replaceReducer(nextRootReducer.default)
      )
    })
  }

  store.subscribe(() => {
    if (!localStorage.auth) {
      clearTimeout(setTimeactive)
    }

    if (!store.getState().auth.isAuthenticated && checkSetTime) {
      clearTimeout(settimeOut)
      checkSetTime = false
    }

    if (store.getState().auth.isAuthenticated && !checkSetTime) {
      checkSetTime = true
      settimeOut = setTimeout(() => {
        store.dispatch(RefreshToken())
        checkSetTime = false
      }, oauth.access_token)
    }

    if ((store.getState().auth.isAuthenticated && !store.getState().auth.isRefreshToken) || (store.getState().auth.isAuthenticated && setTimeactive === undefined)) {
      clearTimeout(setTimeactive)
      setTimeactive = setTimeout(() => {
        store.dispatch(ModelAccessToken())
      }, oauth.access_token)
    }
  })

  if (localStorage.language) {
    store.dispatch(
      localLanguage(localStorage.language)
    )
  }

  return store
}
