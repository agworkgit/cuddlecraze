import petData from '../../components/PetCard/data/petData.json';
import { useState } from 'react';
import PetCard from '../../components/PetCard/PetCard';
import { Link } from 'react-router-dom';
import React from 'react';
import PetPage from '../../pages/PetPage/PetPage';

const SearchFilters = function () {
    const [selectedBreed, setSelectedBreed] = useState(petData);
    const [selectedLocation, setSelectedLocation] = useState(petData);

    //filter functionality -------------------------
    const allBreeds = new Set(petData.breed)
    const allLocations = new Set(petData.location)

    const filteredDogs = petData.filter(
        (item) => (selectedBreed === petData || selectedBreed === item.breed)
            && (selectedLocation === petData || selectedLocation === item.location)
    )

    const breedSet = new Set(petData.map((p) => p.breed));
    const breedsNoRepeat = Array.from(breedSet).sort();
    const locationSet = new Set(petData.map((p) => p.location));
    const locationsNoRepeat = Array.from(locationSet).sort();

    const clearFilters = () => {
        setSelectedBreed(petData)
        setSelectedLocation(petData)
    }
    //------------------------------------------------
    return (
        <div className='filter-bar section'>

            <select
                onChange={(e) => {
                    setSelectedBreed(e.target.value)
                }}
                value={selectedBreed}
            >
                <option value={""}>Filter By Breed</option>
                {breedsNoRepeat.map((props) => (
                    <option value={props}>{props}</option>
                ))}
            </select>

            <select
                onChange={(e) => {
                    setSelectedLocation(e.target.value)
                }}
                value={selectedLocation}
            >
                <option value="">Filter By Location</option>
                {locationsNoRepeat.map((props) => (
                    <option value={props}>{props}</option>
                ))}
            </select>

            <button className="button" onClick={clearFilters}>Clear All filters</button>

            <div id="pets-content" className='pets-content grid'>
                {filteredDogs.map((item) => (
                    <Link
                        to="/pet-page"
                        onClick={() => {
                            localStorage.setItem("selectedDog", JSON.stringify(item))
                        }}
                    >
                        <PetCard
                            key={item.id}
                            item={item}
                        />
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default SearchFilters