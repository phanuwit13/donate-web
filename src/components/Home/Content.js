import React, { Component } from 'react'
import {} from '../../theme/scss/components/Menu/Content.scss'
export default class Content extends Component {
  // history = useHistory();
  state={data: ''}
  componentDidMount () {
    // eslint-disable-next-line standard/object-curly-even-spacing
    // this.setState({ data: customData})
  }
  toForm (data) {
    this.props.router.push({
      pathname: '/form',
      state: {
        data: data
      }
    })
  }
  render () {
    return (
      <div>
        <div className='content' id='section2'>
          <div className='box-content' >
            <div className='box-head-title' >
              <a className='head-title' aria-current='page' href='#'>
                โครงการทั้งหมด
              </a>
            </div>
            {this.props.data.map((value, index) => {
              return (
                <div key={ index } className='card'>
                  <img src={ '../../../static/images/project-img/' + value.img } className='card-img-top img-content rounded-bottom' />
                  <div className='card-body'>
                    <h5 className='card-title'>{ value.title }</h5>
                    <p className='card-text'>{ value.detail }</p>
                    {/* <div className='card-footer bg-transparent border-success'>Footer</div> */}
                  </div>
                  <div className='footer-card nav justify-content-center'>
                    <a type='button' className='btn btn-light donate-btn' onClick={ () => this.toForm(value) }>ร่วมบริจาค</a>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    )
  }
}
