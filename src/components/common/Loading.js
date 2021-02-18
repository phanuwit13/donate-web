import React, { Component } from 'react'
import Progress from 'react-progress-bar-plus'

import 'react-progress-bar-plus/lib/progress-bar.css'

class Loading extends Component {
  state = {
    percent: -1,
    intervalTime: 200
  }

  start = () => {
    this.setState({
      percent: 0,
      intervalTime: (Math.random() * 100)
    })
  }

  setPercent = percent => () => {
    this.setState({
      percent
    })
  }

  componentWillMount () {
    this.start()
  }

  componentWillUnmount () {
    this.setPercent(100)
  }

  render () {
    return (
      <Progress
        percent={ this.state.percent }
        autoIncrement
        intervalTime={ this.state.intervalTime }
        spinner='right'
      />
    )
  }
}

export default Loading
