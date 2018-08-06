import React from 'react'
import content from '../helpers/content'

export default () => (
  <div className="about">
    <div className="about__header--box">
      <h2 className="about__header">Web <br/> Developer</h2>
    </div>
    <div className="about__content--box">
      <p className="about__content">
        {content.about}
      </p>
    </div>
  </div>
)