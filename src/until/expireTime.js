import moment from 'moment'
import oauth from '../constants/oauth'

export function expireTimeRefeshToken () {
  let expireTime = moment().add(oauth.refresh_token, 'm')
  localStorage.setItem('expire', expireTime)
}

export function expireTime () {
  var expireTime = new Date()
  expireTime.setMinutes(expireTime.getMinutes() + 30)
  localStorage.setItem('expire', expireTime)
}
