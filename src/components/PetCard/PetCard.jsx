import React, { useState, useEffect } from 'react';
import './pet-card.css';

const PetCard = ({ item }) => {
  const [favorites, setFavorites] = useState({});

  useEffect(() => {
    const petFavorites = localStorage.getItem('petFavorites');
    if (petFavorites) {
      setFavorites(JSON.parse(petFavorites));
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const petFavorites = localStorage.getItem('petFavorites');
      if (petFavorites) {
        setFavorites(JSON.parse(petFavorites));
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const toggleFavorite = () => {
    const updatedFavorites = { ...favorites };
    if (updatedFavorites[item.id]) {
      delete updatedFavorites[item.id];
    } else {
      updatedFavorites[item.id] = true;
    }
    setFavorites(updatedFavorites);
    localStorage.setItem('petFavorites', JSON.stringify(updatedFavorites));
  };

  return (
    <div className="pet-card">
      <div className="pet-card-item">
        <div>
          <img className="card-image" src={item.image} alt={item.name} />
          <div className="card-overlay-list">
            {/* <p className="rezerved-tag">Reserved</p> */}
            <div className="pet-card-info">
              <h1 className="pet-title">{item.name}</h1>
              <p className="pet-location">
                Location: <span className="pet-location">{item.location}</span>
              </p>
            </div>
            <p className="pet-subtitle">{item.description}</p>
            <div className="pet-card-tags">
              <span className="breed-tag">{item.breed}</span>
              <span className="preference-tag">{item.age} years old</span>
              <span className="support-tag">{item.specialRequirements}</span>
            </div>
          </div>
        </div>
      </div>
      <button
        className={`pet-card-fav-button ${favorites[item.id] ? 'fav' : 'addfav'}`}
        onClick={toggleFavorite}
      >
        {favorites[item.id] ? '💖 Added!' : '🤍 Add to favourites'}
      </button>
    </div>
  );
};

export default PetCard;
