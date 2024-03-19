import React from 'react'
import { FaArrowRight } from "react-icons/fa6";

import ExperienceCard from './ExperienceCard.jsx'
import EducationCard from './EducationCard.jsx'

const Resume = () => {
  return (
    <>
      <section id='resume' className='resume experience'>
          <h2 className='short-resume-header'>RESUMÉ</h2>
          <a href="resume" className='full-resume-button'><h6>Full resumé <FaArrowRight className='button-arrow'/></h6></a>
          <h3 className='resume-sub-title'>EXPERIENCE</h3>
          <section className='work-experience'>
            <ExperienceCard />
          </section>
      </section>

      <section className='resume education'>
        <h3 className='resume-sub-title'>EDUCATION</h3>
        <section className='work-experience education-cards'>
          <EducationCard />
        </section>
      </section>
    </>
  )
}

export default Resume