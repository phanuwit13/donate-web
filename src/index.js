import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import Root from './containers/Root'

import 'babel-polyfill'
import 'sweetalert/dist/sweetalert.css'
import 'bootstrap/dist/css/bootstrap.min.css'

// disable react devtools
if (
  process.env.NODE_ENV === 'production' &&
  window.__REACT_DEVTOOLS_GLOBAL_HOOK__ &&
  Object.keys(window.__REACT_DEVTOOLS_GLOBAL_HOOK__._renderers).length
) {
  window.__REACT_DEVTOOLS_GLOBAL_HOOK__._renderers = {}
}

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('app')
  )
}

render(Root)

if (module.hot) {
  module.hot.accept('./containers/Root', () => { render(Root) })
}

// module.hot.accept();
