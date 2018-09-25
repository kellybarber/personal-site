import React  from 'react'

const WorkCard = ({ info, handleShowModal }) => {
  return (
    <div className='work-card' onClick={handleShowModal(info)}>
      <img className='work-card__image' src={info.logo} alt=''/>
    </div>
  )
}

export default WorkCard