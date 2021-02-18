import React, { Component } from 'react'
import { connect } from 'react-redux'

import { addErrorMessage } from '../actions/errorAction'
import config from '../i18n/locals/Errors'
import { hasLocal, Redirect } from './Params'

const Authorized = alloewdRoles => (WrappenComponent) => {
  class WithAuthorization extends Component {
    render () {
      const {
        addErrorMessage,
        permission
      } = this.props
      if (!permission) {
        Redirect('/')
      } else if (!permission[alloewdRoles].RuleView) {
        let mess = hasLocal ? config.TH.ERRORS.PERMISSION : config.EN.ERRORS.PERMISSION
        addErrorMessage(mess)
        return null
      }

      return <WrappenComponent { ...this.props } />
    }
  }

  const mapStateToProps = (state) => {
    return {
      permission: state.auth.permission
    }
  }

  return connect(mapStateToProps, { addErrorMessage })(WithAuthorization)
}

export default Authorized
