import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import petsData from '../PetCard/data/petData.json';

function FavoritePetsContainer() {
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

  const toggleFavorite = (petId) => {
    const updatedFavorites = { ...favorites };
    if (updatedFavorites[petId]) {
      delete updatedFavorites[petId];
    } else {
      updatedFavorites[petId] = true;
    }
    setFavorites(updatedFavorites);
    localStorage.setItem('petFavorites', JSON.stringify(updatedFavorites));
  };

  return (
    <div className="favorite-pets-container">
      {petsData
        .filter((pet) => favorites[pet.id])
        .map((pet) => (
          <div key={pet.id} className="favorite-card">
            <Link
              to="/pet-page"
              onClick={() => {
                localStorage.setItem("selectedDog", JSON.stringify(pet));
              }}
              target="_blank" // Open link in a new page
              rel="noopener noreferrer" // Security best practice
            >
              <div>
                <h2 className='favorite-card-title'>{pet.name}</h2>
                <img className="favorite-card-image" src={pet.image} alt={pet.name} />
              </div>
            </Link>
            <button
              className={`favorite-card-fav-button ${favorites[pet.id] ? 'fav' : 'addfav'}`}
              onClick={() => toggleFavorite(pet.id)}
            >
              {favorites[pet.id] ? '❌ Remove from favorites' : '🤍 Add to favorites'}
            </button>
          </div>
        ))}
    </div>
  );
}

export default FavoritePetsContainer;
