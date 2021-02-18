import React, { PropTypes } from 'react'
import LoadingPic from '../../../static/images/ripple.gif'

const LoadingPage = () => {
  return (
    <div className='loading-custom'>
      <div className='container-fulid loading-border'>
        <i className='fa loading-margin' />
        <p><img src={ LoadingPic } /></p>
      </div>
    </div>
  )
}

export default LoadingPage
