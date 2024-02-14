import React, { useState } from 'react';

function AddPetListing() {
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    age: '',
    image: '',
    breed: '',
    specialRequirements: '',
    description: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const existingData = JSON.parse(localStorage.getItem('petListings')) || [];
    const updatedData = [...existingData, formData];
    localStorage.setItem('petListings', JSON.stringify(updatedData));
    console.log('Form Data:', formData);
    setFormData({
      name: '',
      location: '',
      age: '',
      image: '',
      breed: '',
      specialRequirements: '',
      description: ''
    });
  };

  return (
    <div className="add-pet-container">
      <h2 className="form-title">Add Pet Listing</h2>
      <form onSubmit={handleSubmit} className="add-pet-form">
        <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleInputChange} className="form-input" />
        <input type="text" name="location" placeholder="Location" value={formData.location} onChange={handleInputChange} className="form-input" />
        <input type="number" name="age" placeholder="Age" value={formData.age} onChange={handleInputChange} className="form-input" />
        <input type="text" name="image" placeholder="Image URL" value={formData.image} onChange={handleInputChange} className="form-input" />
        <input type="text" name="breed" placeholder="Breed" value={formData.breed} onChange={handleInputChange} className="form-input" />
        <input type="text" name="specialRequirements" placeholder="Special Requirements" value={formData.specialRequirements} onChange={handleInputChange} className="form-input" />
        <input type="text" name="description" placeholder="Description" value={formData.description} onChange={handleInputChange} className="form-textarea" />
        <button type="submit" className="btn-submit">Submit</button>
      </form>
    </div>
  );
}

export default AddPetListing;
