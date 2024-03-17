import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <>
        <header className='page-header'>
            <nav>
                <ul>
                    <li>HOME</li>
                    <li>ABOUT</li>
                    <li>RESUMÉ</li>
                    <li>PROJECTS</li>
                    <li>LINKS</li>
                </ul>
            </nav>
            <div className='hamburger'><h3>H</h3></div>
        </header>
    </>
  )
}

export default Header