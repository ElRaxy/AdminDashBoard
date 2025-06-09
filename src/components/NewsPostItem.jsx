import React from 'react'
import config from '../config'
import defaultImage from '../assets/default-news.jpg'

function NewsPostItem({item}) {
  /**
   * Abre el artículo completo en un modal o nueva vista
   * @param {Object} item - El artículo de noticias a mostrar
   */
  const handleViewArticle = () => {
    // Implementación para ver artículo completo
    console.log('View full article:', item.title)
  }

  const handleImageError = (e) => {
    e.target.src = defaultImage;
  }

  const imageUrl = item.img.startsWith('http') 
    ? item.img 
    : `${config.apiUrl}${item.img}`;

  return (
    <div className="post-item clearfix">
      <img 
        src={imageUrl} 
        alt={item.title}
        className="news-image"
        onError={handleImageError}
      />
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
      <span className="category">{item.category}</span>
    </div>
  )
}

export default NewsPostItem
