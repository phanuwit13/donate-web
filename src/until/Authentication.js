const isAuthenDigipay = () => {
  if (!localStorage.auth) return false
  return JSON.parse(localStorage.auth)
}

const isAuthenDigipayLogout = () => {
  if (!localStorage.logout) return false
  return true
}

const requireAuthDigipay = (nextState, replace) => {
  const isAuth = isAuthenDigipay()
  if (!isAuth) {
    replace({
      pathname: '/account/login'
    })
  }
}

const requireAuthDigipayError = (nextState, replace) => {
  const isAuth = isAuthenDigipayLogout()
  if (!isAuth && !isAuthenDigipay()) {
    replace({
      pathname: '/account/login'
    })
  }
}

const authDigipay = (nextState, replace) => {
  if (isAuthenDigipay()) {
    replace({
      pathname: '/'
    })
  }
}
const authDigipay1 = (nextState, replace) => {
  if (isAuthenDigipay()) {
    replace({
      pathname: '/OTP'
    })
  }
}

export {
  requireAuthDigipayError,
  requireAuthDigipay,
  authDigipay,
  authDigipay1
}
