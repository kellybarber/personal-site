import React, { Component } from 'react'
import { leftArrow, rightArrow } from '../helpers/icons'

class WorkModalGallery extends Component {

  state = { photoIndex: 0 }

  handleSlideRight = () => {
    
  }

  handleSlideLeft = () => {

  }

  render() {


    return (
      <div className='work-modal__photos'>
        <button>{leftArrow}</button>
        <img src={this.props.photos[this.state.photoIndex]} alt=''/>
        <button>{rightArrow}</button>
      </div>
    )
  }
}

export default WorkModalGallery