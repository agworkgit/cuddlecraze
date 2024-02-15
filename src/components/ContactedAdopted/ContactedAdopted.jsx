import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Contacted-adopted.css';

function ContactedPetsContainer() {
  const [contactedPets, setContactedPets] = useState([]);

  useEffect(() => {
    // Fetch contacted pets from local storage when component mounts
    const contactedPetsData = JSON.parse(localStorage.getItem('petData')) || [];
    setContactedPets(contactedPetsData.filter(pet => pet.contacted));

    // Refresh the contacted pets every second
    const intervalId = setInterval(() => {
      const refreshedContactedPetsData = JSON.parse(localStorage.getItem('petData')) || [];
      setContactedPets(refreshedContactedPetsData.filter(pet => pet.contacted));
    }, 1000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  const removeFromList = (petId) => {
    // Retrieve contacted pets data from local storage
    let contactedPetsData = JSON.parse(localStorage.getItem('petData')) || [];
    // Update the contacted status for the corresponding pet to false
    contactedPetsData = contactedPetsData.map(pet => {
      if (pet.id === petId) {
        return { ...pet, contacted: false };
      }
      return pet;
    });
    // Update the local storage with the updated contacted pets data
    localStorage.setItem('petData', JSON.stringify(contactedPetsData));
    // Update the state to reflect the change
    setContactedPets(contactedPetsData.filter(pet => pet.contacted));
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
          <button className="remove-button" onClick={() => removeFromList(pet.id)}> ❌ Remove from list</button>
        </div>
      ))}
    </div>
  );
}

export default ContactedPetsContainer;
