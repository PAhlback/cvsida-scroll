import React from 'react'

import ExperienceCard from './ExperienceCard'
import EducationCard from './EducationCard'

const Resume = () => {
  return (
    <>
      <section id='resume' className='resume experience'>
          <h2>RESUMÉ</h2>
          <h3>EXPERIENCE</h3>
          <a href="resume" className='full-resume-button'><h6>Click here for my full resumé</h6></a>
          <section className='work-experience'>
            <ExperienceCard />
          </section>
      </section>

      <section className='resume education'>
        <h3>EDUCATION</h3>
        <a href="resume" className='full-resume-button'><h6>Click here for my full resumé</h6></a>
        <section className='work-experience education-cards'>
          <EducationCard />
        </section>
      </section>
    </>
  )
}

export default Resume