import React, { Component } from 'react'
import {} from '../../theme/scss/components/Menu/About.scss'

export default class About extends Component {
  render () {
    return (
      <div>
        <div className='about-main'>
          <div className='about-content' >
            <div className='box1' >
              <div className='detail-about-content'>
                <div className='about-title'><span>เกี่ยวกับเรา</span></div>
                <div className='about-sub-title'>บอกบุญ มีจุดเริ่มต้นจาก<br />ความต้องการช่วยเหลือสังคม<br />เพื่อให้พวกเขาสามารถทำเรื่องดี ๆ<br />ให้เกิดขึ้นจริง และขยายผล</div>
                <div className='about-detail'>
                  ราเมนแฟ้บพฤหัสถูกต้อง เมาท์เซี้ยว บาบูนฮอตดอก ครูเสดต้าอ่วยอุปสงค์
                  ท็อปบู๊ทไลฟ์ ชาร์จคาร์โก้ สแล็กรีดไถโต๋เต๋ไลน์วอลล์ กัมมันตะพุดดิ้ง ธุหร่ำ
                  แบดบิลเทคโนแครตง่าวออยล์ ไอซ์นินจา พล็อตแพตเทิร์นโมหจริต อวอร์ด
                  สปิริตแคมป์บ๋อย อินเตอร์ศึกษาศาสตร์ตะหงิดคองเกรสเอ็นทรานซ์ วิกช็อป
                  เปอร์ ซาร์ดีนบูติกแซลมอนไวอากร้าฮิบรู เคส
                </div>
                <div className='about-detail2'>
                  ดิสเครดิตแฟล็ตจัมโบ้ เที่ยงคืน สโตนเคอร์ฟิวไฮบริดอิออนวิดีโอ เคลียร์ พอเพียงวอล์ค จังโก้ แฟ็กซ์ฟีด เซ็นเซอร์ไดเอ็ตไตร
                  มาสชาร์ต ปัจฉิมนิเทศ ซีนไลน์ สตูดิโอบอดี้ เบอร์เกอร์สไลด์ ดีมานด์แพทเทิร์นบึม สเตชั่น โหงวเฮ้งเพทนาการแพทเทิร์นเบน
                  โตะ ลิสต์เพลซไฮเปอร์รีไทร์
                </div>
              </div>
              <div className='img-aboutbox' id='section3'>
                <img className='img-about' src='../../../static/images/icon/hugo-customer-support.png' alt='...' />
              </div>
            </div>
            <div className='box2' />
            <div className='box3' />
          </div>
        </div>
      </div>
    )
  }
}
