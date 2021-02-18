import React from 'react'
import { syncHistoryWithStore } from 'react-router-redux'
import { Router, Route, Redirect } from 'react-router'
import {
  Menu,
  HomePage,
  FormPage,
  NavPage
} from './containers'

export default (store, history) => {
  return (
    <Router history={ syncHistoryWithStore(history, store) }>
      <Route component={ NavPage } >
        {/* { () => { <Redirect to='home' /> }} */}
        <Route path='/' component={ HomePage } />
        <Route path='form' component={ FormPage } />
        {/* <Route path='home' component={ HomePage } /> */}
        <Route path='**' component={ HomePage } />
      </Route>
    </Router>
  )
}
