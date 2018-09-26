import React, { Component } from 'react'
import { leftArrow, rightArrow } from '../helpers/icons'

class WorkModalGallery extends Component {

  state = { photoIndex: 0 }

  handleSlideLeft = () => {
    const { photoIndex } = this.state

    if (photoIndex > 0) {
      this.setState({ photoIndex: photoIndex - 1 })
    }

  }

  handleSlideRight = () => {
    const { photoIndex } = this.state
    const stop = this.props.photos.length - 1

    if (photoIndex < stop) {
      this.setState({ photoIndex: photoIndex + 1 })
    }
  }

  render() {


    return (
      <div className='work-modal__photos'>
        <button onClick={this.handleSlideLeft}>{leftArrow}</button>
        <img src={this.props.photos[this.state.photoIndex]} alt=''/>
        <button onClick={this.handleSlideRight}>{rightArrow}</button>
      </div>
    )
  }
}

export default WorkModalGallery