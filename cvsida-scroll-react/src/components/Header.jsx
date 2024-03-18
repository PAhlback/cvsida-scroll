import React, { useState, useEffect } from 'react';
import { FaAlignJustify } from "react-icons/fa6";
import { NavLink, useLocation } from 'react-router-dom';
import { Link } from 'react-scroll';

import './Header.css'

const Header = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const [homeOpen, setHomeOpen] = useState(false);
  const homeRoute = "/";
  const location = useLocation();

  function toggleHamburger() {
    setHamburgerOpen(!hamburgerOpen)
  };

  useEffect(() => {
    if (location.pathname === homeRoute){
      setHomeOpen(true);
    } else {
      setHomeOpen(false);
    }
  }, [location.pathname, homeRoute])

  return (
    <>
        <header className='page-header'>
            <nav className='navbar' style={{display: `${hamburgerOpen ? 'inline' : 'none'}`}}>
                <ul className='primary-nav'>
                    <li><NavLink to="/" className='navlink'>HOME</NavLink></li>
                    <li><NavLink to="resume" className='navlink'>FULL RESUMÉ</NavLink></li>
                </ul>
                <div className='navbar-separator' style={{display: `${homeOpen ? 'block' : 'none'}`}}></div>
                <ul className='secondary-nav' style={{display: `${homeOpen ? 'flex' : 'none'}`}}>
                  <li><Link to="about" smooth duration={500} className='scroll-link'>ABOUT</Link></li>
                  <li><Link to="resume" smooth duration={500} className='scroll-link'>RESUMÉ</Link></li>
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