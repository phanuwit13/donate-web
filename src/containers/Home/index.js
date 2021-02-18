import React, { Component } from 'react'
import Home from './HomePage'

export default class HomePage extends Component {
  render () {
    return <Home { ...this.props } />
  }
}
