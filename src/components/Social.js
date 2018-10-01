import React from 'react'
import { gitHub, linkedIn } from '../helpers/icons'

export default () => (
  <div className='social'>
    <button className='social__button'>
      {gitHub} <span>GitHub</span>
    </button>
    <button className='social__button'>
      {linkedIn} <span>LinkedIn</span>
    </button> 
  </div>
)