import React, { useState, useEffect } from 'react'
import '../css/recentActivity.css'
import CardFilter from './CardFilter.jsx'
import RecentActivityItem from './RecentActivityItem.jsx'
import config from '../config'

function RecentActivity() {
    const [items, setItems] = useState([])
    const [filter, setFilter] = useState('Today')
    const handleFilterChange = (filter) => {
        setFilter(filter)
    }

    const fetchData = async () => {
        const response = await fetch(`${config.apiUrl}/recentactivity`)
        const data = await response.json()
        setItems(data)
    }
            
    useEffect(() => {
        fetchData()
    }, [])
    
    

  return (
    <div className='card'>
      <CardFilter filterChange={handleFilterChange} />

      <div className="card-body">
        <h5 className="card-title">
            Recent Activity <span>| {filter}</span>
        </h5>

        <div className="activity">
            {items && items.length > 0 && items.map((item) => (
                <RecentActivityItem key={item._id} item={item} />
            ))}
        </div>
      </div>
    </div>
  )
}

export default RecentActivity
