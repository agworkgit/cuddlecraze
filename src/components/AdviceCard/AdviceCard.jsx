import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './advice-card.css';
import './BlogPost.css';

const AdviceCard = ({ advice }) => {
  const [readStatus, setReadStatus] = useState({});
  const [favorites, setFavorites] = useState({});

  const toggleReadStatus = (id) => {
    setReadStatus((prevStatus) => ({
      ...prevStatus,
      [id]: !prevStatus[id],
    }));
  };

  const toggleFavorite = (id) => {
    setFavorites((prevFavorites) => ({
      ...prevFavorites,
      [id]: !prevFavorites[id],
    }));
  };

  return (
    <div>
      <div className="section-border"></div>
      <div className="advice-card-container">
        {advice.map((adviceItem) => (
          <div key={adviceItem.id} className="advice-card">
            <Link
              to={{
                pathname: `/advice/blog/${adviceItem.id}`,
                state: {
                  ...adviceItem, // Pass all properties from the adviceItem object
                },
              }}
              className="card-link"
              target="_blank"
            >
              <img src={adviceItem.image} alt={adviceItem.title} className="card-image" />
              <div className="card-info">
                <h2 className="advice-title">{adviceItem.title}</h2>
                <p className="min-read">{adviceItem.minutes} min read</p>
              </div>
            </Link>
            <div className="card-buttons">
              <div className="blog-post-keywords">
                {adviceItem.keywords.map((keyword, index) => (
                  <button key={index} className="keyword-button">
                    {keyword}
                  </button>
                ))}
              </div>
              <button
                className={`blog-post-read-button ${readStatus[adviceItem.id] ? 'read' : ''}`}
                onClick={() => toggleReadStatus(adviceItem.id)}
              >
                {readStatus[adviceItem.id] ? '✔️ Read!' : '📰 Mark as Read'}
              </button>
              <button
                className={`blog-post-fav-button ${favorites[adviceItem.id] ? 'fav' : 'addfav'}`}
                onClick={() => toggleFavorite(adviceItem.id)}
              >
                {favorites[adviceItem.id] ? '💖 Added!' : '🤍 Add to favourites'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdviceCard;