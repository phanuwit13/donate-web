import moment from 'moment'

export const formatDate = (date, startDate, endDate) => {
  let value = date
  if (date.endDate) {
    let dateStartUnix = moment(startDate).unix()
    let dateEndUnix = moment(date.endDate).unix()
    let dateTodayUnix = moment().startOf('day').hour(12).minute(0).unix()
    // value = (dateStartUnix < dateEndUnix && dateEndUnix <= dateTodayUnix) ? date : { endDate: null }
    value = date
  } else if (date.startDate && endDate) {
    let dateStartUnix = moment(date.startDate).unix()
    let dateEndUnix = moment(endDate).unix()
    value = (dateStartUnix <= dateEndUnix) ? date : { endDate: null }
  } else if (!date.startDate && endDate) {
    value = { endDate: null, startDate: null }
  }
  return value
}

export const formatMoney = (num) => {
  let NEWnum
  switch (num) {
    case undefined:
      NEWnum = 0
      break
    case null:
      NEWnum = 0
      break
    case '':
      NEWnum = 0
      break
    default:
      NEWnum = num
  }
  return NEWnum.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,')
}

export const formatBankCode = (code) => {
  let bank
  switch (code) {
    case '002': bank = 'BBL'
      break
    case '004':bank = 'KBANK'
      break
    case '006': bank = 'KTB'
      break
    case '011': bank = 'TMB'
      break
    case '014': bank = 'SCB'
      break
    case '017': bank = 'CITI'
      break
    case '018': bank = 'SMBC'
      break
    case '020': bank = 'SMBC'
      break
    case '022': bank = 'SCBT'
      break
    case '024': bank = 'UOBT'
      break
    case '025': bank = 'BAY'
      break
    case '030': bank = 'GOV'
      break
    case '033': bank = 'GHB'
      break
    case '034': bank = 'AGR'
      break
    case '039': bank = 'MHCB'
      break
    case '065': bank = 'TBANK'
      break
    case '066': bank = 'ISBT'
      break
    case '067': bank = 'TISCO'
      break
    case '069': bank = 'KK'
      break
    case '070': bank = 'ICBC'
      break
    case '071': bank = 'TCRB'
      break
    case '073': bank = 'LHBANK'
      break
    default: bank = '-'
      break
  }

  return bank
}

export const BranchThemall = (val) => {
  let branch
  switch (val) {
    case '000000000000003': branch = 'The Mall ราม 2'
      break
    case '000000000000002': branch = 'The Mall ราม 3'
      break
    case '000000000000005':branch = 'The Mall ท่าพระ'
      break
    case '000000000000006': branch = 'The Mall งามวงศ์วาน'
      break
    case '000000000000007': branch = 'The Mall บางแค'
      break
    case '000000000000008': branch = 'The Mall บางกะปิ'
      break
    case '000000000000010': branch = 'The Mall โคราช'
      break
    case '000000000000009': branch = 'Emporium'
      break
    case '000000000000017': branch = 'Emquartier'
      break
    case '000000000000011': branch = 'Paragon'
      break
    case '000000000000014': branch = 'Bluport'
      break
    default: branch = '-'
      break
  }

  return branch
}

export const formatPhoneNo = (text) => {
  const splitText = text.split('')
  let allString = ''
  for (let n_loop in splitText) {
    if (parseInt(n_loop, 6) < 10) {
      allString += 'x'
      if (parseInt(n_loop, 6) === 2) {
        allString += '-'
      }
      if (parseInt(n_loop, 6) === 5) {
        allString += '-'
      }
    } else {
      allString += splitText[n_loop]
    }
  }
  return allString
}

export const formatNumberWalletMask = (text) => {
  const splitText = text.split('')
  let allString = ''
  for (let n_loop in splitText) {
    if (parseInt(n_loop, 10) !== 8 && parseInt(n_loop, 10) !== 9 && parseInt(n_loop, 10) !== 10 && parseInt(n_loop, 10) !== 11) {
      allString += 'x'
    } if (parseInt(n_loop, 10) === 2) {
      allString += '-'
    } if (parseInt(n_loop, 10) === 7) {
      allString += '-'
    } if (parseInt(n_loop, 10) === 8 || parseInt(n_loop, 10) === 9 || parseInt(n_loop, 10) === 10 || parseInt(n_loop, 10) === 11) {
      allString += splitText[n_loop]
    } if (parseInt(n_loop, 10) === 11) {
      allString += '-'
    }
  }
  return allString
}

export const convertLanguageMonth = (date, locale = 'en', newformat = 'DD/MM/YYYY HH:mm', oldformat = null) => {
  let result
  if (oldformat) {
    result = moment(date, oldformat).lang(locale).format(newformat)
  } else {
    result = moment(date).lang(locale).format(newformat)
  }

  return result
}

export const convertAmountFiexd = (number) => {
  let result
  if (typeof number === 'number') {
    result = number.toFixed(2).toString()
  } else if (typeof number === 'string') {
    let change = +number
    result = change.toFixed(2).toString()
  } else {
    result = number
  }

  return result
}
