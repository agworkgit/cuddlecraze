import './pet-page.css'
import React, {useEffect, useState} from 'react'

function PetProfile() {

    const petData = JSON.parse(localStorage.getItem("selectedDog"))
    const [favorites, setFavorites] = useState({});

  useEffect(() => {
    const petFavorites = localStorage.getItem('petFavorites');
    if (petFavorites) {
      setFavorites(JSON.parse(petFavorites));
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const petFavorites = localStorage.getItem('petFavorites');
      if (petFavorites) {
        setFavorites(JSON.parse(petFavorites));
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const toggleFavorite = () => {
    const updatedFavorites = { ...favorites };
    if (updatedFavorites[petData.id]) {
      delete updatedFavorites[petData.id];
    } else {
      updatedFavorites[petData.id] = true;
    }
    setFavorites(updatedFavorites);
    localStorage.setItem('petFavorites', JSON.stringify(updatedFavorites));
  };


    return (
        <div className="pet-card">
            <div className='pet-card-item'>
                <div className="pet-card">
                    <div>
                        <div className="cardd">
                            <div className="card-bodyy">
                                <h1>{petData.name}</h1>
                            </div>
                        </div>
                        <div className="cardd text-bg-dark">
                            <img src={petData.image} className="card-img pet-pic" alt="..."/>
                        </div>

                        <div className="card-pet">
                            <div className="card-body">
                            <button
                                className={`pet-card-fav-button ${favorites[petData.id] ? 'fav' : 'addfav'}`}
                                onClick={toggleFavorite}>
                                {favorites[petData.id] ? '💖 Added!' : '🤍 Add to favourites'}
                            </button>
                                <h1>Breed</h1>
                                <p>{petData.breed}</p>
                                <br></br>
                                <h1>Age</h1>
                                <p>{petData.age} years old</p>
                                <br></br>
                                <h1>Location</h1>
                                <p>{petData.location}</p>
                                <br></br>
                                <h1>Special Requirement</h1>
                                <p>{petData.specialRequirements}</p>
                                <br></br>
                                <h1>My Details</h1>
                                <p>{petData.description}</p>
                                <br></br>
                                <h1>Adoption Details</h1>
                                <p>Once you've found 'the one', add to your favourites. Contact our team and
                                    arrange to visit them - taking your completed application form with you.
                                    Staff or volunteers at the centre will discuss with you the information you've
                                    provided and the needs of the dog you've chosen.
                                    If they believe that both you and your chosen dog are a good match then
                                    they'll arrange for you to meet.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PetProfile;