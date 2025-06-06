import React from 'react'
import profileImg from '../images/profile-img.jpg'

function NavAvatar() {
  /**
   * Maneja las acciones del perfil de usuario como ver perfil, configuración, etc.
   * @param {string} action - La acción a realizar (perfil, configuración, ayuda, cerrar sesión)
   */
  const handleProfileAction = (action) => {
    switch(action) {
      case 'profile':
        // Navegar a la página de perfil
        console.log('Navegar a página de perfil')
        break
      case 'settings':
        // Navegar a configuración de cuenta
        console.log('Navegar a página de configuración')
        break
      case 'help':
        // Abrir documentación de ayuda
        console.log('Abrir documentación de ayuda')
        break
      case 'logout':
        // Manejar cierre de sesión
        console.log('Procesar cierre de sesión')
        break
      default:
        break
    }
  }

  return (
    <li className='nav-item dropdown pe-3'>
      <button 
        type="button"
        className='nav-link nav-profile d-flex align-items-center pe-0' 
        data-bs-toggle='dropdown'
        aria-expanded="false"
      >
        <img src={profileImg} alt='Profile' className='rounded-circle' />
        <span className='d-none d-md-block dropdown-toggle ps-2'>Alex M</span>
      </button>
      
      <ul className='dropdown-menu dropdown-menu-end dropdown-menu-arrow profile'>
        <li className='dropdown-header'>
          <h6>Alex</h6>
          <p>Web Developer</p>
        </li>

        <li>
          <hr className='dropdown-divider' />
        </li>

        <li>
          <button 
            className='dropdown-item d-flex align-items-center' 
            onClick={() => handleProfileAction('profile')}
          >
            <i className='bi bi-person'></i>
            <span>Mi Perfil</span>
          </button>
        </li>

        <li>
          <hr className='dropdown-divider' />
        </li>

        <li>
          <button 
            className='dropdown-item d-flex align-items-center' 
            onClick={() => handleProfileAction('settings')}
          >
            <i className='bi bi-gear'></i>
            <span>Configuración</span>
          </button>
        </li>

        <li>
          <hr className='dropdown-divider' />
        </li>

        <li>
          <button 
            className='dropdown-item d-flex align-items-center' 
            onClick={() => handleProfileAction('help')}
          >
            <i className='bi bi-question-circle'></i>
            <span>¿Necesitas Ayuda?</span>
          </button>
        </li>

        <li>
          <hr className='dropdown-divider' />
        </li>

        <li>
          <button 
            className='dropdown-item d-flex align-items-center' 
            onClick={() => handleProfileAction('logout')}
          >
            <i className='bi bi-box-arrow-in-right'></i>
            <span>Cerrar Sesión</span>
          </button>
        </li>
      </ul>
    </li>
  )
}

export default NavAvatar
