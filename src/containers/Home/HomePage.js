import React, { Component } from 'react'
import HeadContent from '../../components/Home/HeadContent'
import Content from '../../components/Home/Content'
import About from '../../components/Home/About'
import data from '../../../static/data/project/data-project.json'

export default class Home extends Component {
  constructor (props) {
    super(props)
    this.state = {
      data: []
    }
  }

  componentDidMount () {
    this.setValue()
  }

  setValue = () => {
    this.setState({
      data: data
    })
  }
  render () {
    return (
      <div>
        <HeadContent />
        <Content data={ this.state.data } { ...this.props } setValue={ this.setValue } />
        <About />
      </div>
    )
  }
}
