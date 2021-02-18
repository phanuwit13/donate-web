export const API_ROOT = '/api/v1/portals'

// Portal
export const SIGNIN = `/oauth/token`
export const LOGIN = `/api/v1/oauth/portal/token`
export const PROFILES = `${API_ROOT}/profile`
export const LOGOUT = `${API_ROOT}/logout`
export const PASSWORD_CHANGE = `${API_ROOT}/password/create`
export const PORTAL_GET_CAPTCHA = `${API_ROOT}/captcha/`
export const PORTAL_REDIRECT = '/initialize'
export const RORTAL_REDIRECT_LOGIN = '/account/login'
export const RORTAL_OTP = '/OTP'
export const RORTAL_REDIRECT_ERROR_MESSAGES = '/error/messages'
export const PORTAL_REDIRECT_PASSWORD_CREATE = '/account/password/create'

export const CREATE_PASSWORD = `${API_ROOT}/createpassword`

// Dashboard
export const DASHBOARD_ALL = `${API_ROOT}/dashboard`

// Consumer
export const CONSUMER = 'consumer'
export const CONSUMER_GET = `${API_ROOT}/${CONSUMER}`
export const CONSUMER_SEARCH_ID = `${CONSUMER_GET}/`
export const CONSUMER_SUSPEND = `${CONSUMER_GET}/suspend`
export const CONSUMER_UNSUSPEND = `${CONSUMER_GET}/unsuspend`

// ConsumerVilla
export const CONSUMER_VILLA = 'consumer/villa'
export const CONSUMER_VILLA_GET = `${API_ROOT}/${CONSUMER_VILLA}`
export const CONSUMER_VILLA_SEARCH_ID = `${CONSUMER_VILLA_GET}/`
export const CONSUMER_VILLA_SUSPEND = `${CONSUMER_VILLA_GET}/suspend`
export const CONSUMER_VILLA_UNSUSPEND = `${CONSUMER_VILLA_GET}/unsuspend`

// Staff
// export const PORTALS_REGISTER = `${API_ROOT}/register`
// export const PORTALS_CHANGE_PASSWORD = `${API_ROOT}/changepassword`
// export const PORTALS_UPDATE_PROFILE = `${API_ROOT}/updateprofile`
// export const PORTALS_SEARCH = `${API_ROOT}/search`

export const STAFF = 'staff'
export const STAFF_GET = `${API_ROOT}/${STAFF}`

// Transaction
export const TRANSACTION = 'transaction'
export const TRANSACTION_VILLA = 'transaction/villa'
export const TRANSACTION_BILLPAYMENT = 'transaction/billpayment'
export const TRANSACTION_ALIPAY = 'transaction/alipay'
export const TRANSACTION_WECHAT = 'transaction/wechat'
export const TRANSACTION_GET = `${API_ROOT}/${TRANSACTION}`
export const TRANSACTION_GET_VILLA = `${API_ROOT}/${TRANSACTION_VILLA}`
export const TRANSACTION_GET_BILLPAYMENT = `${API_ROOT}/${TRANSACTION_BILLPAYMENT}`
export const TRANSACTION_GET_ALIPAY = `${API_ROOT}/${TRANSACTION_ALIPAY}`
export const TRANSACTION_GET_WECHAT = `${API_ROOT}/${TRANSACTION_WECHAT}`
export const TRANSACTION_VOID = `${TRANSACTION_GET}/void`
export const TRANSACTION_REPORT = `${TRANSACTION}/report`
export const TRANSACTION_SEARCH_BY_ID = `${TRANSACTION_GET}/`

// Merchant
export const MERCHANT = 'merchant'
export const MERCHANT_GET = `${API_ROOT}/${MERCHANT}`
export const MERCHANT_GET_ID = `${API_ROOT}/${MERCHANT}/`
export const MERCHANT_LOAD_TYPE = `${API_ROOT}/${MERCHANT}/type`
export const MERCHANT_SEARCH_NAME = `${API_ROOT}/${MERCHANT}/name/`
export const MERCHANT_BACKLIST = `${MERCHANT}/blacklist`
export const MERCHANT_LOAD_DEVICELOCK = `${API_ROOT}/${MERCHANT_BACKLIST}`
export const MERCHANT_DEVICE_UNLOCK = `${MERCHANT_LOAD_DEVICELOCK}/unlock`
export const MERCHANT_SUSPEND = `${MERCHANT_GET}/suspend`
export const MERCHANT_UNSUSPEND = `${MERCHANT_GET}/unsuspend`
export const MERCHANT_RESETPIN = `${MERCHANT_GET}/resetpin`
export const MERCHANT_RESETQANDA = `${MERCHANT_GET}/resetqanda`

// Merchant villa
export const MERCHANT_VILLA = 'merchant/villa'
export const MERCHANT_VILLA_GET = `${API_ROOT}/${MERCHANT_VILLA}`
export const MERCHANT_VILLA_GET_ID = `${API_ROOT}/${MERCHANT_VILLA}/`
export const MERCHANT_VILLA_LOAD_TYPE = `${API_ROOT}/${MERCHANT_VILLA}/type`
export const MERCHANT_VILLA_SEARCH_NAME = `${API_ROOT}/${MERCHANT_VILLA}/name/`
export const MERCHANT_VILLA_BACKLIST = `${MERCHANT_VILLA}/blacklist`
export const MERCHANT_VILLA_LOAD_DEVICELOCK = `${API_ROOT}/${MERCHANT_VILLA_BACKLIST}`
export const MERCHANT_VILLA_DEVICE_UNLOCK = `${MERCHANT_VILLA_LOAD_DEVICELOCK}/unlock`
export const MERCHANT_VILLA_SUSPEND = `${MERCHANT_VILLA_GET}/suspend`
export const MERCHANT_VILLA_UNSUSPEND = `${MERCHANT_VILLA_GET}/unsuspend`
export const MERCHANT_VILLA_RESETPIN = `${MERCHANT_VILLA_GET}/resetpin`
export const MERCHANT_VILLA_RESETQANDA = `${MERCHANT_VILLA_GET}/resetqanda`

// Agent
export const AGENT_GET_ALL = `${API_ROOT}/search/agents`
export const AGENT_SEARCH = `${API_ROOT}/search/agents`

// Promotion
export const PROMOTION_GET_ALL = `${API_ROOT}/search/getallpromotions`
export const PROMOTION_SEARCH = `${API_ROOT}/search/promotions`

// Staff
export const STAFF_GET_ALL = `${API_ROOT}/search`
export const STAFF_SEARCH = `${API_ROOT}/search`

// Report
export const REPORT = 'report'
export const REPORT_PAYMENT = `${REPORT}/payment`
export const REPORT_SUMMARY_WALLET = `${REPORT}/summarywallet`

// Skylane
export const REPORT_SKYLANE = `${REPORT}/skylane`
export const REPORT_SKYLANE_TOPUP = `${REPORT_SKYLANE}/topup`
export const REPORT_SKYLANE_PAYMENT = `${REPORT_SKYLANE}/payment`
export const REPORT_SKYLANE_SUMMARY_CONSUMER = `${REPORT_SKYLANE}/summary_consumer`
export const REPORT_SKYLANE_SUMMARY_MERCHANT = `${REPORT_SKYLANE}/summary_merchant`
export const REPORT_SKYLANE_SUMMARY_SETTLE = `${REPORT_SKYLANE}/summary_settle`
export const REPORT_SKYLANE_SUMMARY_TERMINAL = `${REPORT_SKYLANE}/summary_terminal`
export const REPORT_SKYLANE_SUMMARY_TERMINAL_EDC = `${REPORT_SKYLANE}/summary_terminal_edc`
export const REPORT_SKYLANE_TRANSACTION_UNMATCHED = `${REPORT_SKYLANE}/unmatched`
export const REPORT_SKYLANE_SUMMARY_BALANCING = `${REPORT_SKYLANE}/balancing`

// the mall
export const THEMALL = `themall`
export const THEMALL_GET_ALL_BRANCH = `${API_ROOT}/${THEMALL}/all_branch`
export const THEMALL_GET_TIME_CLOSE_SHOP = `${API_ROOT}/${THEMALL}/timeclose?branchId=`
export const THEMALL_UPDATE_TIME_CLOSE_SHOP = `${API_ROOT}/${THEMALL}/timeclose`
export const THEMALL_TAX_INVOICE = `taxinvoice`
export const THEMALL_TAX_INVOICE_SERARCH = `${API_ROOT}/${THEMALL}/${THEMALL_TAX_INVOICE}/search?search=`
export const THEMALL_TAX_INVOICE_SERARCH_SHORT = `${API_ROOT}/${THEMALL}/${THEMALL_TAX_INVOICE}/short/search?search=`
export const THEMALL_TAX_INVOICE_CREATE = `${API_ROOT}/${THEMALL}/${THEMALL_TAX_INVOICE}`
export const THEMALL_TAX_INVOICE_UPDATE = `${API_ROOT}/${THEMALL}/${THEMALL_TAX_INVOICE}/update`
export const THEMALL_TAX_INVOICE_SERARCH_VIEW = `${API_ROOT}/${THEMALL}/${THEMALL_TAX_INVOICE}/view`
export const THEMALL_TAX_INVOICE_REPRINT = `${API_ROOT}/${THEMALL}/${THEMALL_TAX_INVOICE}/reprint`
export const THEMALL_TAX_INVOICE_SHOW_DETAIL = `${API_ROOT}/${THEMALL}/${THEMALL_TAX_INVOICE}/show/`
export const THEMALL_REPORT_RECONCILE_PRODUCT = `${THEMALL}/report/reconcile/product`
export const THEMALL_REPORT_RECONCILE_BILL = `${THEMALL}/report/reconcile/bill`
export const THEMALL_REPORT_FULL_TAXINVOICE = `${THEMALL}/report/fulltaxinvoice`
export const THEMALL_REPORT_PRODUCT_LIST = `${THEMALL}/report/productlist`
export const THEMALL_SLIP = `${API_ROOT}/themall/taxinvoice/short`
export const THEMALL_CLOSING = `${API_ROOT}/themall/taxinvoice/closing`
export const THEMALL_RUNCLOSING = `${API_ROOT}/themall/Merchant/RunClosing`
export const THEMALL_CLOSING_PAYMENT = `${API_ROOT}/themall/taxinvoice/closing/payment`
export const THEMALL_CLOSING_LOG = `${API_ROOT}/themall/taxinvoice/closing/log`
export const THEMALL_TAX_INVOICE_SERARCH_SHORT_REPRINT = `${API_ROOT}/themall/taxinvoice/short/reprint/search`
export const THEMALL_SLIP_REPRINT = `${API_ROOT}/themall/taxinvoice/short/reprint`
export const THEMALL_REPORT_PAYMENT = `${API_ROOT}/${THEMALL}/report/transaction/payment`
export const THEMALL_REPORT_PAYMENTALL = `${API_ROOT}/${THEMALL}/report/transaction/paymentALL`
export const THEMALL_REPORT_PAYMENTUNKNOWN = `${API_ROOT}/${THEMALL}/report/transaction/paymentUNKNOWN`
export const THEMALL_REPORT_PAYMENT_EXPORT = `${API_ROOT}/${THEMALL}/report/transaction/payment/export`
export const THEMALL_REPORT_EXPORTS_LIST = `${API_ROOT}/${THEMALL}/report/list`
export const THEMALL_PRODUCT = `${API_ROOT}/${THEMALL}/Merchant/Addproduct`

// Line
export const API_ROOT_LINE_OA = '/api'
export const ROOT_LINT = `${API_ROOT_LINE_OA}/line`
export const ROOT_MERCHANT = `${API_ROOT_LINE_OA}/merchant`
export const ROOT_THIRD_PARTY = `${API_ROOT_LINE_OA}/thirdParty`
export const ROOT_USER = `${API_ROOT_LINE_OA}/user`

export const LINE_REGISTER = `${ROOT_LINT}/register_line`
export const LINE_UN_REGISTER = `${ROOT_LINT}/disible_register_line`
export const LINE_GEN_QR_CODE = `${ROOT_LINT}/generate_qr_line`
export const LINE_HISTORY = `${ROOT_LINT}/history_line`
export const LINE_ACTIVATE_BAY = `${ROOT_MERCHANT}/verify_activate_code`
export const LINE_SHOP_DETAIL = `${ROOT_MERCHANT}/request_merchant_detail`
export const LINE_GEN_QR_BAY = `${ROOT_LINT}/generate_qr_line_with_amount`
export const LINE_GEN_QR_TAG29 = `${ROOT_LINT}/generate_qr_line_tag29`
export const LINE_GEN_QR_TAG29_WITH_AMOUNT = `${ROOT_LINT}/generate_qr_line_tag29_with_amount`
export const LINE_HISTORY_BAY = `${ROOT_MERCHANT}/inquiry_list_transactions`
export const LINE_INQUIRY_PROFILE = `${ROOT_USER}/inquiry_user`
export const LINE_REGISTER_PROFILE = `${ROOT_USER}/register`
export const LINE_UPDATE_PROFILE = `${ROOT_USER}/update_user`

// Voucher
export const LINE_INQUIRY_VOUCHER = `${ROOT_THIRD_PARTY}/inquiry_voucher`
export const LINE_REDEEM_VOUCHER = `${ROOT_THIRD_PARTY}/redeem_voucher`
export const LINE_SENT_VOUCHER = `${ROOT_THIRD_PARTY}/sent_voucher`
export const LINE_INQUIRY_AMOUNT_VOUCHER = `${ROOT_THIRD_PARTY}/inquiry_amount_voucher`
