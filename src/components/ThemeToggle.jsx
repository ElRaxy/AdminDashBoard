import React from 'react'
import { useTheme } from '../contexts/ThemeContext'

function ThemeToggle() {
    const { darkMode, toggleTheme } = useTheme()

    return (
        <li className="nav-item">
            <button
                className="nav-link nav-icon"
                onClick={toggleTheme}
                title={darkMode ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
                aria-label={darkMode ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
            >
                <i className={`bi ${darkMode ? 'bi-sun' : 'bi-moon'}`}></i>
            </button>
        </li>
    )
}

export default ThemeToggle 