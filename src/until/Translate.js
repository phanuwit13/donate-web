import React, { Component } from 'react'
import { connect } from 'react-redux'
import en from '../i18n/en'
import th from '../i18n/th'

const languages = {
  en,
  th
}

export default function translate (key) {
  return (Component) => {
    class TranslationComponent extends Component {
      render () {
        var strings = languages[this.props.language][key]
        return <Component { ...this.props } strings={ strings } />
      }
    }

    TranslationComponent.contextTypes = {
      languages: React.PropTypes.string
    }

    function mapStateToProps (state) {
      return {
        language: state.languages.language
      }
    }

    return connect(mapStateToProps)(TranslationComponent)
  }
}
