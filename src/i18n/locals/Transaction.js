
import App from './App'

export default {
  TH: {
    TITLE: 'ค้นหารายการธุรกรรม',
    SEARCH: {
      THEMALL: 'Merchant Name / Merchant Mobile No / Ref. 1',
      REFNO: 'เลขทำรายการ / เบอร์โทรลูกค้า',
      DATETIME: App.TH.OTHER.DATE,
      START_DATE: App.TH.OTHER.STARTDATE,
      END_DATE: App.TH.OTHER.ENDDATE,
      STATUS: App.TH.OTHER.STATUS,
      TYPE: App.TH.OTHER.TYPE,
      CHANNEL: 'ช่องทางการชำระเงิน',
      REFUND: 'Refund',
      TO: 'ถึง',
      ALL_STATUS: 'สภานะทั้งหมด',
      BRANCH: 'สาขา',
      ALL_BRANCH: 'สาขาทั้งหมด',
      SEARCH: 'ชื่อร้านค้า / เบอร์โทรศัพท์ / รหัสอ้างอิง 1 / เลขทำรายการ'
    },
    TABLE: {
      DATETIME: App.TH.OTHER.DATETIME,
      FROMACCOUNT: 'จากบัญชี',
      TOACCOUNT: 'ถึงบัญชี',
      AMOUNT: 'จำนวน',
      APPROVAL_CODE: 'รหัสการอนุมัติ',
      STATUS: App.TH.OTHER.STATUS,
      TYPE: 'ประเภทการชำระเงิน',
      CHANNEL: 'ช่องทางการชำระเงิน'
    },
    DRAWER: {
      VOID: 'ยกเลิกรายการ',
      CLOSE: 'ปิด',
      QUESTION: 'คุณต้องการยกเลิกรายการนี้ใช่หรือไม่?',
      CANCEL: 'ยกเลิก',
      CONFIRM: 'ยืนยัน',
      DESCRIPTION: 'รายละเอียด',
      DATETIME: App.TH.OTHER.DATETIME,
      TYPE: 'ประเภทการชำระ',
      CURRENCY: 'สกุลเงิน',
      NAME: 'ชื่อ',
      FROMNAME: 'จาก',
      TONAME: 'ถึง',
      WALLETID: 'Wallet ID',
      MOBILENO: 'หมายเลขโทรศัพท์มือถือ',
      TOTAL: 'รวมยอด',
      AMOUNT: 'ราคา',
      FEE: 'ค่าธรรมเนียม',
      TOTALAMOUNT: 'จำนวนเงินทั้งหมด',
      REF: 'เลขทำรายการ',
      ABBID: 'ABB ID',
      ABB_APPROVE: 'Abb Approve',
      ABB_VOID: 'Abb Void',
      REF1: 'Ref.1',
      REF2: 'Ref.2',
      CHANNEL: 'ช่องทาง',
      STATUS: App.TH.OTHER.STATUS,
      MERCHANT_GROUP: 'ประเภทร้านค้า',
      DISCOUNT: 'ส่วนลด',
      BANK_CODE: 'ธนาคาร',
      RECIEPT_NO: 'เลขที่ใบเสร็จ'
    },
    BILLPAYMENT: {
      TITLE: 'ค้นหารายการธุรกรรมจ่ายบิล',
      TABLE: {
        ABB_ID: 'ABB ID'
      }
    },
    ALIPAY: {
      TITLE: 'ค้นหารายการธุรกรรมอาลีเปย์',
      TABLE: {
        ABB_ID: 'ABB ID'
      }
    },
    OTHER: App.TH.OTHER
  },
  EN: {
    TITLE: 'Inquiry Transaction',
    SEARCH: {
      REFNO: 'Ref. No / Customer Mobile No.',
      DATETIME: App.EN.OTHER.DATE,
      START_DATE: App.EN.OTHER.STARTDATE,
      END_DATE: App.EN.OTHER.ENDDATE,
      STATUS: App.EN.OTHER.STATUS,
      TYPE: App.EN.OTHER.TYPE,
      CHANNEL: 'Channel',
      REFUND: 'Refund',
      TO: 'To',
      ALL_STATUS: 'ALL STATUS',
      BRANCH: 'Branch',
      ALL_BRANCH: 'All Branch',
      SEARCH: 'Merchant Name / Merchant Mobile No / Ref. 1 / Ref. No'
    },
    TABLE: {
      DATETIME: App.EN.OTHER.DATETIME,
      FROMACCOUNT: 'From Account',
      TOACCOUNT: 'To Account',
      AMOUNT: 'Amount',
      APPROVAL_CODE: 'Approval Code',
      STATUS: App.EN.OTHER.STATUS,
      TYPE: App.EN.OTHER.TYPE,
      CHANNEL: 'Channel'
    },
    DRAWER: {
      VOID: 'Void',
      CLOSE: 'Close',
      CANCEL: 'Cancle',
      CONFIRM: 'Confirm',
      QUESTION: 'Are you sure to void this transaction?',
      DESCRIPTION: 'Description',
      DATETIME: App.EN.OTHER.DATETIME,
      TYPE: App.EN.OTHER.TYPE,
      CURRENCY: 'Currency',
      FROMNAME: 'From',
      TONAME: 'To',
      NAME: 'Name',
      WALLETID: 'Wallet ID',
      MOBILENO: 'Mobile No',
      TOTAL: 'Total',
      AMOUNT: 'Amount',
      FEE: 'Fee',
      TOTALAMOUNT: 'Total Amount',
      REF: 'Ref No.',
      ABBID: 'ABB ID',
      ABB_APPROVE: 'Abb Approve',
      ABB_VOID: 'Abb Void',
      REF1: 'Ref.1',
      REF2: 'Ref.2',
      CHANNEL: 'Channel',
      STATUS: App.EN.OTHER.STATUS,
      MERCHANT_GROUP: 'Merchant Group',
      DISCOUNT: 'Discount',
      BANK_CODE: 'Bank',
      RECIEPT_NO: 'Receipt No'
    },
    BILLPAYMENT: {
      TITLE: 'Inquiry Transaction Bill Payment',
      TABLE: {
        ABB_ID: 'ABB ID'
      }
    },
    ALIPAY: {
      TITLE: 'Inquiry Transaction Alipay',
      TABLE: {
        ABB_ID: 'ABB ID'
      }
    },
    WECHAT: {
      TITLE: 'Inquiry Transaction Wechat',
      TABLE: {
        ABB_ID: 'ABB ID'
      }
    },
    OTHER: App.EN.OTHER
  }
}
