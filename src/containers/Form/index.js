import React, { Component } from 'react'
import Form from './FormPage'

export default class FormPage extends Component {
  componentDidMount () {
    console.log(this.props.location.state)
  }
  render () {
    return <Form { ...this.props } />
  }
}
