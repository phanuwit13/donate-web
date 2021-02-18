import React, { Component } from 'react'
import PropTypes from 'prop-types'

const Breadcrumb = props => (
  <div>
    <div className='content-breadcrumbs'>
      <span className='breadcrumbs' >{ props.title }</span>
      {props.children}
    </div>
  </div>
)

Breadcrumb.propTypes = {
  title: PropTypes.string
}

export default Breadcrumb
