import React from 'react'

function RecentSalesTable({ items }) {
  /**
   * Determina la clase de estado apropiada para la insignia
   * @param {string} status - El estado actual del pedido
   * @returns {string} La clase Bootstrap correspondiente al estado
   */
  const handleStatus = status => {
    switch (status) {
      case 'Approved':
        return 'success'
      case 'Pending':
        return 'warning'
      case 'Rejected':
        return 'danger'
      default:
        return 'success'
    }
  }

  /**
   * Abre la vista detallada del pedido
   * @param {Object} order - Los detalles del pedido a mostrar
   */
  const handleViewOrder = (order) => {
    // Implementación para ver detalles del pedido
    console.log('Ver detalles del pedido:', order)
  }

  /**
   * Abre la vista detallada del producto
   * @param {Object} product - Los detalles del producto a mostrar
   */
  const handleViewProduct = (product) => {
    // Implementación para ver detalles del producto
    console.log('Ver detalles del producto:', product)
  }

  return (
    <div className="table-responsive">
      <table>
        <thead>
          <tr>
            <th scope='col'>#</th>
            <th scope='col'>Customer</th>
            <th scope='col'>Product</th>
            <th scope='col'>Price</th>
            <th scope='col'>Status</th>
          </tr>
        </thead>
        <tbody>
          {items && items.map(item => (
            <tr key={item._id}>
              <th scope='row'>
                <button 
                  onClick={() => handleViewOrder(item)}
                  className="border-0 bg-transparent p-0"
                  aria-label={`Ver pedido #${item.number}`}
                >
                  {item.number}
                </button>
              </th>
              <td>{item.customer}</td>
              <td>
                <button 
                  onClick={() => handleViewProduct(item)}
                  className='text-primary border-0 bg-transparent p-0'
                  aria-label={`Ver producto ${item.product}`}
                >
                  {item.product}
                </button>
              </td>
              <td>${item.price.toFixed(2)}</td>
              <td>
                <span className={`badge bg-${handleStatus(item.status)}`}>{item.status}</span>
              </td>
            </tr>
          ))}        
        </tbody>
      </table>
    </div>
  )
}

export default RecentSalesTable
