import React, {useEffect, useState} from 'react'
import '../css/backToTop.css'

/**
 * Componente que muestra un botón para volver al inicio de la página
 * Se muestra cuando el usuario ha hecho scroll más allá de 100px
 */
function BackToTop() {
    // Estado para controlar la posición del scroll
    const [scroll, setScroll] = useState(0)

    // Efecto para manejar el evento de scroll
    useEffect(() => {
        // Añadir el listener para el evento scroll
        window.addEventListener('scroll', () => {
            setScroll(window.scrollY)
        })
        
        // Limpieza del efecto al desmontar el componente
        return () => {
            window.removeEventListener('scroll', () => {
                setScroll(window.scrollY)
            })
        }
    }, [scroll])

    /**
     * Maneja el evento de clic para volver al inicio de la página
     * Utiliza scroll suave para una mejor experiencia de usuario
     */
    const handleBackToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <button 
            onClick={handleBackToTop} 
            className={`back-to-top d-flex align-items-center justify-content-center ${scroll > 100 ? 'active' : undefined}`}
            aria-label="Volver arriba"
        >
            <i className="bi bi-arrow-up-short"></i>
        </button>
    )
}

export default BackToTop
