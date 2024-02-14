import React from 'react';
import blogData from '../AdviceCard/data/advice-data.json';
import petsData from '../PetCard/data/petData.json';
import FavoritePostsContainer from './FavoritePostsContainer';
import FavoritePetsContainer from './FavoritePetsContainer';

function AccountFavourite() {
    return (
        <div>
            <h2>Favorite Posts</h2>
            <FavoritePostsContainer blogData={blogData} />
            <h2>Favorite Pets</h2>
            <FavoritePetsContainer petsData={petsData} />
        </div>
    );
}

export default AccountFavourite;