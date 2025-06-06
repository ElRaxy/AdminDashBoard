import React, { useState, useEffect } from 'react'
import '../css/recentSales.css'
import CardFilter from './CardFilter.jsx'
import RecentSalesTable from './RecentSalesTable.jsx'

function RecentSales() {
    const [items, setItems] = useState([])
    const [filter, setFilter] = useState('Today')
    const handleFilterChange = (filter) => {
        setFilter(filter)
    }

    const fetchItems = async () => {
        const response = await fetch('http://localhost:4000/recentorders')
        const data = await response.json()
        setItems(data)
    }
            
    useEffect(() => {
        fetchItems()
    }, [])

    return (
        <div className="card recent-sales overflow-auto" id="recent-sales">
            <CardFilter filterChange={handleFilterChange} />
            <div className="card-body">
                <h5 className="card-title">
                    Recent Sales <span>| {filter}</span>
                </h5>
                <RecentSalesTable items={items} />
            </div>
        </div> 
    )
}

export default RecentSales
