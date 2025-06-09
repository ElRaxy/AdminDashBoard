import React, { useState } from 'react'

function NewsPostItem({ item }) {
  /**
   * Abre el artículo completo en un modal o nueva vista
   * @param {Object} item - El artículo de noticias a mostrar
   */
  const [imageError, setImageError] = useState(false);

  const handleViewArticle = () => {
    // Implementación para ver artículo completo
    console.log('View full article:', item.title)
  }

  const handleImageError = () => {
    setImageError(true);
  }

  return (
    <div className="post-item clearfix">
      {imageError ? (
        <div className="news-image-fallback">
          <i className="bi bi-image text-secondary"></i>
        </div>
      ) : (
        <img 
          src={item.img} 
          alt={item.title}
          onError={handleImageError}
          className="news-image"
        />
      )}
      <div className="post-content">
        <h4>
          <a href="#">{item.title}</a>
        </h4>
        <p>{item.subtitle}</p>
        <span className="category">{item.category}</span>
      </div>
    </div>
  )
}

export default NewsPostItem
