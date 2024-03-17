import React from 'react'

import Introduction from '../components/Introduction'
import About from '../components/About'
import Resume from '../components/Resume'
import Projects from '../components/Projects'

const HomePage = () => {
  return (
    <>
        <Introduction />
        <About />
        <Resume />
        <Projects />
    </>
  )
}

export default HomePage