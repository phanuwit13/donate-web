import React, { Component } from 'react'
import {} from '../../theme/scss/components/Menu/Footer.scss'
export default class footer extends Component {
  render () {
    return (
      <div>
        <nav className='footer-content'>
          <div className='container-fluid'>
            <a className='.footer-brand' href='#'>
              <img className='footer-img' src='../../../static/images/icon/Vector2.png' alt='...' />
            </a>
            <div className='copy-rights' href='#'>
              <div className='nav justify-content-end'>
              © 2021 Digio Thailand All Rights Reserved
              </div>
            </div>
          </div>
        </nav>
        {/* <div ><a href='#section1' id='myBtn' type='button' className='btn btn-light head-button2'>ร่วมบริจาค</a></div> */}
      </div>
    )
  }
}
