import React, { Component } from 'react'
import './Style.css'
export default class Launch extends Component {
  render() {
    return (
      <div alt='launch' className='launch' >
        <img src={this.props.image} />
        <div className='launch-content'>
        <div className='content-info'>
        <h1>{this.props.title}</h1>
        <h1>{this.props.date}</h1>
        </div>
        <p>{this.props.content}</p>
        </div>
      </div>
    )
  }
}
