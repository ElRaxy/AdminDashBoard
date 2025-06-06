import React, { useState, useEffect } from 'react'
import '../css/topSelling.css'
import CardFilter from './CardFilter.jsx'
import TopSellingItem from './TopSellingItem.jsx'

function TopSelling() {
    const [items, setItems] = useState([])
    const [filter, setFilter] = useState('Today')
    
    const handleFilterChange = (filter) => {
        setFilter(filter)
    }
    
    const fetchData = async () => {
        const response = await fetch('http://localhost:4000/topselling')
        const data = await response.json()
        setItems(data)
    }
            
    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div className='card' id="top-selling">
            <CardFilter filterChange={handleFilterChange} />

            <div className="card-body">
                <h5 className="card-title">
                    Top Selling <span>| {filter}</span>
                </h5>

                <div className="top-selling">
                    <div className="table-responsive">
                        <table className="table table-borderless">
                            <thead>
                                <tr>
                                    <th scope='col'>Preview</th>
                                    <th scope='col'>Product</th>
                                    <th scope='col'>Price</th>
                                    <th scope='col'>Sold</th>
                                    <th scope='col'>Revenue</th>
                                </tr>
                            </thead>
                            <tbody>
                                {items && items.length > 0 && items.map((item) => (
                                    <TopSellingItem key={item.__id || item._id} item={item} />
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopSelling
