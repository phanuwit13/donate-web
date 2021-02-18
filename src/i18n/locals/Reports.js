import Other from './App'

export default {
  TH: {
    TRANSACTIONS: {
      TITLE: 'Transaction Report',
      BTN_DOWNLOAD: Other.TH.OTHER.DOWNLOAD,
      BTN_SEARCH: Other.TH.OTHER.SEARCH,
      DATETIME: Other.TH.OTHER.DATE,
      STATUS: Other.TH.OTHER.STATUS,
      TYPE: Other.TH.OTHER.TYPE,
      TABLE: {
        DATETIME: Other.EN.OTHER.DATETIME,
        REF: 'Ref. No',
        STATUS: Other.EN.OTHER.STATUS,
        TOTAL: 'Total'
      }
    },
    PAYMENTS: {
      TITLE: 'Payment Report',
      ISSEARCH: 'คุณยังไม่ได้ค้นหาข้อมูล',
      SEARCH_NOTFOUND: 'ไม่พบข้อมูล Payment',
      BTN_EXPORT: Other.TH.OTHER.EXPORT,
      SEARCH: {
        BTN_SEARCH: Other.TH.OTHER.SEARCH,
        DATETIME: Other.TH.OTHER.DATE,
        START_DATE: Other.TH.OTHER.STARTDATE,
        END_DATE: Other.TH.OTHER.ENDDATE,
        STATUS: Other.TH.OTHER.STATUS,
        TYPE: Other.TH.OTHER.TYPE,
        TO: 'ถึง'
      },
      TABLE: {
        DATETIME: Other.TH.OTHER.DATETIME,
        REF: 'รหัสรายการ',
        STATUS: Other.TH.OTHER.STATUS,
        TOTAL: 'จำนวนเงิน'
      }
    },
    SKYLANE_PAYMENTS: {
      TITLE: 'Skylane Payment Report',
      ISSEARCH: 'คุณยังไม่ได้ค้นหาข้อมูล',
      SEARCH_NOTFOUND: 'ไม่พบข้อมูล Payment',
      BTN_EXPORT: Other.TH.OTHER.EXPORT,
      SEARCH: {
        BTN_SEARCH: Other.TH.OTHER.SEARCH,
        DATETIME: Other.TH.OTHER.DATETIME,
        START_DATE: Other.TH.OTHER.STARTDATE,
        END_DATE: Other.TH.OTHER.ENDDATE,
        STATUS: Other.TH.OTHER.STATUS,
        TYPE: Other.TH.OTHER.TYPE,
        TO: 'ถึง'
      },
      TABLE: {
        TRANSACTIONTIMESTAMP: '',
        DATETIME: Other.TH.OTHER.DATETIME,
        TRANSACTIONTYPE: 'Transaction Type',
        TRANSACTIONSTATUS: 'Transaction Status',
        PAYMENTMETHOD: 'Payment Method',
        MERCHANT_NAME: 'Merchant Name',
        TERMINALID: 'Terminal ID',
        NET: 'Net',
        DISCOUNT: 'Discount',
        FEE: 'Fee',
        TOTAL: 'จำนวนเงิน',
        WALLETID: 'Wallet ID',
        PAYERNAME: 'Payer Name',
        APPROVECODE: 'Approve Code',
        DESCRIPTION: 'Description',
        LAT: 'ละติจูด',
        LON: 'ลองติจูด',
        REF: 'รหัสรายการ',
        STATUS: Other.TH.OTHER.STATUS
      }
    },
    SKYLANE_SUMMARY_CONSUMER: {
      TITLE: 'Skylane Summary Consumer Report',
      ISSEARCH: 'คุณยังไม่ได้ค้นหาข้อมูล',
      SEARCH_NOTFOUND: 'ไม่พบข้อมูล Skylane Consumer',
      BTN_EXPORT: Other.TH.OTHER.EXPORT,
      SEARCH: {
        BTN_SEARCH: Other.TH.OTHER.SEARCH,
        DATETIME: Other.TH.OTHER.DATETIME,
        START_DATE: Other.TH.OTHER.STARTDATE,
        END_DATE: Other.TH.OTHER.ENDDATE,
        STATUS: Other.TH.OTHER.STATUS,
        TYPE: Other.TH.OTHER.TYPE,
        TO: 'ถึง'
      },
      TABLE: {
        WALLETUPDATETIME: 'Wallet Update Time',
        CITIZENID: 'รหัสประจำตัวประชาชน',
        NAME: 'ชื่อ',
        PHONENO: 'หมายเลขเบอร์โทรศัพท์',
        CURRENCY: 'สกุลเงิน',
        BALANCE: 'ยอดเงินคงเหลือ',
        SNAPID: 'Snap ID',
        DATETIME: Other.TH.OTHER.DATETIME,
        REF: 'รหัสรายการ',
        STATUS: Other.TH.OTHER.STATUS,
        TOTAL: 'จำนวนเงินทั้งหมด',
        NET: 'จำนวนเงิน',
        DISCOUNT: 'ส่วนลด',
        FEE: 'ค่าธรรมเนียม'
      }
    },
    SKYLANE_SUMMARY_MERCHANT: {
      TITLE: 'Skylane Summary Merchant Report',
      ISSEARCH: 'คุณยังไม่ได้ค้นหาข้อมูล',
      SEARCH_NOTFOUND: 'ไม่พบข้อมูล Skylane Merchant',
      BTN_EXPORT: Other.TH.OTHER.EXPORT,
      SEARCH: {
        BTN_SEARCH: Other.TH.OTHER.SEARCH,
        DATETIME: Other.TH.OTHER.DATETIME,
        START_DATE: Other.TH.OTHER.STARTDATE,
        END_DATE: Other.TH.OTHER.ENDDATE,
        STATUS: Other.TH.OTHER.STATUS,
        TYPE: Other.TH.OTHER.TYPE,
        TO: 'ถึง'
      },
      TABLE: {
        MERCHANTID: 'Merchant ID',
        WALLETID: 'Wallet ID',
        TAXID: 'Tax ID',
        MERCHANTNAME: 'Merchant Name',
        OWNERNAME: 'Owner Name',
        OWNERMOBILENO: 'Owner Mobile No',
        CURRENCY: 'สกุลเงิน',
        TRANSACTIONSTATUS: 'Transaction Status',
        BALANCE: 'ยอดเงินคงเหลือ'
      }
    },
    SUMMARY_WALLET: {
      TITLE: 'Summary Wallet Report',
      ISSEARCH: 'คุณยังไม่ได้ค้นหาข้อมูล',
      SEARCH_NOTFOUND: 'ไม่พบข้อมูล Summary Wallet.',
      BTN_EXPORT: Other.TH.OTHER.EXPORT,
      SEARCH: {
        BTN_SEARCH: Other.TH.OTHER.SEARCH,
        DATETIME: 'วันที่สมัคร',
        START_DATE: Other.TH.OTHER.STARTDATE,
        END_DATE: Other.TH.OTHER.ENDDATE,
        STATUS: Other.TH.OTHER.STATUS,
        TYPE: Other.TH.OTHER.TYPE,
        TO: 'ถึง'
      },
      TABLE: {
        NAME: 'Name',
        TYPE: Other.TH.OTHER.TYPE,
        MOBILE: 'Mobile No.',
        BALANCE: 'Balance'
      }
    },
    RECONCILE_PRODUCT: {
      TITLE_FOOD_COURT: 'สรุปยอดสินค้าศูนย์อาหาร',
      TITLE_TAKE_HOME: 'สรุปยอดสินค้าร้านค้ากลับบ้าน',
      SEARCH_NOTFOUND_FOOD_COURT: 'ไม่พบข้อมูลสรุปยอดสินค้าศูนย์อาหาร',
      SEARCH_NOTFOUND_TAKE_HOME: 'ไม่พบข้อมูลสรุปยอดสินค้าร้านค้ากลับบ้าน',
      BTN_EXPORT: Other.TH.OTHER.EXPORT,
      SEARCH: {
        SEARCH: '',
        DATETIME: Other.TH.OTHER.DATE,
        STATUS: Other.TH.OTHER.STATUS,
        CHANNAL: 'ช่องทางชำระ',
        BTN_SEARCH: Other.TH.OTHER.SEARCH,
        BRANCH: 'สาขา',
        ALL_BRANCH: 'สาขาทั้งหมด',
        ALL_CHANNAL: 'ช่องทางชำระทั้งหมด',
        ALL_STATUS: 'สถานะทั้งหมด'
      },
      TABLE: {
        DATETIME: Other.TH.OTHER.DATETIME,
        STATUS: Other.TH.OTHER.STATUS,
        CHANAL: 'ช่องทางชำระ',
        PRODUCT_NAME: 'ชื่อสินค้า',
        MERCHANT_NAME: 'ชื่อร้านค้า'
      }
    },
    RECONCILE_BILL: {
      TITLE_FOOD_COURT: 'สรุปยอดรายการศูนย์อาหาร',
      TITLE_TAKE_HOME: 'สรุปยอดรายการร้านค้ากลับบ้าน',
      SEARCH_NOTFOUND_FOOD_COURT: 'ไม่พบข้อมูลสรุปยอดรายการศูนย์อาหาร',
      SEARCH_NOTFOUND_TAKE_HOME: 'ไม่พบข้อมูลสรุปยอดรายการร้านค้ากลับบ้าน',
      BTN_EXPORT: Other.TH.OTHER.EXPORT,
      SEARCH: {
        SEARCH: '',
        DATETIME: Other.TH.OTHER.DATE,
        STATUS: Other.TH.OTHER.STATUS,
        CHANNAL: 'ช่องทางชำระ',
        BTN_SEARCH: Other.TH.OTHER.SEARCH,
        BRANCH: 'สาขา',
        ALL_BRANCH: 'สาขาทั้งหมด',
        ALL_CHANNAL: 'ช่องทางชำระทั้งหมด',
        ALL_STATUS: 'สถานะทั้งหมด',
        ForceApprove: 'รายการบังคับสำเร็จ',
        ForceApproveALL: 'รายการทั้งหมด'
      },
      TABLE: {
        DATETIME: Other.TH.OTHER.DATETIME,
        STATUS: Other.TH.OTHER.STATUS,
        CHANAL: 'ช่องทางชำระ',
        AMOUNT: 'จำนวนเงิน',
        MERCHANT_NAME: 'ชื่อร้านค้า'
      }
    },
    FULL_TAX_INVOICE: {
      TITLE: 'รายงานออกใบกำกับภาษีเเบบเต็ม',
      SEARCH_NOTFOUND: 'ไม่พบข้อมูลรายงานออกใบกำกับภาษีเเบบเต็ม',
      BTN_EXPORT: Other.TH.OTHER.EXPORT,
      SEARCH: {
        SEARCH: '',
        DATETIME: Other.TH.OTHER.DATE,
        BTN_SEARCH: Other.TH.OTHER.SEARCH,
        BRANCH: 'สาขา',
        ALL_BRANCH: 'สาขาทั้งหมด'
      },
      TABLE: {
        NUMBER_NO: 'เลขที่',
        NAME: 'ชื่อ',
        TAX_ID: 'เลขผู้เสียภาษี',
        PHONE_NO: 'เบอร์โทรศัพท์',
        REQUEST_TYPE: 'ประเภทการขอใบกำกับภาษี',
        REQUEST_DATE: 'วันที่เวลาออกใบกำกับภาษี'
      }
    },
    PRODUCT_LIST: {
      TITLE: 'รายงานรายการสินค้า',
      SEARCH_NOTFOUND: 'ไม่พบข้อมูลรายงานรายการสินค้า',
      BTN_EXPORT: Other.TH.OTHER.EXPORT,
      SEARCH: {
        SEARCH: '',
        DATETIME: Other.TH.OTHER.DATE,
        BTN_SEARCH: Other.TH.OTHER.SEARCH,
        BRANCH: 'สาขา',
        ALL_BRANCH: 'สาขาทั้งหมด'
      },
      TABLE: {
        VENDOR_ID: 'รหัสร้านค้า',
        VENDOR_NAME: 'ชื่อร้านค้า',
        PRODUCT_ID: 'รหัสสินค้า',
        PRODUCT_NAME: 'ชื่อสินค้า',
        PRICE: 'ราคา'
      }
    },
    ReportTxn: {
      TITLE: 'Txn Report',
      TABLE: {
        DATETIME: 'Date Time',
        MERCHANT_NAME: 'Merchant Name',
        MERCHANT_ID: 'Merchant ID',
        MERCHANT_ACCOUNT_NO: 'Merchant Account No',
        MERCHANT_TID: 'Merchant Tid'
      }
    },
    ReportExports: {
      TITLE: 'Exports List',
      TABLE: {
        DATETIME: 'Date Time',
        REPORTNAME: 'Report Name',
        REPORTTYPE: 'Report Type',
        REPORTDOWNLOADBTN: 'Download',
        REPORTDATE: 'Report Date'
      },
      SEARCH_NOTFOUND: 'ไม่พบข้อมูล',
      SEARCH: {
        FILENAME: 'ชื่อไฟล์',
        START_DATE: 'วันที่',
        BTN_SEARCH: 'ค้นหา'
      }
    }
  },
  EN: {
    TRANSACTIONS: {
      TITLE: 'Transaction Report',
      BTN_EXPORT: Other.EN.OTHER.EXPORT,
      BTN_SEARCH: Other.EN.OTHER.SEARCH,
      DATETIME: Other.EN.OTHER.DATE,
      STATUS: Other.EN.OTHER.STATUS,
      TYPE: Other.EN.OTHER.TYPE,
      TABLE: {
        DATETIME: Other.EN.OTHER.DATETIME,
        REF: 'Ref. No',
        STATUS: Other.EN.OTHER.STATUS,
        TOTAL: 'Total'
      }
    },
    PAYMENTS: {
      TITLE: 'Payment Report',
      ISSEARCH: 'You have not searched',
      SEARCH_NOTFOUND: 'Could not find the Data Payment.',
      BTN_EXPORT: Other.EN.OTHER.EXPORT,
      SEARCH: {
        BTN_SEARCH: Other.EN.OTHER.SEARCH,
        DATETIME: Other.EN.OTHER.DATE,
        START_DATE: Other.EN.OTHER.STARTDATE,
        END_DATE: Other.EN.OTHER.ENDDATE,
        STATUS: Other.EN.OTHER.STATUS,
        TYPE: Other.EN.OTHER.TYPE,
        TO: 'To'
      },
      TABLE: {
        DATETIME: Other.EN.OTHER.DATETIME,
        REF: 'Ref. No',
        STATUS: Other.EN.OTHER.STATUS,
        TOTAL: 'Total'
      }
    },
    RECONNILE: {
      TITLE: 'Reconcile Report',
      ISSEARCH: 'You have not searched',
      SEARCH_NOTFOUND: 'Could not find the Data Payment.',
      BTN_EXPORT: Other.EN.OTHER.EXPORT,
      SEARCH: {
        BTN_SEARCH: Other.EN.OTHER.SEARCH,
        DATETIME: Other.EN.OTHER.DATETIME,
        START_DATE: Other.EN.OTHER.STARTDATE,
        END_DATE: Other.EN.OTHER.ENDDATE,
        STATUS: Other.EN.OTHER.STATUS,
        TYPE: Other.EN.OTHER.TYPE,
        TO: 'To'
      },
      TABLE: {
        DATETIME: Other.EN.OTHER.DATETIME,
        REF: 'Ref. No',
        STATUS: Other.EN.OTHER.STATUS,
        TOTAL: 'Total'
      }
    },
    SKYLANE_PAYMENTS: {
      TITLE: 'Skylane Payment Report',
      ISSEARCH: 'You have not searched',
      SEARCH_NOTFOUND: 'Could not find the Data Payment.',
      BTN_EXPORT: Other.EN.OTHER.EXPORT,
      SEARCH: {
        BTN_SEARCH: Other.EN.OTHER.SEARCH,
        DATETIME: Other.EN.OTHER.DATETIME,
        START_DATE: Other.EN.OTHER.STARTDATE,
        END_DATE: Other.EN.OTHER.ENDDATE,
        STATUS: Other.EN.OTHER.STATUS,
        TYPE: Other.EN.OTHER.TYPE,
        TO: 'To'
      },
      TABLE: {
        TRANSACTIONTIMESTAMP: 'Transaction TimeStamp',
        DATETIME: Other.EN.OTHER.DATETIME,
        TRANSACTIONTYPE: 'Transaction Type',
        TRANSACTIONSTATUS: 'Transaction Status',
        PAYMENTMETHOD: 'Payment Method',
        MERCHANT_NAME: 'Merchant Name',
        TERMINALID: 'Terminal ID',
        NET: 'Net',
        DISCOUNT: 'Discount',
        FEE: 'Fee',
        TOTAL: 'Total',
        WALLETID: 'Wallet ID',
        PAYERNAME: 'Payer name',
        DESCRIPTION: 'Description',
        LAT: 'Lattitude',
        LON: 'Longtitude',
        REF: 'Ref. No',
        STATUS: Other.EN.OTHER.STATUS
      }
    },
    SKYLANE_SUMMARY_CONSUMER: {
      TITLE: 'Skylane Summary Consumer Report',
      ISSEARCH: 'You have not searched',
      SEARCH_NOTFOUND: 'Could not find the Data Summary Consumer.',
      BTN_EXPORT: Other.EN.OTHER.EXPORT,
      SEARCH: {
        BTN_SEARCH: Other.EN.OTHER.SEARCH,
        DATETIME: Other.EN.OTHER.DATETIME,
        START_DATE: Other.EN.OTHER.STARTDATE,
        END_DATE: Other.EN.OTHER.ENDDATE,
        STATUS: Other.EN.OTHER.STATUS,
        TYPE: Other.EN.OTHER.TYPE,
        TO: 'To'
      },
      TABLE: {
        WALLETUPDATETIME: 'Wallet Update Time',
        CITIZENID: 'Citizen ID',
        NAME: 'Name',
        PHONENO: 'Phone No',
        CURRENCY: 'Currency',
        BALANCE: 'Balance',
        SNAPID: 'Snap ID',
        DATETIME: Other.EN.OTHER.DATETIME,
        REF: 'Ref. No',
        STATUS: Other.EN.OTHER.STATUS,
        TOTAL: 'Total',
        NET: 'Net',
        DISCOUNT: 'Discount',
        FEE: 'Fee'
      }
    },
    SKYLANE_SUMMARY_MERCHANT: {
      TITLE: 'Skylane Summary Merchant Report',
      ISSEARCH: 'You have not searched',
      SEARCH_NOTFOUND: 'Could not find the Data Skylane Merchant',
      BTN_EXPORT: Other.EN.OTHER.EXPORT,
      SEARCH: {
        BTN_SEARCH: Other.EN.OTHER.SEARCH,
        DATETIME: Other.EN.OTHER.DATETIME,
        START_DATE: Other.EN.OTHER.STARTDATE,
        END_DATE: Other.EN.OTHER.ENDDATE,
        STATUS: Other.EN.OTHER.STATUS,
        TYPE: Other.EN.OTHER.TYPE,
        TO: 'To'
      },
      TABLE: {
        MERCHANTID: 'Merchant ID',
        WALLETID: 'Wallet ID',
        TAXID: 'Tax ID',
        MERCHANTNAME: 'Merchant Name',
        OWNERNAME: 'Owner Name',
        OWNERMOBILENO: 'Owner Mobile No',
        CURRENCY: 'Currency',
        TRANSACTIONSTATUS: 'Transaction Status',
        BALANCE: 'Balance'
      }
    },
    SUMMARY_WALLET: {
      TITLE: 'Summary Wallet Report',
      ISSEARCH: 'You have not searched',
      SEARCH_NOTFOUND: 'Could not find the Data Summary Wallet.',
      BTN_EXPORT: Other.EN.OTHER.EXPORT,
      SEARCH: {
        BTN_SEARCH: Other.EN.OTHER.SEARCH,
        DATETIME: 'Registered Date',
        START_DATE: Other.EN.OTHER.STARTDATE,
        END_DATE: Other.EN.OTHER.ENDDATE,
        STATUS: Other.EN.OTHER.STATUS,
        TYPE: Other.EN.OTHER.TYPE,
        TO: 'To'
      },
      TABLE: {
        NAME: 'Name',
        TYPE: Other.EN.OTHER.TYPE,
        MOBILE: 'Mobile No.',
        BALANCE: 'Balance'
      }
    },
    RECONCILE_PRODUCT: {
      TITLE_FOOD_COURT: 'Reconcile Product Food Court',
      TITLE_TAKE_HOME: 'Reconcile Product Take Home',
      SEARCH_NOTFOUND_FOOD_COURT: 'Could not find the Data Reconcile Product Food Court.',
      SEARCH_NOTFOUND_TAKE_HOME: 'Could not find the Data Reconcile Product Take Home.',
      BTN_EXPORT: Other.EN.OTHER.EXPORT,
      SEARCH: {
        SEARCH: '',
        DATETIME: Other.EN.OTHER.DATE,
        STATUS: Other.EN.OTHER.STATUS,
        CHANNAL: 'Payment Channel',
        BTN_SEARCH: Other.EN.OTHER.SEARCH,
        BRANCH: 'Branch',
        ALL_BRANCH: 'All Branch',
        ALL_CHANNAL: 'All Payment Channel',
        ALL_STATUS: 'All Status'
      },
      TABLE: {
        DATETIME: Other.EN.OTHER.DATETIME,
        STATUS: Other.EN.OTHER.STATUS,
        CHANAL: 'Payment Channel',
        PRODUCT_NAME: 'Product Name',
        MERCHANT_NAME: 'Merchant Name'
      }
    },
    RECONCILE_BILL: {
      TITLE_FOOD_COURT: 'Reconcile Bill Food Court',
      TITLE_TAKE_HOME: 'Reconcile Bill Take Home',
      SEARCH_NOTFOUND_FOOD_COURT: 'Could not find the Data Reconcile Bill Food Court.',
      SEARCH_NOTFOUND_TAKE_HOME: 'Could not find the Data Reconcile Bill Take Home.',
      BTN_EXPORT: Other.EN.OTHER.EXPORT,
      SEARCH: {
        SEARCH: '',
        DATETIME: Other.EN.OTHER.DATE,
        STATUS: Other.EN.OTHER.STATUS,
        CHANNAL: 'Payment Channel',
        BTN_SEARCH: Other.EN.OTHER.SEARCH,
        BRANCH: 'Branch',
        ALL_BRANCH: 'All Branch',
        ALL_CHANNAL: 'All Payment Channel',
        ALL_STATUS: 'All Status',
        ForceApprove: 'Force Success',
        ForceApproveALL: 'All Transaction'
      },
      TABLE: {
        DATETIME: Other.EN.OTHER.DATETIME,
        STATUS: Other.EN.OTHER.STATUS,
        CHANAL: 'Payment Channel',
        AMOUNT: 'Amount',
        MERCHANT_NAME: 'Merchant Name'
      }
    },
    FULL_TAX_INVOICE: {
      TITLE: 'Full Tax Invoice Report',
      SEARCH_NOTFOUND: 'Could not find the Data Full Tax Invoice.',
      BTN_EXPORT: Other.EN.OTHER.EXPORT,
      SEARCH: {
        SEARCH: '',
        DATETIME: Other.EN.OTHER.DATE,
        BTN_SEARCH: Other.EN.OTHER.SEARCH,
        BRANCH: 'Branch',
        ALL_BRANCH: 'All Branch'
      },
      TABLE: {
        NUMBER_NO: 'No',
        NAME: 'Name',
        TAX_ID: 'TAX ID',
        PHONE_NO: 'Tel',
        REQUEST_TYPE: 'Request Type',
        REQUEST_DATE: 'Request Date / Time'
      }
    },
    PRODUCT_LIST: {
      TITLE: 'Product Lists Report',
      SEARCH_NOTFOUND: 'Could not find the Data Product Lists.',
      BTN_EXPORT: Other.EN.OTHER.EXPORT,
      SEARCH: {
        SEARCH: '',
        DATETIME: Other.EN.OTHER.DATE,
        BTN_SEARCH: Other.EN.OTHER.SEARCH,
        BRANCH: 'Branch',
        ALL_BRANCH: 'All Branch'
      },
      TABLE: {
        VENDOR_ID: 'Vendor Id',
        VENDOR_NAME: 'Vendor Name',
        PRODUCT_ID: 'Product Id',
        PRODUCT_NAME: 'Product Name',
        PRICE: 'Price'
      }
    },
    ReportTxn: {
      TITLE: 'Transaction Report',
      TABLE: {
        DATETIME: 'Date Time',
        MERCHANT_NAME: 'Merchant Name',
        MERCHANT_ID: 'Merchant ID',
        MERCHANT_ACCOUNT_NO: 'Merchant Account No',
        MERCHANT_TID: 'Merchant Tid'
      }
    },
    ReportExports: {
      TITLE: 'Exports List',
      TABLE: {
        DATETIME: 'Date Time',
        REPORTNAME: 'Report Name',
        REPORTTYPE: 'Report Type',
        REPORTDOWNLOADBTN: 'Download',
        REPORTDATE: 'Report Date'
      },
      SEARCH_NOTFOUND: 'No found export',
      SEARCH: {
        FILENAME: 'File Name ',
        START_DATE: 'Start Date',
        BTN_SEARCH: 'Search'
      }
    }
  }
}
