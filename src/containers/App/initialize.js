import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { PORTAL_REDIRECT_PASSWORD_CREATE, RORTAL_REDIRECT_ERROR_MESSAGES } from '../../constants/endpoints'
import { RefreshToken, UserProfile, logout } from '../../actions/portalActions'
import { addErrorMessage } from '../../actions/errorAction'
import Errors from '../../i18n/locals/Errors'
import { hasLocal } from '../../until'

class initialize extends Component {
  initApp = () => {
    const {
      token,
      profile,
      UserProfile,
      RefreshToken
    } = this.props
    const url_redirect = sessionStorage.location ? sessionStorage.location : '/'
    if (token !== undefined && profile !== undefined) this.context.router.push('/')
    if (token === undefined) {
      RefreshToken().then((results) => {
        if (results.payload.token_type !== 'bearer') {
          if (results.payload.status >= 500) {
            this.props.addErrorMessage(results.payload.message)
            return
          }
          if (!results.payload.response) return
          let topic = hasLocal ? Errors.TH.ERRORS.AUTHEN_FAIL : Errors.EN.ERRORS.AUTHEN_FAIL
          this.props.addErrorMessage(topic)
          this.props.logout(false)
          localStorage.setItem('logout', true)
        } else {
          setTimeout(() => {
            UserProfile(results.payload.access_token).then((results) => {
              if (!results) return
              if (results.payload.res_code === '0000') {
                if (results.payload.profile.isFirstTime) {
                  this.context.router.push(PORTAL_REDIRECT_PASSWORD_CREATE)
                } else {
                  this.context.router.push(url_redirect)
                }
              }
            })
          }, 600)
        }
      })
    } else {
      UserProfile(token).then((results) => {
        if (!results) return
        if (results.payload.res_code === '0000') {
          if (results.payload.profile.isFirstTime) {
            this.context.router.push(PORTAL_REDIRECT_PASSWORD_CREATE)
          } else {
            this.context.router.push(url_redirect)
          }
        }
      })
    }
  }
  componentWillMount () {
    this.initApp()
  }

  render () {
    return <div id='loading-initialize' />
  }
}

initialize.propTypes = {
  token: PropTypes.string,
  profile: PropTypes.object,
  logout: PropTypes.func.isRequired
}

initialize.contextTypes = {
  router: PropTypes.object.isRequired
}

const mapStateToProps = (state) => {
  return {
    token: state.auth.token,
    profile: state.auth.object
  }
}

export default connect(
  mapStateToProps,
  {
    addErrorMessage,
    RefreshToken,
    UserProfile,
    logout
  }
)(initialize)
