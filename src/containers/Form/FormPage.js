import React, { Component } from 'react'
import Detail from '../../components/Form/Detail'
import FormData from '../../components/Form/FormData'

export default class Form extends Component {
  constructor (props) {
    super(props)
    this.state = {
      data: []
    }
  }

  componentDidMount () {
    this.setValue()
    console.log(this.state)
  }

  setValue = () => {
    this.setState({
      data: this.props.location.state
    })
  }
  render () {
    return (
      <div>
        <Detail { ...this.props } />
        <FormData { ...this.props } />
      </div>
    )
  }
}
