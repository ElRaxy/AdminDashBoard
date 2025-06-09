import React from 'react'
import '../css/nav.css'
import NavNotice from './NavNotice';
import NavMessage from './NavMessage';
import NavAvatar from './NavAvatar';
import ThemeToggle from './ThemeToggle';

function Nav() {
  return (
    <nav className='header-nav ms-auto'>
        <ul className='d-flex align-items-center'>
            <NavNotice />
            <NavMessage />
            <ThemeToggle />
            <NavAvatar />
        </ul>
    </nav>
  )
}

export default Nav;