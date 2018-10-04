import React from 'react'
import Header from '../components/Header'
import About from '../components/About'
import Social from '../components/Social'
import Work from '../components/Work'
import Contact from '../components/Contact'

export default () => (
  <div className='home__container'>
    <Header/>
    <Social/>
    <About/>
    <Work title='professional projects' />
    <Contact/>
  </div>
)