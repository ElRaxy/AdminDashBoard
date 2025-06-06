import React from 'react'
import '../css/searchBar.css'

/**
 * Componente de barra de búsqueda que se puede mostrar/ocultar
 * @param {boolean} isVisible - Controla la visibilidad de la barra de búsqueda
 */
function SearchBar({ isVisible }) {
  return (
    <div className={`search-bar ${isVisible ? 'search-bar-show' : ''}`}>
        <form className='search-form d-flex align-items-center' method='POST' action="#">
            <input 
              type="text" 
              name="query" 
              placeholder='Search' 
              title='Enter search keyword' 
            />
            <button 
              type='submit' 
              title='Search'
              aria-label="Search"
            >
                <i className='bi bi-search'></i>
            </button>
        </form>
    </div>
  )
}

export default SearchBar