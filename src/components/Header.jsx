import React, { useState } from 'react'
import '../css/header.css'
import Logo from './Logo';
import SearchBar from './SearchBar';
import Nav from './Nav';
import { useTheme } from '../contexts/ThemeContext';

function Header() {
  const [showSearch, setShowSearch] = useState(false);
  const { darkMode, toggleTheme } = useTheme();

  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };

  return (
    <header id='header' className='header fixed-top d-flex align-items-center'>
      {/* {logo} */}
      <Logo />
      <div className="search-toggle d-lg-none">
        <i className="bi bi-search" onClick={toggleSearch}></i>
      </div>
      {/* {search bar} */}
      <SearchBar isVisible={showSearch} />
      {/* {theme toggle} */}
      <div className="theme-toggle ms-2">
        <button 
          className="btn btn-link" 
          onClick={toggleTheme}
          aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
        >
          <i className={`bi bi-${darkMode ? 'sun' : 'moon'}-fill`}></i>
        </button>
      </div>
      {/* {nav} */}
      <Nav />
    </header>
  )
}

export default Header;