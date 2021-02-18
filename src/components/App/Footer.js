import React, { Component } from 'react'
import PropTypes from 'prop-types'
import config from '../../constants/configs'

const Footer = () => (
  <div className=''>
    <br /><br /><br /><br />
    <div className='page-footer'>
      <hr className='page-footer-hr' />
      <p className='inner' >©2017 Digio (Thailand) Co., Ltd. All Rights Reserved. (v.{config.AppVersion})</p>
    </div>
  </div>
)

export default Footer
