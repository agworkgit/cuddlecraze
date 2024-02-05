import './pet-card.css'
import FavouriteIcon from '../PetCard/FavouriteIcon';

function PetCard() {
    return (
        <div className="pet-card">
            <div className="pet-info grid">
                <div className='pet-card-item'>
                    <div className="pet-card">
                        <div>
                        
                            <img className="hero-image" src="./images/woofy.jpg" alt="Betsy" />
                            <div className="card-overlay-list">
                            <p className="rezerved-tag">Rezerved</p>
                                <h1 className="card-title-card">Pet Name</h1>
                                <p className="card-subtitle-card">Our top start this month is none other than this charming fella.</p>
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