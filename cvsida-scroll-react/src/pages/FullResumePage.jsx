import React from 'react'

import ProfilePicture from '../assets/images/Pontus-rounded-profile.png'
import FullExperienceCard from '../components/FullExperienceCard'
import FullEducationCard from '../components/FullEducationCard'

const FullResumePage = () => {
  return (
    <>
      <section className='full-resume-header'>
        <h2>RESUMÉ</h2>
        <article className='full-resume-introduction'>
          <img src={ProfilePicture} alt="" />
          <div className='full-resume-ingress'>
            <p>
              This is my full resume. If you wish to download the resume click the button below.
            </p>
            <a href="resume" className='full-resume-button'><h6>Download resumé</h6></a>
          </div>
        </article>
      </section>

      <section className='full-resume-wrapper'>
        <section className='full-resume-experience'>
          <h2>EDUCATION</h2>
          <FullEducationCard />
        </section>
        <div className='full-resume-line'></div>
        <section className='full-resume-education'>
          <h2>EXPERIENCE</h2>
          <FullExperienceCard />
        </section>
      </section>
    </>
  )
}

export default FullResumePage