import React, { Component } from 'react'
import {} from '../../theme/scss/components/Menu/Menu.scss'

export default class Menu extends Component {
  toPath (path) {
    this.props.router.push({
      pathname: path
    })
  }

  handleChange () {
    document.getElementById('toggler').click()
  }

  render () {
    return (
      <div>
        <nav className='navbar navbar-expand-lg nav-menu'>
          <div className='container-md'>
            <a className='navbar-brand' href='#'><img src='../../../static/images/icon/Vector.png' alt='...' /></a>
            <span id='toggler' className='navbar-toggler' data-bs-toggle='collapse' data-bs-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
              <img className='navbar-toggler-icon' src='../../../static/images/icon/menu1.png' alt='...' />
            </span>
            <div className='collapse navbar-collapse justify-content-end' id='navbarNav'>
              <ul className='navbar-nav'>
                <li className='nav-item'>
                  <a className='nav-link link-nav' aria-current='page' htmlFor='toggler' onClick={ () => { this.toPath('/#section1'); this.handleChange() } } href='/#section1'>
                    หน้าหลัก
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link link-nav' onClick={ () => { this.toPath('/#section2'); this.handleChange() } } href='/#section2'>
                  โครงการทั้งหมด
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link link-nav' onClick={ () => { this.toPath('/#section3'); this.handleChange() } } href='/#section3'>
                    เกี่ยวกับเรา
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {/* <nav className='navbar navbar-expand-md nav-menu' id='section1'>
          <div className='container-lg'>
            <a className='navbar-brand' href='#'>
              <img src='../../../static/images/icon/Vector.png' alt='...' />
            </a>
            <button
              className='navbar-toggler'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#navbarNavAltMarkup'
              aria-controls='navbarNavAltMarkup'
              aria-expanded='false'
              aria-label='Toggle navigation'
            >
              <span className='navbar-toggler-icon'><img src='../../../static/images/icon/menu.png' alt='...' /></span>
            </button>
            <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
              <div className='nav justify-content-end'>
                <a className='nav-link link-nav' aria-current='page' onClick={ () => { this.toPath('/#section1') } } href='/#section1'>
                  หน้าหลัก
                </a>
                <a className='nav-link link-nav' onClick={ () => { this.toPath('/#section2') } } href='/#section2'>
                  โครงการทั้งหมด
                </a>
                <a className='nav-link link-nav' onClick={ () => { this.toPath('/#section3') } } href='/#section3'>
                  เกี่ยวกับเรา
                </a>
              </div>
            </div>
          </div>
        </nav> */}
      </div>
    )
  }
}
