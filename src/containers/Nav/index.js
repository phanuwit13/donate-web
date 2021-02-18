import React, { Component } from 'react'
import Nav from './NavPage'

export default class HomePage extends Component {
  render () {
    return <Nav { ...this.props } />
  }
}
