import React from 'react'

import ExperienceCard from './ExperienceCard'

const Resume = () => {
  return (
    <section className='resume'>
        <h2>RESUMÉ</h2>
        <h3>EXPERIENCE</h3>
        <button className='full-resume-button'><h6>Click here for my full resumé</h6></button>
        <section className='work-experience'>
          <ExperienceCard />
        </section>

    </section>
  )
}

export default Resume