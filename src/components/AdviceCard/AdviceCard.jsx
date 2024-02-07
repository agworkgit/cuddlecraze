import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './advice-card.css';
import FavouriteIconAdvice from './FavouriteIconAdvice';

const AdviceCard = ({ advice }) => {
  const [readStatus, setReadStatus] = useState({});
  const [favorites, setFavorites] = useState([]);

  const toggleReadStatus = (id) => {
    setReadStatus((prevStatus) => ({
      ...prevStatus,
      [id]: !prevStatus[id],
    }));
  };

  const toggleFavorite = (id) => {
    setFavorites((prevFavorites) =>
      prevFavorites.includes(id)
        ? prevFavorites.filter((fav) => fav !== id)
        : [...prevFavorites, id]
    );
  };

  return (
    <div>
      <div className="section-border"></div> {/* Add this div with the section-border class */}
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
              <button
                className={`read-button ${readStatus[adviceItem.id] ? 'read' : ''}`}
                onClick={() => toggleReadStatus(adviceItem.id)}
              >
                {readStatus[adviceItem.id] ? 'Mark as Unread' : 'Mark as Read'}
              </button>
              <FavouriteIconAdvice
                isFavourite={favorites.includes(adviceItem.id)}
                onClick={() => toggleFavorite(adviceItem.id)}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdviceCard;
