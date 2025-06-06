import React from 'react'
import '../css/logo.css'

/**
 * Componente que muestra el logo y el botón para alternar la barra lateral
 */
function Logo() {
    /**
     * Maneja el evento de alternar la visibilidad de la barra lateral
     */
    const handleToggleSideBar = () => {
        document.body.classList.toggle('toggle-sidebar');
    };

    return (
        <div className='d-flex align-items-center justify-content-between'>
            <a href="/" className='logo d-flex align-items-center'>
                {/* Logo de la aplicación */}
                <span className='d-none d-lg-block'>AdminDashboard</span>
            </a>
            <i 
                className='bi bi-list toggle-sidebar-btn' 
                onClick={handleToggleSideBar}
                role="button"
                aria-label="Toggle sidebar"
            >
            </i>
        </div>
    )
}

export default Logo