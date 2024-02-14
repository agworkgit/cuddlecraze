import './pet-page.css'
import React, {useEffect, useState} from 'react'

// const petData = ({name, location, age, image, breed, 
//                 specialRequirements, description}) => {

//                     const [dogs, dogData] = useState([]);

//                     useEffect ( () => {
//                         fetch('./petData.json')
//                         .then((response) => response.json())
//                         .then((data) => {
//                             dogData(data.id)
//                             console.log('logging out dogs: ${dogs[0].name}');
//                         })
//                         .catch((error) => console.error('Error fetching characters:', error));
//                     },[]);
//                 }


function PetProfile() {

    const petData = JSON.parse(localStorage.getItem("selectedDog"))

    return (
        <div className="pet-card">
            <div className='pet-card-item'>
                <div className="pet-card">
                    <div>
                        <div className="cardd">
                            <div className="card-bodyy">
                                <p><h1>{petData.name}</h1></p>
                            </div>
                        </div>
                        <div className="cardd text-bg-dark">
                            <img src={petData.image} className="card-img" alt="..."/>
                        </div>

                        <div className="card-pet">
                            <div className="card-body">
                                <p><h1>Breed</h1></p>
                                <p>{petData.breed}</p>
                                <p><h1>Age</h1></p>
                                <p>{petData.age} years old</p>
                                <p><h1>Location</h1></p>
                                <p>{petData.location}</p>
                                <p><h1>Special Requirement</h1></p>
                                <p>{petData.specialRequirements}</p>
                                <p><h1>My Details</h1></p>
                                <p>{petData.description}</p>
                                <p><h1>Adoption Details</h1></p>
                                <p>Once you've found 'the one', add to your favourites. Contact our team and
                                    arrange to visit them - taking your completed application form with you.
                                    Staff or volunteers at the centre will discuss with you the information you've
                                    provided and the needs of the dog you've chosen.
                                    If they believe that both you and your chosen dog are a good match then
                                    they'll arrange for you to meet.
                                </p>
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