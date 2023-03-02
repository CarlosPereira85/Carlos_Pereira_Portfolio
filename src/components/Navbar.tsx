import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-scroll';

import { NavLink } from 'react-router-dom';

import './Navbar.css'

const Navbar = () => {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const closeMenu = () => setClick(false)

    return (
        <div className='header'>
            <nav className='navbar'>
                
                    
              
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={30} style={{ color: '#ffffff' }} />)
                        : (<FaBars size={30} style={{ color: '#ffffff' }} />)}

                </div>
                <div  className={click ? "nav-menu active" : "nav-menu"}>
                <div className='nav-item'>
                    <NavLink to='/' target="_blank">Home</NavLink>
                    </div>
                    <div  className='nav-item'>
                        <Link to="tech" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}> <span style={{textDecorationLine:'underline'}}>Tech Stack</span> </Link>
                    </div>
                   
                    <div className='nav-item' >
                        <Link to="projects" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}><span style={{textDecoration:'underline'}}> </span> Projects</Link>
                    </div>
                    <div className='nav-item'>
                    <NavLink to='/about' target="_blank">About</NavLink>
                    </div>
                    <div className='nav-item'>
                    <NavLink to='/contact' target="_blank">Contact</NavLink>
                    </div>
                   
                   
                </div>
              
            
            </nav>
           
           
        </div>
    )
}

export default Navbar