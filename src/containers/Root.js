import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { browserHistory } from 'react-router'
import injectTapEventPlugin from 'react-tap-event-plugin'

import configureStore from '../store/configureStore'
import config from '../constants/configs'
import routes from '../routes'
injectTapEventPlugin()

export default class App extends Component {
  render () {
    const sheet = document.createElement('link')
    sheet.rel = 'stylesheet'
    sheet.href = config.themes.config
    sheet.type = 'text/css'
    document.head.appendChild(sheet)

    const store = configureStore(browserHistory)
    return (
      <Provider store={ store } key='provider' >
        {routes(store, browserHistory)}
      </Provider>
    )
  }
}
