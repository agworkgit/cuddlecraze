// AccountFavourite.js

import React from 'react';
import blogData from '../AdviceCard/data/advice-data.json';
import petsData from '../PetCard/data/petData.json';
import FavoritePostsContainer from './FavoritePostsContainer';
import FavoritePetsContainer from './FavoritePetsContainer';
import './account-favourite.css';

function AccountFavourite() {
  return (
    <div className="favorite-page-container">
      <div className="favorite-column">
        <h2 className="favorite-column-heading">Favorite Posts</h2>
        <FavoritePostsContainer blogData={blogData} />
      </div>
      <div className="favorite-column">
        <h2 className="favorite-column-heading">Favorite Pets</h2>
        <FavoritePetsContainer petsData={petsData} />
      </div>
    </div>
  );
}

export default AccountFavourite;
