import React, { useState } from 'react'
import '../css/webTrafic.css'
import CardFilter from './CardFilter.jsx'
import WebTraficChart from './WebTraficChart.jsx'

function WebTrafic() {
    const [filter, setFilter] = useState('Today')
    const handleFilterChange = (filter) => {
        setFilter(filter)
    }

    return (
        <div className='card web-traffic' id='web-traffic'>
            <CardFilter filterChange={handleFilterChange} />
            <div className="card-body pb-0">
                <h5 className="card-title">
                    Web Traffic <span>| {filter}</span>
                </h5>
                <div className="chart-container">
                    <WebTraficChart />
                </div>
            </div>
        </div>
    )
}

export default WebTrafic
