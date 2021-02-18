import React, { Component } from 'react'
import {} from '../../theme/scss/components/Menu/Head.scss'

export default class HeadContent extends Component {
  render () {
    return (
      <div>
        <div className='head-content' id='section1' >
          <div className='box-content1'>
            <div className='box-left'>
              <div className='box-left-center'>
                <div className='title'><span>คุณสามารถช่วยคนจำนวนมากได้ เพียงแค่ร่วมบริจาคเงิน เพียงเล็กน้อย</span></div>
                <div className='sub-title'>ทุกการบริจาค เราตระหนักว่าการให้เพื่อช่วยเหลือไม่ใช่คำตอบที่ดีที่สุด แต่คำตอบที่ดีสุดคือการพัฒนาคุณภาพชีวิตให้สามารถยืนได้ด้วยตนเอง อย่างมั่นคงและยั่งยืนถาวร</div>
                <div ><a href='#section2' type='button' className='btn btn-light head-button'>ร่วมบริจาค</a></div>
              </div>
            </div>
            <div className='box-right'>
              <img className='img-head' src='../../../static/images/icon/img-cover.png' alt='...' />
              {/* <div className='circle' /> */}
            </div>
            <div className='box-last'>
              <div className='sub-title2'>ทุกการบริจาค เราตระหนักว่าการให้เพื่อช่วยเหลือไม่ใช่คำตอบที่ดีที่สุด แต่คำตอบที่ดีสุดคือการพัฒนาคุณภาพชีวิตให้สามารถยืนได้ด้วยตนเอง อย่างมั่นคงและยั่งยืนถาวร</div>
              <div ><a href='#section2' type='button' className='btn btn-light head-button2'>ร่วมบริจาค</a></div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
