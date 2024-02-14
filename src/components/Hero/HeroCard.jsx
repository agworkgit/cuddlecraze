import './hero-card.css'
import './hero.css'
import { Link } from 'react-router-dom';

function HeroCard() {
    return (
        <div className="hero-info grid hero-container">
            <div className='card-item'>
                <div className="hero-card">
                    <div>
                        <img className="hero-image" src="./images/sunset.jpg" alt="Betsy" />
                        <div className="card-overlay">
                            <div className="card-title-hero">Looking To Adopt?</div>
                            <Link to="/pets-page">
                            <a href="" className="button">Click Here</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className='card-item'>
                <div className="hero-card">
                    <div>
                        <img className="hero-image" src="./images/for-a-walk.jpg" alt="Betsy" />
                        <div className="card-overlay">
                            <div className="card-title-hero">Do you need someone to take in a pet you can no longer care for?</div>
                            <a href="" className="button">Click Here</a>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className='card-item'>
                <div className="hero-card">
                    <div>
                        <img className="hero-image" src="./images/baby-dog.jpg" alt="Betsy" />
                        <div className="card-overlay">
                            <div className="card-title-hero">Are you looking for animal services - walkers, minders and nutritionists?</div>
                            <a href="" className="button">Click Here</a>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    );
}

export default HeroCard;