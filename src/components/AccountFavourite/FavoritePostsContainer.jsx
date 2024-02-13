import React from 'react';
import blogData from '../AdviceCard/data/advice-data.json';
import petsData from '../PetCard/data/petData.json';
import FavoritePostsContainer from './FavoritePostsContainer';
import FavoritePetsContainer from './FavoritePetsContainer';

function AccountFavourite() {
    const columnStyle = {
        display: 'flex',
        justifyContent: 'space-between',
    };

    const columnItemStyle = {
        width: '50%',
    };

    return (
        <div style={columnStyle}>
            <div style={columnItemStyle}>
                <h2>Favorite Posts</h2>
                <FavoritePostsContainer blogData={blogData} />
            </div>
            <div style={columnItemStyle}>
                <h2>Favorite Pets</h2>
                <FavoritePetsContainer petsData={petsData} />
            </div>
        </div>
    );
}

export default AccountFavourite;