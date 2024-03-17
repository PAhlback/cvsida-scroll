import React, { useState } from 'react';
import { FaAlignJustify } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';
import { Link } from 'react-scroll';

import './Header.css'

const Header = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  function toggleHamburger() {
    setHamburgerOpen(!hamburgerOpen)
    console.log(hamburgerOpen)
  };

  return (
    <>
        <header className='page-header'>
            <nav className='navbar' style={{display: `${hamburgerOpen ? 'inline' : 'none'}`}}>
                <ul>
                    <li><Link to="home" smooth duration={500} className='scroll-link'>HOME</Link></li>
                    <li><Link to="about" smooth duration={500} className='scroll-link'>ABOUT</Link></li>
                    <li><Link to="resume" smooth duration={500} className='scroll-link'>RESUMÉ</Link></li>
                    <li><a href="resume" className='scroll-link'>FULL RESUMÉ</a></li>
                    <li><Link to="projects" smooth duration={500} className='scroll-link'>PROJECTS</Link></li>
                    <li><Link to="footer" smooth duration={500} className='scroll-link'>LINKS</Link></li>
                </ul>
            </nav>
            <div className='hamburger' onClick={ toggleHamburger }><FaAlignJustify /></div>
        </header>
    </>
  )
}

export default Header