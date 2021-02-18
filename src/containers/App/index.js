import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Redirect, hasLocal } from '../../until'
import ModalToken from '../Common/ModalToken'
import NavBar from '../../components/App/NavBar'
import Footer from '../../components/App/Footer'
import { PORTAL_REDIRECT, RORTAL_REDIRECT_LOGIN, PORTAL_REDIRECT_PASSWORD_CREATE } from '../../constants/endpoints'
import { switchLanguage } from '../../actions/languageActions'
import FlashMessagesList from '../../components/flash/FlashMessagesList'
import { addErrorMessage } from '../../actions/errorAction'
import { logout, RefreshToken, HideModelAccessToken, UserProfile } from '../../actions/portalActions'
import Errors from '../../i18n/locals/Errors'
import Loadding from '../../components/common/LoadingPage'

import '../../../static/css/css_comp/daterangepicker.css'
import 'react-dates/lib/css/_datepicker.css'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isProfile: false,
      slideBar: window.innerWidth > 1042 ? false : true
    }
    if (!localStorage.auth) Redirect(RORTAL_REDIRECT_LOGIN)
    // if (props.isAuthenticated) return null
    if (props.token === undefined) {
      this.getToken().then(() => {
        this.getProfile(props)
      })
    } else {
      this.getProfile(props)
    }
  }

  getToken = () => {
    return this.props.RefreshToken().then((results) => {
      if (results.payload.token_type !== 'bearer') {
        if (results.payload.status >= 500) {
          this.props.addErrorMessage(results.payload.message)
          return
        }
        if (!results.payload.response) return
        let topic = hasLocal ? Errors.TH.ERRORS.AUTHEN_FAIL : Errors.EN.ERRORS.AUTHEN_FAIL
        this.props.addErrorMessage(topic)
        this.props.logout(false)
      }
    })
  }

  getProfile = (props) => {
    setTimeout(() => {
      props.UserProfile().then((results) => {
        if (!results) return
        if (results.payload.res_code === '0000') {
          if (results.payload.profile.isFirstTime) {
            Redirect(PORTAL_REDIRECT_PASSWORD_CREATE)
          }
          this.setState({
            isProfile: true
          })
        }
      })
    }, 1000)
  }

  slideBar = () => {
    this.setState({
      slideBar: !this.state.slideBar
    })
  }
  mobileSideBar = () => {
    if (window.innerWidth <= 768) {
      this.setState({
        slideBar: !this.state.slideBar
      })
    }
  }

  onSwitchLanguage = (key, event) => {
    this.props.switchLanguage(key)
  }

  componentWillMount () {
    //
  }

  render () {
    window.onresize = () => {
      if (window.innerWidth < 1042) {
        this.state.slideBar ? '' : this.setState({slideBar: true})
      }
    }
    let state = this.state
    const {
      logout,
      permission,
      RefreshToken,
      isModalAccessToken,
      HideModelAccessToken
    } = this.props
    if (!state.isProfile) return <div id='loading-initialize' />
    return (
      <div id='wrapper' className={ state.slideBar ? 'enlarged' : 'enlargedDown' }>
        <NavBar
          profile={ this.props.profile }
          funcslideBar={ this.slideBar }
          funcmobileSideBar={ this.mobileSideBar }
          onLogout={ this.props.logout }
          onSwitchLanguage={ this.onSwitchLanguage }
          permission={ permission }
          language={ this.props.language }
        />
        <div className='content-page'>
          <ModalToken />
          { this.props.children }
          <Footer />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    token: state.auth.token,
    profile: state.auth.profile,
    permission: state.auth.permission,
    language: state.languages.language,
    isAuthenticated: state.auth.isAuthenticated
  }
}

export default connect(mapStateToProps, {logout, switchLanguage, RefreshToken, UserProfile, HideModelAccessToken, addErrorMessage})(App)
