import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import petsData from '../PetCard/data/petData.json'; // Make sure this path is correct

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
    <div className="cardContainer">
      {petsData
        .filter((pet) => favorites[pet.id])
        .map((pet) => (
          <div key={pet.id} className="card">
            <Link
              to={`/pet/profile/${pet.id}`}
              className="card-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 className="pet-title">{pet.name}</h2>
              <img src={pet.image} alt={pet.name} className="card-image" />
             
            </Link>
            <button
              className={`pet-fav-button ${favorites[pet.id] ? 'fav' : 'addfav'}`}
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
