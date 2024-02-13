import petData from '../../components/PetCard/data/petData.json';
import { useState } from 'react';
import PetCard from '../../components/PetCard/PetCard';

function SearchFilters() {
    const [selectedBreed, setSelectedBreed] = useState(petData);
    const [selectedLocation, setSelectedLocation] = useState(petData);
  
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

    console.log(filteredDogs)

    const clearFilters = () => {
    setSelectedBreed(petData)
    setSelectedLocation(petData)
    }
    return (
        <div>
        
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

        <button onClick={clearFilters}>Clear All filters</button>

        <div id="pets-content" className='pets-content grid'>
            {filteredDogs.map((item) => (
                <PetCard key={item.id} item={item} />
            ))}
        </div>
    </div>
    )
}

export default SearchFilters