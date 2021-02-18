import React, { Component } from 'react'
import PropTypes from 'prop-types'

const EmptySearch = props => (
  <div className=' tabel-col-custom'>
    <div className='container-fulid not-found-border'>
      <i className='fa fa-search not-found-font' />
      <p style={{ fontWeight: 500, fontSize: 18 }} >{props.title}</p>
    </div>
  </div>
)

EmptySearch.propTypes = {
  title: PropTypes.string
}

export default EmptySearch
