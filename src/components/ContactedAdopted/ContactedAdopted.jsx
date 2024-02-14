import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Contacted-adopted.css'
function ContactedPetsContainer() {
  const [contactedPets, setContactedPets] = useState([]);

  useEffect(() => {
    const contactedPetsData = JSON.parse(localStorage.getItem('petData')) || [];
    setContactedPets(contactedPetsData.filter(pet => pet.contacted));
  }, []);

  const updateContactedPets = () => {
    const contactedPetsData = JSON.parse(localStorage.getItem('petData')) || [];
    setContactedPets(contactedPetsData.filter(pet => pet.contacted));
  };

  const removeFromList = (petId) => {
    // Update the local storage with the updated contacted pets data
    const updatedContactedPets = contactedPets.filter(pet => pet.id !== petId);
    localStorage.setItem('petData', JSON.stringify(updatedContactedPets));
    // Update the state to reflect the change
    setContactedPets(updatedContactedPets);
  };

  return (
    <div className="cardContainer">
      {contactedPets.map((pet) => (
        <div key={pet.id} className="card">
          <Link
            to={`/pet/profile/${pet.id}`}
            className="card-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className="pet-title">{pet.name}</h2>
            <img src={pet.image} alt={pet.name} className="card-image" />
         
          </Link>
          <button className = 'remove-button' onClick={() => removeFromList(pet.id)}> ❌ Remove from list</button>
        </div>
      ))}
    </div>
  );
}

export default ContactedPetsContainer;
