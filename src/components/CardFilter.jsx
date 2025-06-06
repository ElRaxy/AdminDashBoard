import React from 'react'

/**
 * Componente para filtrar datos por período de tiempo
 * @param {Function} filterChange - Función que maneja el cambio de filtro
 */
function CardFilter({filterChange}) {
  /**
   * Maneja el clic en una opción de filtro
   * @param {string} filter - El período de tiempo seleccionado
   */
  const handleClick = (filter) => {
    filterChange(filter);
  }

  return (
    <div className='filter'>
        <button 
          type="button"
          className='icon border-0 bg-transparent' 
          data-bs-toggle="dropdown"
          aria-expanded="false"
          aria-label="Open filter menu"
        >
            <i className='bi bi-three-dots'></i>
        </button>
        <ul className='dropdown-menu dropdown-menu-end dropdown-menu-arrow'>
            <li className='dropdown-header text-start'>
                <h6>Filter</h6>
            </li>
            <li>
                <button 
                  className='dropdown-item' 
                  onClick={() => handleClick('Today')}
                >
                  Today
                </button>
            </li>
            <li>
                <button 
                  className='dropdown-item' 
                  onClick={() => handleClick('This Month')}
                >
                  This Month
                </button>
            </li>
            <li>
                <button 
                  className='dropdown-item' 
                  onClick={() => handleClick('This Year')}
                >
                  This Year
                </button>
            </li>
        </ul>
    </div>
  )
}

export default CardFilter
