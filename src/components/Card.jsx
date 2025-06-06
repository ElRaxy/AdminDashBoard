import React, { useState } from 'react'
import CardFilter from './CardFilter'
import '../css/card.css'

function Card({card}) {
    const [filter, setFilter] = useState('Today')

    const calculateAmount = (baseAmount, filter) => {
        switch(filter) {
            case 'This Month':
                return baseAmount * 30;
            case 'This Year':
                return baseAmount * 365;
            default:
                return baseAmount;
        }
    }

    const calculatePercentage = (basePercentage, filter) => {
        switch(filter) {
            case 'This Month':
                return basePercentage * 1.5;
            case 'This Year':
                return basePercentage * 2;
            default:
                return basePercentage;
        }
    }

    const handleFilterChange = (filter) => {
        setFilter(filter)
    }

    const displayAmount = calculateAmount(card.amount, filter)
    const displayPercentage = calculatePercentage(card.percentage, filter)

    return (
        <div className='card info-card sales-card'>
            <CardFilter filterChange={handleFilterChange} />
            <div className='card-body'>
                <h5 className='card-title'>
                    {card.name}
                    <span>| {filter}</span>
                </h5>

                <div className='d-flex align-items-center'>
                    <div className='card-icon rounded-circle d-flex align-items-center justify-content-center'>
                        <i className={card.icon}></i>
                    </div>

                    <div className='ps-3'>
                        <h6>
                            {card.name === "Revenue" ? "$" + displayAmount.toLocaleString('en-US') : displayAmount.toLocaleString('en-US')}
                        </h6>
                        <div>
                            <span className={`${displayPercentage > 0 ? 'text-success' : 'text-danger'} small pt-1 fw-bold`}>
                                {Math.abs(displayPercentage)}%
                            </span>
                            <span className='text-muted small pt-2 ps-1'>
                                {displayPercentage > 0 ? 'increase' : 'decrease'}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card