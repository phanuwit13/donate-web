import React, { Component } from 'react'
import {} from '../../theme/scss/components/Form/Detail.scss'
export default class Detail extends Component {
  constructor (props) {
    super(props)
    this.state = {
      data: []
    }
  }
  componentDidMount () {
    this.setValue()
    console.log(this.props)
  }

  setValue = () => {
    this.setState({
      data: this.props.location.state.data
    })
  }
  render () {
    return (
      <div>
        <div className='detail-box'>
          <div className='detail-content'>
            <div className='detail-head'>
              <div className='detail-title2'><span>ชื่อโครงการ</span></div>
              <div className='detail-name2'><span>{this.state.data.title}</span></div>
            </div>
            <div className='detail-left'>
              <img className='img-detail' src={ '../../../static/images/project-img/sub-img/' + this.state.data['sub-img1'] } alt='...' />
              <img className='img-detail' src={ '../../../static/images/project-img/sub-img/' + this.state.data['sub-img2'] } alt='...' />
            </div>
            <div className='detail-right'>
              <div className='detail-title'><span>ชื่อโครงการ</span></div>
              <div className='detail-name'><span>{this.state.data.title}</span></div>
              <div className='detail-detail'><pre>{ this.state.data.detail }</pre></div>
              <div><a href='#donate' type='button' className='btn btn-light detail-button'>ร่วมบริจาค</a></div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
