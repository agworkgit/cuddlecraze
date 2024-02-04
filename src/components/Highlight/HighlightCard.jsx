import './highlight.css';

function HighlightCard() {
    return ( 
        <div className="highlight-card">
            <div className="highlight-info grid">
            <div className='card-item'>
                <div className="highlight-card primary-card">
                    <div>
                        <img className="hero-image" src="./images/woofy.jpg" alt="Betsy" />
                        <div className="card-overlay-highlight-primary">
                            <h1 className="card-title-primary">Pet Name</h1>
                            <p className="card-subtitle-primary">Our top start this month is none other than this charming fella.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='card-item'>
                <div className="highlight-card">
                    <div>
                        <img className="hero-image" src="./images/jack.jpg" alt="Betsy" />
                        <div className="card-overlay-highlight">
                        <h1 className="card-title">Pet Name</h1>
                            <p className="card-subtitle">Our top start this month is none other than this charming fella.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='card-item'>
                <div className="highlight-card">
                    <div>
                        <img className="hero-image" src="./images/stella.jpg" alt="Betsy" />
                        <div className="card-overlay-highlight">
                        <h1 className="card-title">Pet Name</h1>
                            <p className="card-subtitle">Our top start this month is none other than this charming fella.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='card-item'>
                <div className="highlight-card">
                    <div>
                        <img className="hero-image" src="./images/charlie.jpg" alt="Betsy" />
                        <div className="card-overlay-highlight">
                        <h1 className="card-title">Pet Name</h1>
                            <p className="card-subtitle">Our top start this month is none other than this charming fella.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='card-item'>
                <div className="highlight-card">
                    <div>
                        <img className="hero-image" src="./images/betsy.jpg" alt="Betsy" />
                        <div className="card-overlay-highlight">
                        <h1 className="card-title">Pet Name</h1>
                            <p className="card-subtitle">Our top start this month is none other than this charming fella.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
     );
}

export default HighlightCard;