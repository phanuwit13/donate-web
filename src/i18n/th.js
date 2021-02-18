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
  // NavBar
  APP: {
    MENU: App.TH.MENU,
    NAVBAR: App.TH.NAVBAR,
    OTHER: App.TH.OTHER
  },
  ERRORS: Errors.EN.ERRORS,
  MODALTOKEN: Common.TH.MODALTOKEN,
  // LoginForm
  LoginForm: Account.TH.LoginForm,
  PasswordForm: Account.TH.PasswordForm,
  // TransactionForm
  TRANSACTIONS: Transaction.TH,
  DASHBOARD: Dashboard.TH,
  CONSUMER: Consumer.TH,
  MERCHANT: Merchant.TH,
  REPORTS: Reports.TH,
  CONFIG: Config.TH,
  TAXINVOICE: TAXINVOICE.TH
}
