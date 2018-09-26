import React from 'react'
import WorkModalText from './WorkModalText'
import WorkModalGallery from './WorkModalGallery'

const WorkModal = ({ showModal, modalInfo, handleCloseModal }) => (
  <div className={`work-modal ${showModal ? 'work-modal__show' : 'work-modal__hide'}`}>
    <div className='work-modal__background' onClick={handleCloseModal}></div>
    <div className='work-modal__content'>
      <button className='work-modal__close' onClick={handleCloseModal}>&times;</button>
      <WorkModalText text={modalInfo.text}/>
      <WorkModalGallery photos={modalInfo.photos}/>
    </div>
  </div>
)

export default WorkModal