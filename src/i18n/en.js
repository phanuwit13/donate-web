import App from './locals/App'
import Account from './locals/Account'
import Dashboard from './locals/Dashboard'
import Transaction from './locals/Transaction'
import Consumer from './locals/Consumer'
import Merchant from './locals/Merchant'
import Common from './locals/Common'
import Reports from './locals/Reports'
import Errors from './locals/Errors'
import Config from './locals/Config'
import TAXINVOICE from './locals/Taxinvoice'

export default {
  // APP
  APP: {
    MENU: App.EN.MENU,
    NAVBAR: App.EN.NAVBAR,
    OTHER: App.EN.OTHER
  },
  ERRORS: Errors.EN.ERRORS,
  MODALTOKEN: Common.EN.MODALTOKEN,
  // LoginForm
  LoginForm: Account.EN.LoginForm,
  PasswordForm: Account.EN.PasswordForm,
  // TransactionForm
  TRANSACTIONS: Transaction.EN,
  DASHBOARD: Dashboard.EN,
  CONSUMER: Consumer.EN,
  MERCHANT: Merchant.EN,
  REPORTS: Reports.EN,
  CONFIG: Config.EN,
  TAXINVOICE: TAXINVOICE.EN
}
