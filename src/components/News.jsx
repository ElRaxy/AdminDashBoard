import React, { useState, useEffect } from 'react'
import '../css/news.css'
import CardFilter from './CardFilter.jsx'
import NewsPostItem from './NewsPostItem.jsx'
import config from '../config'

/**
 * Componente que muestra las noticias y actualizaciones más recientes
 */
function News() {
    const [news, setNews] = useState([])
    const [filter, setFilter] = useState('Today')

    /**
     * Maneja el cambio de filtro temporal para las noticias
     * @param {string} filter - El nuevo filtro seleccionado
     */
    const handleFilterChange = (filter) => {
        setFilter(filter)
    }

    /**
     * Obtiene los datos de noticias desde la API
     */
    const fetchData = async () => {
        const response = await fetch(`${config.apiUrl}/news`)
        const data = await response.json()
        setNews(data)
    }
            
    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div className='card'>
            <CardFilter filterChange={handleFilterChange} />
            <div className="card-body pb-0">
                <h5 className="card-title">
                    News &amp; Updates <span>| {filter}</span>
                </h5>
                <div className="news">
                    {news && news.length > 0 && news.map((item) => (
                        <NewsPostItem key={item.__id} item={item} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default News
