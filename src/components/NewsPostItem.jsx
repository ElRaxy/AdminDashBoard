import React from 'react'

function NewsPostItem({item}) {
  /**
   * Abre el artículo completo en un modal o nueva vista
   * @param {Object} item - El artículo de noticias a mostrar
   */
  const handleViewArticle = () => {
    // Implementación para ver artículo completo
    console.log('View full article:', item.title)
  }

  return (
    <div className="post-item clearfix">
      <img src={item.img} alt={item.title} />
      <h4>
        <button 
          onClick={handleViewArticle}
          className="border-0 bg-transparent p-0 text-start"
          aria-label={`Read full article: ${item.title}`}
        >
          {item.title}
        </button>
      </h4>
      <p>{item.subtitle}</p>
    </div>
  )
}

export default NewsPostItem
