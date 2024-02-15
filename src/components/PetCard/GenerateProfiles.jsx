import React, { useEffect } from 'react';
import petData from './data/petData.json';

const GenerateProfiles = ({ id }) => {
  useEffect(() => {
    generateProfiles(petData);
  }, [id]); // Add id to dependency array

  const generateProfiles = (data) => {
    data.forEach((pet) => {
      if (pet.id === parseInt(id)) {
        const profile = `
          Name: ${pet.name}
          Breed: ${pet.breed}
          Location: ${pet.location}
          Description: ${pet.description}
          Age: ${pet.age} years old
          Special Requirements: ${pet.specialRequirements}
        `;
        console.log(profile);
      }
    });
  };

  return <></>; // This component doesn't render anything visible
};

export default GenerateProfiles;
