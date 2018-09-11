import React from 'react'

const Navigation = () => (
  <div className='navigation'>
    <input className='navigation__checkbox' type='checkbox' id='nav-toggle'/>
    <label className='navigation__button' htmlFor="nav-toggle">
      <span class="navigation__icon"></span>
    </label>
  </div>
)

export default Navigation