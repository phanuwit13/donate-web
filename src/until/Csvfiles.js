import filesaver from 'file-saver'

class Csv {
  header = []
  rows = []
  footer = []
  csvFileType = 'data:text/csv;charset=utf-8,'

  hasArray = (data) => {
    if (!data.isArray) {
      throw new Error('Data is not Array.')
    }
  }

  setDataHeader = (data) => {
    this.hasArray(data)
    this.header = data
  }

  setDataRows = (data) => {
    this.hasArray(data)
    this.rows = data
  }

  setDataFooter = (data) => {
    this.hasArray(data)
    this.footer = data
  }

  formatData = (data, filename) => {
    filesaver.saveAs(new Blob([ '\ufeff', data ],
    { type: 'data:text/csv;charset=utf-8' }),
    filename, true)
  }
}

// let csvData = 'data:text/csv;charset=utf-8,';
// saveAs(new Blob([ '\ufeff', dataString ],
// { type: 'text/plain;charset=utf-8' }),
// filename, noAutoBOM)

export default new Csv()
