import './highlight-card.css';
import petData from '../PetCard/data/petData.json'
import { Link } from 'react-router-dom';

function HighlightCard() {

    return ( 
        <div className="highlight-cards">
            <Link to='/pets-page'>
            <div className="highlight-info grid">
            <div className='highlight-card-item'>
                <div className="highlight-card primary-card">
                    <div>
                        <img id='1' className="hero-image" src={petData[9].image} alt={petData[9].name} />
                        <div className="card-overlay-highlight-primary">
                            <h1 className="card-title-primary">{petData[9].name}</h1>
                            <p className="card-subtitle-primary">Our top star this month is none other than this lovely lady.</p>
                        </div>
                    
                    </div>
                </div>
            </div>
            
            <div className='highlight-card-item'>
                <div className="highlight-card">
                    <div>
                        <img className="hero-image" src={petData[8].image} alt={petData[8].name} />
                        <div className="card-overlay-highlight">
                            <h1 className="card-title">{petData[8].name}</h1>
                            <p className="card-subtitle">Tom is a little old but with a big heart. Loves to romp in the forest</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='highlight-card-item'>
                <div className="highlight-card">
                    <div>
                        <img className="hero-image" src={petData[13].image} alt={petData[13].name} />
                        <div className="card-overlay-highlight">
                        <h1 className="card-title">{petData[13].name}</h1>
                            <p className="card-subtitle">We pledge allegiance to our bestest boi, the Pup-mmander In Chief</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='highlight-card-item'>
                <div className="highlight-card">
                    <div>
                        <img className="hero-image" src={petData[1].image} alt={petData[1].name} />
                        <div className="card-overlay-highlight">
                        <h1 className="card-title">{petData[1].name}</h1>
                            <p className="card-subtitle">Betsy is an adorable lass. Her capacity for love is as big as her ears.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='highlight-card-item'>
                <div className="highlight-card">
                    <div>
                        <img className="hero-image" src={petData[11].image} alt={petData[11].name} />
                        <div className="card-overlay-highlight">
                        <h1 className="card-title">{petData[11].name}</h1>
                            <p className="card-subtitle">Looks like this fashionable customer is taking an apic voyage straight to our hearts</p>
                        </div>
                    </div>
                </div>    
            </div>
            
        </div>
        </Link>
        </div>
     );
}

export default HighlightCard;