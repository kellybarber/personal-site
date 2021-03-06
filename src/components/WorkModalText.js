import React from 'react'

const WorkModalText = ({ text }) => (
  <div className='work-modal__text'>
    <div className='work-modal__title'>
      <h2>{text.title}</h2>
    </div>
    <div className='work-modal__summary'>
      {text.summary}
    </div>
  </div>
)

export default WorkModalText