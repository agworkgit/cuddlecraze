/* eslint react/prop-types: 0 */

import { useState, useEffect } from 'react';
import './adopted-card.css';

function AdoptedCard(props) {
    const [imageUrl, setImageUrl] = useState(props.image);

    useEffect(() => {
        const fetchRandomImage = async () => {
            const DOG_URL = "https://dog.ceo/api/breeds/image/random";
            const response = await fetch(DOG_URL);
            const data = await response.json();
            setImageUrl(data.message);
        };
        fetchRandomImage();
    }, []); // Empty dependency array ensures this effect runs only once when the component mounts

    return (
        <div className="adopted-card">
            <div className="pet-content grid">
                <div className='pet-card-item'>
                    <div>
                        <img className="card-image" src={imageUrl} alt={props.name} />
                        <div className="card-overlay-list">
                            <p className="rezerved-tag">Adopted</p>
                            <div className='pet-card-info'>
                                <h1 className="pet-title">{props.name}</h1>
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

export default AdoptedCard;
