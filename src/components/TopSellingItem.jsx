import React from 'react'
import config from '../config'

function TopSellingItem({ item }) {
  /**
   * Abre la vista de detalles del producto seleccionado
   * @param {Object} item - El producto a mostrar
   */
  const handleViewProduct = () => {
    // Implementación para ver detalles del producto
    console.log('View product details:', item.name)
  }

  return (
    <tr className="top-selling-item">
      <th scope='row'>
        <button 
          onClick={handleViewProduct}
          className="border-0 bg-transparent p-0"
          aria-label={`View details for ${item.name}`}
        >
          <div className="product-preview">
            <img 
              src={`${config.apiUrl}/img/${item.preview}`}
              alt={item.name}
            />
          </div>
        </button>
      </th>
      <td>
        <button 
          onClick={handleViewProduct}
          className='text-primary fw-bold border-0 bg-transparent p-0'
        >
          {item.name}
        </button>
      </td>
      <td>${item.price.toFixed(2)}</td>
      <td className='fw-bold'>{item.sold}</td>
      <td>${(item.price * item.sold).toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</td>
    </tr>
  )
}

export default TopSellingItem
