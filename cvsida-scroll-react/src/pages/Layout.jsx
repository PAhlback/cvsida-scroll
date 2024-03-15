import React from 'react'
import { Outlet } from 'react-router-dom'

import Header from '../components/Header'

const Layout = () => {
  return (
    <>
        <Header/>

        <Outlet/>
        
    {/* Footer */}
    </>
  )
}

export default Layout