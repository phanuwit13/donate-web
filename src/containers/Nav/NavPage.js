import React, { Component } from 'react'
import Menu from '../../components/Nav/Menu'
import HeadContent from '../../components/Home/HeadContent'
import Content from '../../components/Home/Content'
import About from '../../components/Home/About'
import Footer from '../../components/Nav/Footer'
import data from '../../../static/data/project/data-project.json'

export default class Nav extends Component {
  render () {
    return (
      <div>
        <Menu { ...this.props } />
        {this.props.children}
        <Footer />
      </div>
    )
  }
}
