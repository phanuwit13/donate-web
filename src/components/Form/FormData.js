import React, { Component } from 'react'
import {} from '../../theme/scss/components/Form/Formdata.scss'
import axios from 'axios'
import Swal from 'sweetalert2'
const crypto = require('crypto')
const config = require('../../config/config')
import { Redirect } from '../../until/index'
export default class FormData extends Component {
  constructor (props) {
    super(props)
    this.state = {
      merchant_id: '',
      order_id: '',
      amount: '',
      url_redirect: '',
      url_notify: '',
      payment_description: '',
      currency: '',
      promotion: '',
      reference_1: '',
      reference_2: '',
      reference_3: '',
      reference_4: '',
      reference_5: '',
      payment_type: '',
      customer_email: '',
      api_id: '',
      api_key: '',
      sign_key: '',
      data: []
    }
  }
  componentDidMount () {
    this.setValue()
    let order_id = Math.floor(Math.random() * 1E16)
    this.setState(
      {
        order_id: order_id,
        api_id: config.api_id,
        api_key: config.api_key,
        sign_key: config.sign_key,
        url_redirect: config.url_redirect,
        url_notify: config.url_notify
      })
  }
  onSiteChanged (e) {
    console.log(this.state)
    var merchant_id = ''
    if (e.target.value === 'QR_PP_TAG30') {
      merchant_id = this.state.data.merchant_id_qr
    } else {
      merchant_id = this.state.data.merchant_id_full
    }
    this.setState({
      payment_type: e.target.value,
      merchant_id: merchant_id
    })
  }
  setValue = () => {
    this.setState({
      data: this.props.location.state.data
    })
  }
  onSubmit = (e) => {
    e.preventDefault()
    var results = e.target
    const hmac = crypto.createHmac('sha256', this.state.sign_key)
    const sign = hmac.update([this.state.merchant_id, this.state.order_id.toString(), results.amount.value, null, null, null].join('.')).digest('base64')
    console.log(results.amount.value)
    axios({
      method: 'POST',
      url: 'https://octopus-unify.digipay.dev/api/v1/redirect/sale',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      data: {
        merchant_id: this.state.merchant_id,
        order_id: this.state.order_id.toString(),
        amount: results.amount.value,
        url_redirect: this.state.url_redirect,
        url_notify: this.state.url_notify,
        payment_description: '',
        currency: 'THB',
        promotion: '',
        reference_1: '',
        reference_2: '',
        reference_3: '',
        reference_4: '',
        reference_5: '',
        payment_type: results.payment_type.value,
        customer_email: results.customer_email.value,
        api_id: this.state.api_id,
        api_key: this.state.api_key,
        sign_key: this.state.sign_key,
        sign: sign
      },
      maxRedirects: 0,
      validateStatus: status => status >= 200 && status <= 302
    })
    .then((response) => {
      const redirectUrl = response.request.responseURL
      console.log(redirectUrl)
      window.location = redirectUrl
      // Redirect(redirectUrl)
    }).catch(err => console.error(err))
  }
  render () {
    return (
      <div>
        <div className='form-main'>
          <div className='form-content'id='donate' >
            <div className='form-box1' >
              <div className='detail-form-content'>
                <div>
                  <div className='donate-title-form'>{ this.state.data.title}</div>
                  <form onSubmit={ this.onSubmit }>
                    <div className='form-group'>
                      <label className='group-label'>ระบุจำนวนเงินที่บริจาค (บาท)</label>
                      <input type='text' name='amount' className='form-control' required />
                    </div>
                    <div className='form-group'>
                      <label className='group-label'>เลือกช่องทางบริจาคเงิน</label>
                    </div>
                    <div className='row'>
                      <div className='col-md-6'>
                        <input type='radio' className='btn-check' name='payment_type' id='success-outlined' value='QR_PP_TAG30' checked={ this.state.payment_type === 'QR_PP_TAG30' } onChange={ this.onSiteChanged.bind(this) } autoComplete='off' required />
                        <label htmlFor='success-outlined'><img className={ this.state.payment_type === 'QR_PP_TAG30' ? 'imgactive img-btn' : 'img-btn' } htmlFor='success-outlined' src='../../../static/images/button/Group 10.png' /></label>
                      </div>
                      <div className='col-md-6'>
                        <input type='radio' className='btn-check' name='payment_type' id='danger-outlined' value='FULL' checked={ this.state.payment_type === 'FULL' } onChange={ this.onSiteChanged.bind(this) } autoComplete='off' required />
                        <label htmlFor='danger-outlined' > <img className={ this.state.payment_type === 'FULL' ? 'imgactive img-btn' : 'img-btn' } htmlFor='danger-outlined' src='../../../static/images/button/Group 9.png' /></label>
                      </div>
                    </div>
                    <div className='form-group'>
                      <h3 className='group-label mb-5'>ระบุข้อมูลผู้บริจาคเงิน</h3>
                      <label className='sub-label'>ชื่อ - นามสกุล</label>
                      <input type='text' name='customer_name' className='form-control' />
                      <label className='sub-label'>อีเมล</label>
                      <input type='text' name='customer_email' className='form-control' />
                      <label type='text' name='customer_phone' className='sub-label'>เบอร์โทรศัพท์มือถือ</label>
                      <input className='form-control' />
                    </div>
                    <div className='form-check'>
                      <input className='form-check-input' type='checkbox' value='' id='flexCheckDefault' />
                      <label className='form-check-label' htmlFor='flexCheckDefault'>
                        ต้องการใบกำกับภาษี
                      </label>
                    </div>
                    <button className='btn btn-light btn-lg btn-block btn-donate mx-auto  mt-5' type='submit'>ร่วมบริจาค</button>
                  </form>
                </div>
              </div>
            </div>
            <div className='form-box2' />
            <div className='form-box3' />
          </div>
        </div>
      </div>
    )
  }
}
