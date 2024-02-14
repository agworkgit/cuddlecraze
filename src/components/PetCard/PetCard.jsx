import './pet-card.css'
import React from 'react';
import FavouriteIcon from '../PetCard/FavouriteIcon';

const PetCard = ({item}) => {
    return (
            <div className="pet-card" key={item.id}>
                <div className='pet-card-item'>
                    <div className="pet-card">
                        <div>
                            <img className="card-image" src={ item.image } alt= { item.name } />
                                <div className="card-overlay-list">
                                    <p className="rezerved-tag">Reserved</p>
                                    <div className='pet-card-info'>
                                        <h1 className="pet-title">{ item.name }</h1>
                                        <p className='pet-location'>Location: <span className='pet-location'>{ item.location }</span></p>
                                        <button className='button pet-card-button'>Adopt</button>
                                    </div>
                                    <p className="pet-subtitle"> { item.description} </p>
                                    <div className='pet-card-tags'>
                                            <span className='breed-tag'>{ item.breed }</span>
                                            <span className='preference-tag'>{ item.age } years old</span>
                                            <span className='support-tag'>{ item.specialRequirements }</span>
                                    </div>
                                    <FavouriteIcon />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    );
}

export default PetCard;