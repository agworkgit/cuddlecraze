import React, { useState, useEffect } from 'react';
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

  const toggleFavorite = (postId) => {
    setFavorites((prevFavorites) => {
      const updatedFavorites = { ...prevFavorites };
      if (updatedFavorites[postId]) {
        delete updatedFavorites[postId];
      } else {
        updatedFavorites[postId] = true;
      }
      localStorage.setItem('favoritedData', JSON.stringify(updatedFavorites));
      return updatedFavorites;
    });
  };

  useEffect(() => {
    const favoritedData = localStorage.getItem('favoritedData');
    if (favoritedData) {
      setFavorites(JSON.parse(favoritedData));
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const favoritedData = localStorage.getItem('favoritedData');
      if (favoritedData) {
        setFavorites(JSON.parse(favoritedData));
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

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
                  ...adviceItem,
                  // Pass all properties from the adviceItem object
                },
              }}
              className="card-link"
              target="_blank"
            >
              <img src={adviceItem.image} alt={adviceItem.title} className="card-image" />
              <div className="card-info">
                <h2 className="advice-title">{adviceItem.title}</h2>
                <p className="advice-subtitle">{adviceItem.description}</p>
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