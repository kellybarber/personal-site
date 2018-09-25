import React, { Component } from 'react'
import { defaultInfo, werk } from '../helpers/companyInfo'
import WorkCard from './WorkCard'
import WorkModal from './WorkModal'

class Work extends Component {
  state = { showModal: false, modalInfo: defaultInfo }

  handleShowModal = modalInfo => {
    this.setState(prevState => ({ 
      showModal: !prevState.showModal, 
      modalInfo
    }))
  }

  handleCloseModal = () => {
    this.setState(prevState => ({ showModal: !prevState.showModal }))
  }

  render() {
    const { showModal, modalInfo } = this.state

    return (
      <div className='work'>
        <div className='work-title'>
          <h1>Work Experience</h1>
        </div>
        <div className='work-shelf'> 
          <WorkCard info={werk} handleShowModal={this.handleShowModal}/>
          <WorkModal showModal={showModal} modalInfo={modalInfo} handleCloseModal={this.handleCloseModal}/>
        </div>
      </div>
    )
  }
}

export default Work