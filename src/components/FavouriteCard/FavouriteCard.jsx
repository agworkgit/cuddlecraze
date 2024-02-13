/* eslint react/prop-types: 0 */

import './favourite-card.css'

function FavouriteCard(props) {
    return (
        <div className="favourite-card">
            <div className="pet-content grid">
                <div className='pet-card-item'>
                    <div>
                        <img className="card-image" src={props.image} alt={props.name} />
                        <div className="card-overlay-list">
                            <p className="rezerved-tag">Favourite</p>
                            <div className='pet-card-info'>
                                <h1 className="pet-title">{props.name}</h1>
                                <p className='pet-location'>Location: <span className='pet-location'>{props.location}</span></p>
                                <button className='button pet-card-button'>
                                        Adopt
                                    </button>
                            </div>
                            <p className="pet-subtitle"> {props.description} </p>
                            <div className='pet-card-tags'>
                                <span className='breed-tag'>{props.breed}</span>
                                <span className='preference-tag'>{props.age} years old</span>
                                <span className='support-tag'>{props.specialRequirements}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FavouriteCard;
