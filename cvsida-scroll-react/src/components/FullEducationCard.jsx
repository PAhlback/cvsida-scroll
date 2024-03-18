import React from 'react'

import Data from '../data/full-education.json'

const FullEducationCard = () => {
  return (
    <>
        {
            Data.map((d) => {
                return(
                    <article className='full-education-card' key={d.id}>
                        <h3 className='full-education-card-head'>{d.nameOfSchool}</h3>
                        <h5 className='full-education-card-title'>{d.programName}, {d.credits}</h5>
                        <h6 className='full-education-card-dur-loc'>{d.duration}, {d.location}</h6>
                        <p className='full-education-card-desc'>{d.description}</p>
                    </article>
                )
            })
        }
    </>
  )
}

export default FullEducationCard