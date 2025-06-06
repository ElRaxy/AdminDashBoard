import React, { useState, useEffect } from 'react'
import '../css/dashBoard.css'
import Card from './Card.jsx'
import Reports from './Reports.jsx'
import RecentSales from './RecentSales.jsx'
import TopSelling from './TopSelling.jsx'
import RecentActivity from './RecentActivity.jsx'
import BudgetReport from './BudgetReport.jsx'
import WebTrafic from './WebTrafic.jsx'
import News from './News.jsx'

function Dashboard() {
    const [cards, setCards] = useState([])

    const fetchData = async () => {
        const response = await fetch('http://localhost:4000/cards')
        const data = await response.json()
        setCards(data)
    }

    useEffect(() => {
        fetchData()
    }, [])
    
    return (
        <section className='dashboard'>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="row">
                            {cards && cards.length > 0 && cards.map(card => (
                                <div key={card.__id} className="col-xxl-4 col-md-6">
                                    <Card card={card} />
                                </div>
                            ))}
                        </div>
                        <div className="row mt-4">
                            <div className="col-12">
                                <Reports />
                            </div>
                        </div>
                        <div className="row mt-4">
                            <div className="col-12">
                                <RecentSales />
                            </div>
                        </div>
                        <div className="row mt-4">
                            <div className="col-12">
                                <TopSelling />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <RecentActivity />
                        <BudgetReport />
                        <WebTrafic />
                        <News />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Dashboard
