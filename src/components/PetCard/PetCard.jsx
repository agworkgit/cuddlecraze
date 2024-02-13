/* eslint react/prop-types: 0 */

import './pet-card.css'
import { Link } from 'react-router-dom';
import FavouriteIcon from '../PetCard/FavouriteIcon';

function PetCard(props) {
    return (
        <div className="pet-card">
            <div className="pet-content grid">
                <div className='pet-card-item'>
                    <div>
                        <img className="card-image" src={props.image} alt={props.name} />
                        <div className="card-overlay-list">
                            <p className="rezerved-tag">Reserved</p>
                            <div className='pet-card-info'>
                                <h1 className="pet-title">{props.name}</h1>
                                <p className='pet-location'>Location: <span className='pet-location'>{props.location}</span></p>
                                <Link
                                    to={{
                                        pathname: "/pet-page",
                                        state: { pet: props } // Pass the pet data as part of the state object
                                    }}
                                    className="pet-link"
                                >
                                    <button className='button pet-card-button'>
                                        Adopt
                                    </button>
                                </Link>

                            </div>
                            <p className="pet-subtitle"> {props.description} </p>
                            <div className='pet-card-tags'>
                                <span className='breed-tag'>{props.breed}</span>
                                <span className='preference-tag'>{props.age} years old</span>
                                <span className='support-tag'>{props.specialRequirements}</span>
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
