import React from 'react'
import { gitHub, linkedIn } from '../helpers/icons'

export default () => (
  <div className='social'>
    <a className='social__button' href='https://github.com/kellybarber' target='_blank'>
      {gitHub} <span>GitHub</span>
    </a>
    <a className='social__button' href='https://linkedin.com/in/kellyjamesbarber/' target='_blank'>
      {linkedIn} <span>LinkedIn</span>
    </a> 
  </div>
)