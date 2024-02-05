import './pet-card.css'
import FavouriteIcon from '../PetCard/FavouriteIcon';

function PetCard() {
    return (
        <div className="pet-card">
            <div className="pet-content grid">
                <div className='pet-card-item'>
                    <div className="pet-card">
                        <div>
                        
                            <img className="card-image" src="./images/stella.jpg" alt="Betsy" />
                            <div className="card-overlay-list">
                                <p className="rezerved-tag">Rezerved</p>
                                <div className='pet-card-info'>
                                <h1 className="pet-title">Pet Name</h1>
                                <p className='pet-location'>Location: <span className='pet-location'>London</span></p>
                                <button className='button pet-card-button'>Adopt</button>
                                </div>
                                <p className="pet-subtitle">Our top start this month is none other than this charming fella.</p>
                                <div className='pet-card-tags'>
                                    <span className='breed-tag'>Crossbreed</span>
                                    <span className='preference-tag'>Can live with dogs</span>
                                    <span className='support-tag'>Needs some support</span>
                                </div>
                                <FavouriteIcon />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PetCard;