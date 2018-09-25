import React, { Component } from 'react'
import { werk } from '../helpers/companyInfo'
import WorkCard from './WorkCard'
import WorkModal from './WorkModal'

class Work extends Component {
  state = { showModal: false }

  handleShowModal = info => {
    console.log(info)
    
  }

  render() {
    return (
      <div className='work'>
        <div className='work-title'>
          <h1>Work Experience</h1>
        </div>
        <div className='work-shelf'> 
          <WorkCard info={werk} handleShowModal={this.handleShowModal}/>

        </div>
      </div>
    )
  }
}

export default Work