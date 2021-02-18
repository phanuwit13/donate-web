const checkPaymentType = (data) => {
  const paymentMethod = data[0].paymentMethod
  let txt
  switch (paymentMethod) {
    case 'BILLPAY':
      txt = 'QR Payment'
      break
    case 'WECHAT':
      txt = 'WeChat'
      break
    case 'ALIPAY':
      txt = 'Alipay'
      break
    default:
      txt = '-'
      break
  }
  return txt
}

export {
  checkPaymentType
}
