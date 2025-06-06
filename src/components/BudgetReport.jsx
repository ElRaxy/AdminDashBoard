import React, { useState } from 'react'
import CardFilter from './CardFilter.jsx'
import BudgetChart from './BudgetChart.jsx'
import '../css/budgetReport.css'

/**
 * Componente que muestra el reporte de presupuesto con gráfico y filtros
 */
function BudgetReport() {
    const [filter, setFilter] = useState('Today')

    /**
     * Maneja el cambio de filtro temporal para el reporte de presupuesto
     * @param {string} filter - El nuevo filtro seleccionado
     */
    const handleFilterChange = (filter) => {
        setFilter(filter)
    }
    
    return (
        <div className='card' id="budget-chart">
            <CardFilter filterChange={handleFilterChange} />

            <div className="card-body">
                <h5 className="card-title">
                    Budget Report <span>| {filter}</span>
                </h5>
                <BudgetChart />
            </div>
        </div>
    )
}

export default BudgetReport
