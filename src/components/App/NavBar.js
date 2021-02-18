import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Menu from './Menu'
import moment from 'moment'

import { translate } from '../../until'
import config from '../../constants/configs'

class NavBar extends Component {
  render () {
    const props = this.props
    if (!props.strings.NAVBAR) return null
    const lastLogin = moment(props.profile.lastLogin).format('MMMM D, YYYY HH:mm:ss')
    const user = `${props.profile.firstname} ${props.profile.lastname}`
    return (
      <div>
        <div className='topbar'>
          <div className='topbar-left'>
            <div className='logo'>
              <img src={ config.themes.logo.big } className='big' style={{width: 160}} />
              <img src={ config.themes.logo.small } className='small' />
            </div>
          </div>
          <nav className='navbar navbar-custom' style={{marginBottom: '0px'}}>
            <ul className='nav navbar-nav'>
              <li className='nav-item'>
                <button className=' button-menu-mobile' onClick={ props.funcslideBar } >
                  <i className='fa fa-bars' aria-hidden='true' />
                </button>
              </li>
            </ul>
            <ul className='nav navbar-nav pull-right'>
              <li className='dropdown menu-nav'>
                <a href='javascript:;' className='dropdown-toggle language-nav' style={{fontSize: 14}} >
                  {this.props.language.toUpperCase()}
                </a>
                <ul className='dropdown-content language'>
                  <li><a href='javascript:;' onClick={ props.onSwitchLanguage.bind(this, 'en') }>EN</a></li>
                  <li><a href='javascript:;' onClick={ props.onSwitchLanguage.bind(this, 'th') }>TH</a></li>
                </ul>
              </li>
              <ul className='nav navbar-nav navbar-right'>
                <li className='dropdown menu-nav menu-nav-mobile'>
                  <a href='javascript:;' className='dropdown-toggle' data-toggle='dropdown'>
                    <i className='fa fa-user-o menu-nav-icon' id='menu-nav-desktop' />
                    <span id='nav-name'>{ props.strings.NAVBAR.HI }, {user} <i className='icon-submenu fa fa-angle-down' /></span>
                    <br />
                    <span id='nav-lastlogin'>{ props.strings.NAVBAR.LATEST_LOGIN }: {lastLogin}</span>
                  </a>
                  <ul className='dropdown-content profile'>
                    <li className='last-login-border' id='mobile-menu-text'>
                      <a href='javascript:;'>
                        <i className='fa fa-user-o profile-margin-right' aria-hidden='true' />
                        <span>{ props.strings.NAVBAR.HI }, {user}</span>
                      </a>
                    </li>
                    <li className='last-login-border' id='mobile-menu-text'>
                      <a href='javascript:;'>
                        <i className='fa fa-clock-o profile-margin-right' aria-hidden='true' />
                        <span className='last-login'>{ props.strings.NAVBAR.LATEST_LOGIN }: {lastLogin}</span>
                      </a>
                    </li>
                    <li><a onClick={ props.onLogout.bind(this) } href='javascript:;'><i className='fa fa-power-off profile-margin-right' aria-hidden='true' />{props.strings.NAVBAR.LOGOUT}</a></li>
                  </ul>
                </li>
              </ul>
            </ul>
          </nav>
        </div>
        <Menu funcmobileSideBar={ props.funcmobileSideBar } permission={ props.permission } />
      </div>
    )
  }
}

NavBar.PropTypes = {
  profile: PropTypes.object.isRequired,
  onLogout: PropTypes.func.isRequired,
  onSwitchLanguage: PropTypes.func.isRequired
}

export default translate('APP')(NavBar)
