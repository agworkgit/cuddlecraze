import './pet-page.css'
import ConnectionEmail from '../../components/ConnectionEmail/ConnectionEmail'

function PetProfile() {
    return (
        <div className="pet-card">
            <div className='pet-card-item'>
                <div className="pet-card">
                    <div>
                        <br></br>
                        <div className="cardd">
                            <div className="card-bodyy">
                                <p><h1>Stella</h1></p>
                            </div>
                        </div>
                        <br></br>
                        <div className="cardd text-bg-dark">
                            <img src="./images/stella.jpg" class="card-img" alt="..."/>
                                <div className="card-img-overlay">
                                    <h5 className="card-title">This is Stella</h5>
                                    <p className="card-text">Likes: Small Balls, Chicken, Naps.</p>
                                    <p>Hates: Daisy the Cat</p>
                                    <p className="card-text"><small>Child friendly</small></p>
                                </div>
                        </div>
                        
                        <div className="card-pet">
                            <div className="card-body">
                                <p><h1>Adoption</h1></p>
                                <p>Stella has been here for a week so far, she has had all her jabs.</p>
                                <p><h1>My Details</h1></p>
                                <p>Once the mischievous companion of emperors, and later the mascot of Holland's royal House of Orange, 
                                    the small but solid Pug is today adored by his millions of fans around the world. 
                                    Pugs live to love and to be loved in return. The Pug's motto is the Latin phrase 'multum in parvo' - 
                                    'a lot in a little' an apt description of this small but muscular breed. 
                                    They come in three colors: silver or apricot-fawn with a black face mask, or all black. 
                                    The large round head, the big, sparkling eyes, and the wrinkled brow give Pugs a range of human-like 
                                    expressions 'surprise, happiness, curiosity' that have delighted owners for centuries.</p>
                                <p><h1>Adoption Details</h1></p>
                                <p>Once you've found 'the one', add to your favourites, or contact our team using the Contact Form below.
                                    Staff or volunteers at the centre will discuss with you the information you've
                                    provided and the needs of the dog you've chosen. At this point we will arrange an appointment visit them
                                    If they believe that both you and your chosen dog are a good match then
                                    they'll arrange for you to meet.
                                </p>
                                <ConnectionEmail />
                                <p></p>
                            </div>
                        </div>

                        {/* <img className="card-image" src="./images/stella.jpg" alt="Betsy" />
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
                            </div> */}
                        {/* <FavouriteIcon /> */}
                        {/* </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PetProfile;