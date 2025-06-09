import React from 'react'
import '../css/recentActivityItem.css'

function RecentActivityItem({ item }) {
  /**
   * Abre la vista detallada de la actividad
   * @param {string} highlight - El texto resaltado del que mostrar detalles
   */
  const handleViewActivityDetails = (highlight) => {
    // Implementación para ver detalles de la actividad
    console.log('Ver detalles de la actividad:', highlight)
  }

  return (
    <div className='activity-item d-flex'>
        <div className="activity-label">{item.time}</div>
        <i className={`bi bi-circle-fill activity-badge ${item.color} align-self-start`}></i>
        {item.highlight === '' ? (
            <div className="activity-content">{item.content}</div>
        ) : (
            <div className="activity-content">
                {item.content.substring(0, item.content.indexOf(item.highlight))}
                <button 
                    onClick={() => handleViewActivityDetails(item.highlight)}
                    className='fw-bold border-0 bg-transparent p-0'
                >
                    {item.highlight}
                </button>
                {item.content.substring(item.content.indexOf(item.highlight) + item.highlight.length)}
            </div>
        )}
    </div>
  )
}

export default RecentActivityItem
