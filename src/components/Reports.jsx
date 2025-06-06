import React, { useState } from 'react'
import CardFilter from './CardFilter.jsx'
import ReportCharts from './ReportCharts.jsx'

/**
 * Componente que muestra los reportes con gráficos y filtros de tiempo
 */
function Reports() {
    const [filter, setFilter] = useState('Today')
    
    /**
     * Maneja el cambio de filtro temporal para los reportes
     * @param {string} filter - El nuevo filtro seleccionado
     */
    const handleFilterChange = (filter) => {
        setFilter(filter)
    }

    return (
        <div className="card">
            <CardFilter filterChange={handleFilterChange} />
            <div className="card-body">
                <h5 className="card-title">
                    Reports <span>/ {filter}</span>
                </h5>
                <ReportCharts />
            </div>
        </div>
    )
}

export default Reports
