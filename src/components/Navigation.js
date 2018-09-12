import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => (
  <div className='navigation'>
    <input className='navigation__checkbox' type='checkbox' id='nav-toggle'/>
    <label className='navigation__button' htmlFor="nav-toggle">
      <span class="navigation__icon"></span>
    </label>
    <nav className='navigation__nav'>
      <div className='navigation__list'>
        <Link className='navigation__link' to='/'>Home</Link>
        <Link className='navigation__link' to='/resume'>Resume</Link>
        <Link className='navigation__link' to='/blog'>Blog</Link>
      </div>
    </nav>
  </div>
)

export default Navigation