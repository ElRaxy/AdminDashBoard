import React from 'react'

function NavItem({nav}) {
  /**
   * Maneja la navegación a diferentes secciones del dashboard
   * @param {Object} nav - Elemento de navegación que contiene la ruta e información de la sección
   */
  const handleNavigation = () => {
    // Implementación para la navegación entre secciones
    console.log('Navegar a la sección:', nav.name)
  }

  return (
    <li className='nav-item' key={nav._id}>
      <button 
        onClick={handleNavigation}
        className='nav-link collapsed border-0 bg-transparent w-100 text-start'
        aria-label={`Navegar a ${nav.name}`}
      >
        <i className={nav.icon}></i>
        <span>{nav.name}</span>
      </button>
    </li>
  )
}

export default NavItem
