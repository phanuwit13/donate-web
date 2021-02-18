// icon => http://zavoloklom.github.io/material-design-iconic-font/icons.html

import React, { Component } from 'react'
import { Link } from 'react-router'
import ScrollArea from 'react-scrollbar'

import translate from '../translate'

class Menu extends Component {
  constructor (props) {
    super(props)
    this.toggleMenu = this.toggleMenu.bind(this)
  }

  toggleMenu (e) {
    let $class = e.currentTarget.className
    $class === 'subdrop' ? e.currentTarget.className = '' : e.currentTarget.className = 'subdrop'
  }

  componentDidMount () {
    if (this.refs.ScrollArea) {
      this.refs.ScrollArea.wrapper.className = 'sidebar-inner'
    }
  }

  render () {
    let scrollbarStylesFront = {borderRadius: 10, backgroundColor: 'transparent', width: 5}
    let scrollbarStylesBack = {backgroundColor: 'transparent', width: 5}
    const {funcmobileSideBar} = this.props
    return (
      <div>
        <div className='left side-menu'>
          <ScrollArea
            ref='ScrollArea'
            className='sidebar-inner'
            verticalScrollbarStyle={ scrollbarStylesFront }
            verticalContainerStyle={ scrollbarStylesBack }
            style={{overflow: 'inherit'}}
            contentStyle={{overflow: 'inherit'}}
            smoothScrolling={ true }
            speed={ 0.2 } >
            <div id='sidebar-menu'>
              <ul>
                <li className='has_sub'>
                  <Link onlyActiveOnIndex to='/' activeClassName='active' onClick={ funcmobileSideBar } >
                    <i className='zmdi zmdi-view-dashboard' />
                    <span> { this.props.strings.Menu.Dashboard } </span>
                  </Link>
                </li>
                <li className='has_sub'>
                  <Link to='/transaction' activeClassName='active' onClick={ funcmobileSideBar } >
                    <i className='zmdi zmdi-format-align-justify' />
                    <span> { this.props.strings.Menu.Transaction } </span>
                  </Link>
                </li>
                <li className='has_sub'>
                  <a
                    href='javascript:void(0);'
                    onClick={ this.toggleMenu } >
                    <i className='zmdi zmdi-file-text' />
                    <span> Mpos </span>
                    <span className='menu-arrow' />
                  </a>
                  <ul className='list-unstyled'>
                    <li><Link to='/mpos/company' activeClassName='active' onClick={ funcmobileSideBar } > Company </Link></li>
                    <li><Link to='/mpos/transaction' activeClassName='active' onClick={ funcmobileSideBar } >
                      Transaction </Link></li>
                  </ul>
                </li>
                <li className='has_sub'>
                  <Link to='/customer' activeClassName='active' onClick={ funcmobileSideBar } >
                    <i className='zmdi zmdi-account' />
                    <span> { this.props.strings.Menu.Customer } </span>
                  </Link>
                </li>
                <li className='has_sub'>
                  <Link to='/merchant' activeClassName='active' onClick={ funcmobileSideBar } >
                    <i className='zmdi zmdi-store' />
                    <span> { this.props.strings.Menu.Merchant } </span>
                  </Link>
                </li>
                <li className='has_sub'>
                  <Link to='/agent' activeClassName='active' onClick={ funcmobileSideBar } >
                    <i className='zmdi zmdi-account' />
                    <span> { this.props.strings.Menu.Agent } </span>
                  </Link>
                </li>
                <li className='has_sub'>
                  <Link to='/staff' activeClassName='active' onClick={ funcmobileSideBar } >
                    <i className='zmdi zmdi-account' />
                    <span> { this.props.strings.Menu.Staff } </span>
                  </Link>
                </li>
                <li className='has_sub'>
                  <Link to='/company' activeClassName='active' onClick={ funcmobileSideBar } >
                    <i className='zmdi zmdi-layers' />
                    <span> { this.props.strings.Menu.Company } </span>
                  </Link>
                </li>
                <li className='has_sub'>
                  <a
                    href='javascript:void(0);'
                    onClick={ this.toggleMenu } >
                    <i className='zmdi zmdi-file-text' />
                    <span> { this.props.strings.Menu.Report } </span>
                    <span className='menu-arrow' />
                  </a>
                  <ul className='list-unstyled'>
                    <li><Link to='/transaction-report' activeClassName='active' onClick={ funcmobileSideBar } >
                      { this.props.strings.Menu.ReportTransaction } </Link></li>
                    <li><Link to='/wallet-report' activeClassName='active' onClick={ funcmobileSideBar } >
                      { this.props.strings.Menu.ReportAccounting } </Link></li>
                  </ul>
                </li>
                <li className='has_sub'>
                  <Link to='/location' activeClassName='active' onClick={ funcmobileSideBar } >
                    <i className='zmdi zmdi-flag' />
                    <span> { this.props.strings.Menu.Location } </span>
                  </Link>
                </li>
                <li className='has_sub'>
                  <Link to='/promotion' activeClassName='active' onClick={ funcmobileSideBar } >
                    <i className='zmdi zmdi-card-giftcard' />
                    <span> { this.props.strings.Menu.Promotion } </span>
                  </Link>
                </li>
                <li className='has_sub'>
                  <Link to='/news' activeClassName='active' onClick={ funcmobileSideBar } >
                    <i className='zmdi zmdi-comment-list' />
                    <span> { this.props.strings.Menu.News } </span>
                  </Link>
                </li>
                <li className='has_sub'>
                  <Link to='/loyalty-card' activeClassName='active' onClick={ funcmobileSideBar } >
                    <i className='zmdi zmdi-card' />
                    <span> { this.props.strings.Menu.LoyaltyCard } </span>
                  </Link>
                </li>
                <li className='has_sub'>
                  <Link to='/point' activeClassName='active' onClick={ funcmobileSideBar } >
                    <i className='zmdi zmdi-ticket-star' />
                    <span> { this.props.strings.Menu.Point } </span>
                  </Link>
                </li>
                <li className='has_sub'>
                  <Link to='/e-coupon' activeClassName='active' onClick={ funcmobileSideBar } >
                    <i className='zmdi zmdi-reader' />
                    <span> { this.props.strings.Menu.ECoupon } </span>
                  </Link>
                </li>
              </ul>
              <div className='clearfix' />
            </div>
            <div className='clearfix' />
          </ScrollArea>
        </div>
      </div>
    )
  }
}

export default translate('APP')(Menu)














import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Menu from './Menu'
import moment from 'moment'

import { translate } from '../../until'

class NavBar extends Component {
  render () {
    const props = this.props
    return (
      <div>
        <div className='topbar'>
          <div className='topbar-left'>
            <div className='logo'>
              <img src={ require('../../../static/asset/images/Logo_DigiPay-01.png') } className='big' />
              <img src={ require('../../../static/asset/images/Logo_DigiPay-02.png') } className='small' />
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
              <li className='dropdown'>
                <button className='button-menu-mobile' style={{fontSize: 14}} >
                  {this.props.language.toUpperCase()}
                </button>
                <ul className='dropdown-content language'>
                  <li><a href='javascript:;' onClick={ props.onSwitchLanguage.bind(this, 'en') }>EN</a></li>
                  <li><a href='javascript:;' onClick={ props.onSwitchLanguage.bind(this, 'th') }>TH</a></li>
                </ul>
              </li>
              <ul className='nav navbar-nav navbar-right'>
                <li className='dropdown'>
                  <button className='dropdown-toggle button-menu-mobile' style={{fontSize: 14, padding: 0, paddingRight: 5}} href='javascript:;'> <i className='fa fa-user-o' aria-hidden='true' style={{ marginRight: '10px' }} /><span id='desktop-menu-text'>{ props.strings.NavBar.Hi }, {props.auth.staff} !!</span> </button>
                  <ul className='dropdown-content profile'>
                    <li className='last-login-border' id='mobile-menu-text'><a href='javascript:;'><i className='fa fa-user-o profile-margin-right' aria-hidden='true' /><span>{ props.strings.NavBar.Hi }, {props.auth.staff} !!</span></a></li>
                    <li className='last-login-border'><a href='javascript:;'><i className='fa fa-clock-o profile-margin-right' aria-hidden='true' /><span className='last-login'>{moment(props.auth.last_login).format('MMMM D, YYYY H:mm:ss')}</span></a></li>
                    <li><a onClick={ props.onLogout.bind(this) } href='javascript:;'><i className='fa fa-power-off profile-margin-right' aria-hidden='true' />Logout</a></li>
                  </ul>
                </li>
              </ul>
            </ul>
          </nav>
        </div>
        <Menu funcmobileSideBar={ props.funcmobileSideBar } />
      </div>
    )
  }
}

NavBar.PropTypes = {
  auth: PropTypes.object.isRequired,
  onLogout: PropTypes.func.isRequired,
  onSwitchLanguage: PropTypes.func.isRequired
}

export default translate('APP')(NavBar)

import React from 'react'
import ReactDOM from 'react-dom'
import moment from 'moment'

import { DateRangePicker } from 'react-dates'

var SelectedStartDate = moment('2017-05-05')
var SelectedEndDate = moment('2017-05-09')

class HomePageDatePicker extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      focusedInput: null,
      startDate: SelectedStartDate,
      endDate: SelectedEndDate
    }
    this.onDatesChange = this.onDatesChange.bind(this)
    this.onFocusChange = this.onFocusChange.bind(this)
  }

  onDatesChange ({ startDate, endDate }) {
    this.setState({ startDate, endDate })
  }

  onFocusChange (focusedInput) {
    this.setState({ focusedInput })
  }

  render () {
    const { focusedInput, startDate, endDate } = this.state
    return (
      <div>
        <DateRangePicker
          { ...this.props }
          onDatesChange={ this.onDatesChange }
          onFocusChange={ this.onFocusChange }
          focusedInput={ focusedInput }
          date={ startDate }
          startDate={ startDate }
          endDate={ endDate }
          startDateId='datepicker_start_home'
          endDateId='datepicker_end_home'
          startDatePlaceholderText='Check In'
          endDatePlaceholderText='Check Out'
        />
      </div>
    )
  }
}

export default HomePageDatePicker


