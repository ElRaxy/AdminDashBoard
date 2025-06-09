import React from 'react'
import '../css/header.css'
import Logo from './Logo';
import SearchBar from './SearchBar';
import Nav from './Nav';
import { useTheme } from '../contexts/ThemeContext';

function Header() {
  const { darkMode, toggleTheme } = useTheme();

  const toggleSidebar = () => {
    document.body.classList.toggle('toggle-sidebar');
    const sidebar = document.querySelector('.sidebar');
    if (sidebar) {
      sidebar.classList.toggle('active');
    }
  }

  return (
    <header id='header' className='header fixed-top d-flex align-items-center'>
      <div className="d-flex align-items-center justify-content-between">
        <Logo />
        <i className='bi bi-list toggle-sidebar-btn' onClick={toggleSidebar}></i>
      </div>
      <SearchBar />
      <Nav />
    </header>
  )
}

export default Header;