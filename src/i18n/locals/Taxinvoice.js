import APP from './App'

export default {
  TH: {
    INDEX: {
      TITLE: 'ใบกำกับภาษี',
      TITLE_SHORT: 'ใบกำกับภาษีเเบบย่อ',
      SEARCH: {
        TITLE: 'ชื่อ / เบอร์โทรศัพท์ / ABB ID',
        TITLE1: 'เลขอ้างอิง 1 / ABB ID',
        STARTDATE: APP.TH.OTHER.STARTDATE,
        ENDDATE: APP.TH.OTHER.ENDDATE,
        BTN_SEARCH: APP.TH.OTHER.SEARCH,
        BRANCH: 'สาขา',
        ALL_BRANCH: 'สาขาทั้งหมด'
      },
      TABLE: {
        ABB_ID: 'ABB ID',
        REF1: 'เลขอ้างอิง 1',
        REF2: 'เลขอ้างอิง 2',
        NAME: 'ชื่อ',
        DATE: 'วันที่เวลาออกใบกำกับภาษี',
        BTN_FULL_TAXINVOICE: 'พิมพ์สำเนาใบกำกับภาษีเเบบเต็ม',
        BTN_FULL_TAXINVOICE_MASTER: 'พิมพ์ต้นฉบับใบกำกับภาษีแบบเต็ม',
        BTN_FULL_TAXINVOICE_REPRINT: 'พิมพ์สำเนาใบกำกับภาษีเเบบย่อ',
        BTN_EDIT_TAXINVOICE: 'แก้ไข',
        BTN_SHORT_TAXINVOICE: 'ใบกำกับภาษีเเบบย่อ',
        DATETIME: APP.TH.OTHER.DATETIME,
        STATUS: APP.TH.OTHER.STATUS,
        NET: 'ราคา',
        DISCOUNT: 'ส่วนลด',
        TOTAL: 'รวม',
        BRANCH: 'สาขา',
        PRINT_COUNT: 'จำนวนครั้งที่พิมพ์',
        PRINT: 'พิมพ์',
        BRANCHNAME: 'ชื่อสาขา',
        PAYMENT: 'ช่องทางชำระ'
      }
    },
    CREATE: {
      TITLE: 'สร้างใบกำกับภาษี',
      TITLE_EDIT: 'แก้ไขใบกำกับภาษี',
      SEARCH: APP.TH.OTHER.SEARCH,
      PLACEHOLDER: 'Abb Id, Ref. 1, Ref. 2',
      TAXINVOICE: 'ฟอร์มใบกำกับภาษี',
      NAME: 'ชื่อ',
      ADDRESS: 'ที่อยู่',
      TAX_IDENTIFICATION: 'เลขผู้เสียภาษี',
      PHONE_NO: 'เบอร์โทรศัพท์',
      PRINT: 'พิมพ์ใบกำกับภาษี',
      BTN_SUBMIT_SAVE: 'บันทึก',
      ERROR_ALLOW: 'รายการดังกล่าวไม่สามารถออกใบกำกับภาษีได้',
      ERROR_TYPE: 'รายการดังกล่าวได้ออกใบกำกับภาษีเเล้ว',
      ERROR_IS_NAME: 'ชื่อไม่ควรเป็นค่าว่าง',
      ERROR_IS_ADDRESS: 'ที่อยู่ไม่ควรเป็นค่าว่าง',
      ERROR_IS_TAX: 'เลขผู้เสียภาษีไม่ควรเป็นค่าว่าง',
      ERROR_IS_TEL: 'เบอร์โทรศัพท์ไม่ควรเป็นค่าว่าง',
      ERROR_IS_TAL_NUMBER: 'เบอร์โทรศัพท์ต้องเป็นตัวเลขเท่านั้น',
      ERROR_IS_TAX_NUMBER: 'เลขผู้เสียภาษีต้องเป็นตัวเลขเท่านั้น',
      ALERT_EDIT_SUCCESS: 'แก้ไขข้อมูลสำเร็จ'
    },
    CLOSING: {
      TITLE: 'พิมพ์ปิดรายการขาย',
      BTNCLOSING: 'ปิดรายการขาย',
      NOT_SEARCH: 'ไม่พบรายการปิดการขายวันนี้',
      BTN_PRINT: 'พิมพ์ปิดรายการขาย'
    }
  },
  EN: {
    INDEX: {
      TITLE: 'Tax Invoice',
      TITLE_SHORT: 'Tax Invoice Short',
      TITLE_EDIT: 'Edit tax invoice',
      SEARCH: {
        TITLE: 'Name / Mobile No. / ABB ID',
        TITLE1: 'Ref. 1 / ABB ID',
        STARTDATE: APP.EN.OTHER.STARTDATE,
        ENDDATE: APP.EN.OTHER.ENDDATE,
        BTN_SEARCH: APP.EN.OTHER.SEARCH,
        BRANCH: 'Branch',
        ALL_BRANCH: 'All Branch'
      },
      TABLE: {
        ABB_ID: 'ABB ID',
        REF1: 'Ref. 1',
        REF2: 'Ref. 2',
        NAME: 'Name',
        DATE: 'DateTime Tax Invoice',
        BTN_FULL_TAXINVOICE: 'Re Print Full Copy Tax Invoice',
        BTN_FULL_TAXINVOICE_MASTER: 'Re Print Full Master Tax Invoice',
        BTN_FULL_TAXINVOICE_REPRINT: 'Re Print TaxInvoice Short',
        BTN_EDIT_TAXINVOICE: 'Edit',
        BTN_SHORT_TAXINVOICE: 'Short Tax Invoice',
        DATETIME: APP.EN.OTHER.DATETIME,
        STATUS: APP.EN.OTHER.STATUS,
        NET: 'Net',
        DISCOUNT: 'Discount',
        TOTAL: 'Total',
        BRANCH: 'Branch',
        BRANCHNAME: 'Branch Name',
        PRINT_COUNT: 'Print Total',
        PRINT: 'Print',
        PAYMENT: 'Payment Channel'
      }
    },
    CREATE: {
      TITLE: 'Create Tax Invoice',
      SEARCH: APP.EN.OTHER.SEARCH,
      PLACEHOLDER: 'Abb Id, Ref. 1, Ref. 2',
      TAXINVOICE: 'Form Tax Invoice',
      NAME: 'Name',
      ADDRESS: 'Address',
      TAX_IDENTIFICATION: 'Tax identification',
      PHONE_NO: 'Phone No.',
      PRINT: 'Print Tax Invoince',
      BTN_SUBMIT_SAVE: 'Save',
      ERROR_ALLOW: 'รายการดังกล่าวไม่สามารถออกใบกำกับภาษีได้',
      ERROR_TYPE: 'รายการดังกล่าวได้ออกใบกำกับภาษีเเล้ว',
      ERROR_IS_NAME: 'Name is required',
      ERROR_IS_ADDRESS: 'Address is required',
      ERROR_IS_TAX: 'Tax identification is required',
      ERROR_IS_TEL: 'Phone No is required',
      ERROR_IS_TAL_NUMBER: 'Phone is number',
      ERROR_IS_TAX_NUMBER: 'Tax identification is number',
      ALERT_EDIT_SUCCESS: 'Update tax invoice success'
    },
    CLOSING: {
      TITLE: 'Print Tax Invoice Short Closing',
      BTNCLOSING: 'Run Closing',
      NOT_SEARCH: 'Could not find the Data Tax Short Closing ToDay.',
      BTN_PRINT: 'Print Tax Closing'
    }
  }
}
