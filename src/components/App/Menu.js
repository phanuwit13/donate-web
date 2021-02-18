// icon => http://zavoloklom.github.io/material-design-iconic-font/icons.html

import React, { Component } from 'react'
import { Link } from 'react-router'
import ScrollArea from 'react-scrollbar'

import config from '../../constants/configs'
import perm from '../../constants/permission'
import { translate } from '../../until'

class Menu extends Component {
  constructor (props) {
    super(props)
    this.toggleMenu = this.toggleMenu.bind(this)
  }

  toggleMenu (e) {
    let $class = e.currentTarget.className
    $class === 'subdrop' ? e.currentTarget.className = '' : e.currentTarget.className = 'subdrop'
  }

  componentDidMount () {
    if (this.refs.ScrollArea) {
      this.refs.ScrollArea.wrapper.className = 'sidebar-inner'
    }
  }

  makeMenus = (menus) => {
    const { funcmobileSideBar } = this.props
    return menus.map((data, index) => {
      if (data.options)
        return data.visibility ? this.createSubMenu(index, data.title, data.icon, data.options) : null
      else
        return data.visibility ? this.createMenu(index, data.title, data.icon, data.to) : null
    })
  }

  createMenu = (indexKey, title, icon, to) => {
    return (
      <li className='has_sub' key={ indexKey }>
        <Link onlyActiveOnIndex to={ to } activeClassName='active' onClick={ this.props.funcmobileSideBar } >
          <i className={ icon } />
          <span> { title } </span>
        </Link>
      </li>
    )
  }

  createSubMenu = (indexKey, title, icon, options) => {
    const { funcmobileSideBar } = this.props
    return (
      <li className='has_sub' key={ indexKey }>
        <a
          href='javascript:void(0);'
          onClick={ this.toggleMenu } >
          <i className={ icon } />
          <span> { title } </span>
          <span className='menu-arrow' />
        </a>
        <ul className='list-unstyled'>
          {
            options.map((data, index) => {
              return !data.visibility ? null : (
                <li key={ index }>
                  <Link to={ data.to } activeClassName='active' onClick={ funcmobileSideBar } >
                    { data.title }
                  </Link>
                </li>
              )
            })
          }
        </ul>
      </li>
    )
  }

  visibilityHasMenu = (type) => {
    const {
      permission
    } = this.props
    const value = type.some((sum) => {
      return permission[sum] ? permission[sum].RuleView : false
    })

    return value
  }

  checkRuleMenu = (index) => {
    const {
      permission
    } = this.props
    let Rule = permission[index]
    if (!Rule) return false
    return Rule.RuleView ? Rule.RuleView : false
  }

  render () {
    const {
      permission
    } = this.props
    if (!permission) return null
    const menu = [
      {
        title: this.props.strings.MENU.DASHBOARD,
        icon: 'zmdi zmdi-view-dashboard',
        to: '/',
        visibility: this.checkRuleMenu(perm.DASHBOARD)
      },
      {
        title: this.props.strings.MENU.TRANSACTION,
        icon: 'zmdi zmdi-format-align-justify',
        visibility: this.visibilityHasMenu([
          perm.TRANSACTION,
          perm.TRANSACTION_BILLPAYMENT,
          perm.TRANSACTION_ALIPAY,
          perm.TRANSACTION_WECHAT,
          perm.TRANSACTION_VILLA
        ]),
        options: [
          {
            title: this.props.strings.MENU.TRANSACTION_PROMPTPAY,
            to: '/transaction/promptpay',
            visibility: this.checkRuleMenu(perm.TRANSACTION)
          },
          {
            title: this.props.strings.MENU.TRANSACTION_VILLA,
            to: '/transaction/villa',
            visibility: this.checkRuleMenu(perm.TRANSACTION_VILLA)
          },
          {
            title: this.props.strings.MENU.TRANSACTION_BILLPAYMENT,
            to: '/transaction/billpayment',
            visibility: this.checkRuleMenu(perm.TRANSACTION_BILLPAYMENT)
          },
          {
            title: this.props.strings.MENU.TRANSACTION_ALIPAY,
            to: '/transaction/alipay',
            visibility: this.checkRuleMenu(perm.TRANSACTION_ALIPAY)
          },
          {
            title: this.props.strings.MENU.TRANSACTION_WECHAT,
            to: '/transaction/wechat',
            visibility: this.checkRuleMenu(perm.TRANSACTION_WECHAT)
          }
        ]
      },
      {
        title: this.props.strings.MENU.CONSUMER,
        icon: 'zmdi zmdi-account',
        visibility: this.visibilityHasMenu([
          perm.CONSUMER,
          perm.CONSUMER_VILLA
        ]),
        options: [
          {
            title: this.props.strings.MENU.CONSUMER,
            to: '/consumer',
            visibility: this.checkRuleMenu(perm.CONSUMER)
          },
          {
            title: this.props.strings.MENU.CONSUMER_VILLA,
            to: '/consumer/villa',
            visibility: this.checkRuleMenu(perm.CONSUMER_VILLA)
          }
        ]
      },
      // {
      //   title: this.props.strings.MENU.CONSUMER,
      //   icon: 'zmdi zmdi-account',
      //   to: '/consumer',
      //   visibility: this.checkRuleMenu(perm.CONSUMER)
      // },
      // {
      //   title: this.props.strings.MENU.CONSUMER,
      //   icon: 'zmdi zmdi-account',
      //   to: '/consumer/villa',
      //   visibility: this.checkRuleMenu(perm.CONSUMER)
      // },
      {
        title: this.props.strings.MENU.MERCHANT_MAIN,
        icon: 'zmdi zmdi-store',
        visibility: this.visibilityHasMenu([perm.MERCHANT, perm.MERCHANT_PRODUCT, perm.MERCHANT_BLACKLIST, perm.MERCHANT_QRCODE]),
        options: [
          {
            title: this.props.strings.MENU.MERCHANT,
            to: '/merchant',
            visibility: this.checkRuleMenu(perm.MERCHANT)
          },
          {
            title: this.props.strings.MENU.MERCHANT_PRODUCT,
            to: '/merchant/MerchantProduct',
            visibility: this.checkRuleMenu(perm.MERCHANT_PRODUCT)
          },
          {
            to: '/merchant/blacklist',
            title: this.props.strings.MENU.MERCHANT_BLACKLIST,
            visibility: this.checkRuleMenu(perm.MERCHANT_BLACKLIST)
          },
          {
            title: this.props.strings.MENU.MERCHANT_QRCODE,
            to: '/merchant/qrcode',
            visibility: this.checkRuleMenu(perm.MERCHANT_QRCODE)
          },
          {
            title: this.props.strings.MENU.MERCHANT_QRCODE_PRINT,
            to: '/merchant/qrcode/view',
            visibility: this.checkRuleMenu(perm.MERCHANT_QRCODE)
          }
        ]
      },
      {
        title: this.props.strings.MENU.MERCHANT_MAIN_VILLA,
        icon: 'zmdi zmdi-store',
        visibility: this.visibilityHasMenu([perm.MERCHANT_VILLA]),
        options: [
          {
            title: this.props.strings.MENU.MERCHANT_VILLA,
            to: '/merchantVilla',
            visibility: this.checkRuleMenu(perm.MERCHANT_VILLA)
          },
          {
            to: '/merchant/blacklist',
            title: this.props.strings.MENU.MERCHANT_BLACKLIST,
            visibility: this.checkRuleMenu(perm.MERCHANT_BLACKLIST)
          },
          {
            title: this.props.strings.MENU.MERCHANT_QRCODE,
            to: '/merchant/qrcode',
            visibility: this.checkRuleMenu(perm.MERCHANT_QRCODE)
          },
          {
            title: this.props.strings.MENU.MERCHANT_QRCODE_PRINT,
            to: '/merchant/qrcode/view',
            visibility: this.checkRuleMenu(perm.MERCHANT_QRCODE)
          }
        ]
      },
      {
        title: this.props.strings.MENU.AGENT,
        icon: 'zmdi zmdi-account',
        to: '/agent',
        visibility: false
      },
      {
        title: this.props.strings.MENU.STAFF,
        icon: 'zmdi zmdi-account',
        to: '/staff',
        visibility: false
      },
      {
        title: this.props.strings.MENU.COMPANY,
        icon: 'zmdi zmdi-layers',
        to: '/',
        visibility: false,
        options: [
          {
            title: 'Staff',
            to: '/staff',
            visibility: false
          }
        ]
      },
      {
        title: this.props.strings.MENU.MANAGE_STAFF,
        icon: 'zmdi zmdi-accounts-list',
        visibility: false,
        options: [
          {
            title: this.props.strings.MENU.MANAGE_STAFF_USERS,
            to: '/merchantreport',
            visibility: true
          },
          {
            title: this.props.strings.MENU.MANAGE_STAFF_ROLES,
            to: '/transaction-report',
            visibility: true
          }
        ]
      },
      {
        title: this.props.strings.MENU.REPORT,
        icon: 'zmdi zmdi-file-text',
        visibility: this.visibilityHasMenu([
          perm.REPORT_PAYMENT,
          perm.REPORT_SUMMARY_WALLET,
          perm.REPORT_SKYLANE,
          perm.REPORT_FULL_TAX_INVOICE,
          perm.REPORT_PRODUCT_LIST,
          perm.REPORT_TAKE_HOME,
          perm.REPROT_FOOD_CORUT
        ]),
        options: [
          {
            title: this.props.strings.MENU.REPORT_PAYMENT,
            to: '/report/payment',
            visibility: this.checkRuleMenu(perm.REPORT_PAYMENT)
          },
          {
            title: this.props.strings.MENU.REPORT_SUMMARYWALLET,
            to: '/report/summarywallet',
            visibility: this.checkRuleMenu(perm.REPORT_SUMMARY_WALLET)
          },
          {
            title: this.props.strings.MENU.REPORT_PRODUCT_FOOD_COURT,
            to: '/report/product/foodcourt',
            visibility: this.checkRuleMenu(perm.REPORT_RECONCILE_PRODUCT)
          },
          {
            title: this.props.strings.MENU.REPORT_PRODUCT_TAKE_HOME,
            to: '/report/product/takehome',
            visibility: this.checkRuleMenu(perm.REPORT_RECONCILE_PRODUCT)
          },
          {
            title: this.props.strings.MENU.REPORT_BILL_FOOD_COURT,
            to: '/report/bill/foodcourt',
            visibility: this.checkRuleMenu(perm.REPORT_RECONCILE_BILL)
          },
          {
            title: this.props.strings.MENU.REPORT_BILL_TAKE_HOME,
            to: '/report/bill/takehome',
            visibility: this.checkRuleMenu(perm.REPORT_RECONCILE_BILL)
          },
          {
            title: 'TXN Report',
            to: '/report/txn',
            visibility: this.checkRuleMenu(perm.REPORT_PAYMENT)
          },
          {
            title: this.props.strings.MENU.REPORT_TAX_INVOICE,
            to: '/report/taxinvoice',
            visibility: this.checkRuleMenu(perm.REPORT_FULL_TAX_INVOICE)
          },
          {
            title: this.props.strings.MENU.REPORT_PRODUCT,
            to: '/report/productlist',
            visibility: this.checkRuleMenu(perm.REPORT_PRODUCT_LIST)
          },
          {
            title: 'Skylane Topup Report',
            to: '/report/skylane/topup',
            visibility: this.checkRuleMenu(perm.REPORT_SKYLANE)
          },
          {
            title: 'Skylane Payment Report',
            to: '/report/skylane/payment',
            visibility: this.checkRuleMenu(perm.REPORT_SKYLANE)
          },
          {
            title: 'Skylane Summary Settle Report',
            to: '/report/skylane/summary_settle',
            visibility: this.checkRuleMenu(perm.REPORT_SKYLANE)
          },
          {
            title: 'Skylane Summary Payment Terminal Report ',
            to: '/report/skylane/summary_terminal_edc',
            visibility: this.checkRuleMenu(perm.REPORT_SKYLANE)
          },
          {
            title: 'Skylane Transaction Unmatched Report ',
            to: '/report/skylane/transaction_unmatched',
            visibility: this.checkRuleMenu(perm.REPORT_SKYLANE)
          },
          {
            title: 'Skylane Summary Balancing Report ',
            to: '/report/skylane/balancing',
            visibility: this.checkRuleMenu(perm.REPORT_SKYLANE)
          },
          {
            title: 'Exports List',
            to: '/report/exports/list',
            visibility: this.checkRuleMenu(perm.REPORT_PAYMENT)
          }
        ]
      },
      {
        title: this.props.strings.MENU.TAX_INVOICE,
        icon: 'zmdi zmdi-file-text',
        visibility: this.visibilityHasMenu([
          perm.TAX_INVOICE_MAIN,
          perm.TAX_INVOICE_CREATE
        ]),
        options: [
          {
            title: this.props.strings.MENU.TAX_INVOICE_CREATE,
            to: '/taxinvoice/create',
            visibility: this.checkRuleMenu(perm.TAX_INVOICE_CREATE)
          },
          {
            title: this.props.strings.MENU.TAX_INVOICE_CREATE_SLIP,
            to: '/taxinvoice/create/slip',
            visibility: this.checkRuleMenu(perm.TAX_INVOICE_CREATE)
          },
          {
            title: this.props.strings.MENU.TAX_INVOICE_SEARCH,
            to: '/taxinvoice/search',
            visibility: this.checkRuleMenu(perm.TAX_INVOICE_MAIN)
          },
          {
            title: this.props.strings.MENU.TAX_INVOICE_SHORT_SEARCH,
            to: '/taxinvoice/short/search',
            visibility: this.checkRuleMenu(perm.TAX_INVOICE_MAIN)
          },
          {
            title: this.props.strings.MENU.TAX_CLOSING,
            to: '/taxinvoice/closing',
            visibility: this.checkRuleMenu(perm.TAX_INVOICE_CREATE)
          }
        ]
      },
      {
        title: this.props.strings.MENU.CONFIG_TIME,
        icon: 'glyphicon glyphicon-cog',
        to: '/config/time',
        visibility: this.checkRuleMenu(perm.CONFIG_TIMECLOSE_SHOP)
      },
      {
        title: this.props.strings.MENU.LOCATION,
        icon: 'zmdi zmdi-flag',
        to: '/location',
        visibility: false
      },
      {
        title: this.props.strings.MENU.PROMOTION,
        icon: 'zmdi zmdi-card-giftcard',
        to: '/promotion',
        visibility: false
      },
      {
        title: this.props.strings.MENU.NEWS,
        icon: 'zmdi zmdi-comment-list',
        to: '/news',
        visibility: false
      },
      {
        title: this.props.strings.MENU.LOYALTYCARD,
        icon: 'zmdi zmdi-card',
        to: '/loyalty-card',
        visibility: false
      },
      {
        title: this.props.strings.MENU.POINT,
        icon: 'zmdi zmdi-ticket-star',
        to: '/point',
        visibility: false
      },
      {
        title: this.props.strings.MENU.ECOUPON,
        icon: 'zmdi zmdi-reader',
        to: '/e-coupon',
        visibility: false
      }
      // {
      //   title: this.props.strings.MENU.TAX_THE_MALL,
      //   icon: 'zmdi zmdi-print',
      //   to: '/theMall/tax',
      //   visibility: true
      // },
      // {
      //   title: this.props.strings.MENU.SLIP_THE_MALL,
      //   icon: 'zmdi zmdi-print',
      //   to: '/theMall/slip',
      //   visibility: true
      // }
    ]
    let scrollbarStylesFront = {borderRadius: 10, backgroundColor: 'transparent', width: 5}
    let scrollbarStylesBack = {backgroundColor: 'transparent', width: 5}
    return (
      <div>
        <div className='left side-menu'>
          <ScrollArea
            ref='ScrollArea'
            className='sidebar-inner'
            verticalScrollbarStyle={ scrollbarStylesFront }
            verticalContainerStyle={ scrollbarStylesBack }
            style={{overflow: 'inherit'}}
            contentStyle={{overflow: 'inherit'}}
            smoothScrolling={ true }
            speed={ 0.2 } >
            <div id='sidebar-menu'>
              <ul>
                { this.makeMenus(menu) }
              </ul>
              <div className='clearfix' />
            </div>
            <div className='clearfix' />
          </ScrollArea>
          <div className='footer-menu' style={{ display: 'none' }}>
            <span className='version' >Ver. {config.AppVersion}</span>
          </div>
        </div>
      </div>
    )
  }
}

export default translate('APP')(Menu)
