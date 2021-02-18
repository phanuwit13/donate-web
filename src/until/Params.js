import QR from 'qr-image'
import map from 'lodash/map'
import join from 'lodash/join'
import pickBy from 'lodash/pickBy'
import identity from 'lodash/identity'
import { browserHistory, hashHistory } from 'react-router'

import config from '../constants/configs'

const url = (url, data) => {
  const urlPick = pickBy(data, identity)
  const urlMap = map(urlPick, (val, key) => {
    if (key === 'startDate' || key === 'endDate')
      return `${key}=${val.format('YYYY/MM/DD')}`
    return `${key}=${val}`
  })

  return `/${url}?${join(urlMap, '&')}`
}

const Redirect = (url) => {
  return config.routerMode ? browserHistory.push(url) : hashHistory.push(url)
}

const hostname = window.location.origin

const hasLocal = localStorage.language ? localStorage.language.toUpperCase() === 'TH' : ''

const isValidCitizenID = (citizenId) => {
  if (citizenId.length === 13) {
    var sum = 0
    for (let i = 0; i < 12; i++) {
      sum += parseFloat(citizenId.charAt(i)) * (13 - i)
    }
    if ((11 - sum % 11) % 10 !== parseFloat(citizenId.charAt(12))) {
      return false
    } else {
      return true
    }
  } else {
    return false
  }
}

const hasStatusTransaction = (data) => {
  let newStatus
  let status = data.toUpperCase()
  switch (status) {
    case 'APPROVE':
      newStatus = 'APPROVED'
      break
    case 'SETTLE':
      newStatus = 'SETTLED'
      break
    default:
      newStatus = status
  }

  return newStatus
}

const hasStatusMerchant = (data) => {
  let newStatus
  let status = data.toUpperCase()
  switch (status) {
    case 'VERIFY':
      newStatus = 'VERIFIED'
      break
    case 'UNVERIFY':
      newStatus = 'UNVERIFIED'
      break
    default:
      newStatus = status
  }

  return newStatus
}

export const GenQrcode = (qrcode, level = 'L') => {
  return QR.imageSync(qrcode, { type: 'png', ec_level: level, margin: 1, size: 10 })
}

export const bufferToBase64 = (u8a) => {
  var CHUNK_SZ = 0x8000
  var c = []
  for (var i = 0; i < u8a.length; i += CHUNK_SZ) {
    c.push(String.fromCharCode.apply(null, u8a.subarray(i, i + CHUNK_SZ)))
  }
  return c.join('')
}

export {
  url,
  Redirect,
  hostname,
  hasLocal,
  isValidCitizenID,
  hasStatusMerchant,
  hasStatusTransaction
}
