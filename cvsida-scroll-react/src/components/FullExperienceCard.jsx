import React from 'react'

import Data from '../data/full-experience.json'

const FullExperienceCard = () => {
  return (
    <>
        {
            Data.map((d) => {
                return(
                    <article className='full-experience-card' key={d.id}>
                        <h3 className='full-experience-card-head'>{d.workplace}</h3>
                        <h5 className='full-experience-card-title'>{d.title}</h5>
                        <h6 className='full-experience-card-dur-loc'>{d.duration}, {d.location}</h6>
                        <p className='full-experience-card-desc'>{d.description}</p>
                    </article>
                )
            })
        }
    </>
  )
}

export default FullExperienceCard