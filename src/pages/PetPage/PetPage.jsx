/* eslint react/prop-types: 0 */

import './pet-page.css';
import DogVideos from '../../components/DogVideos/DogVideos';
import PetCard from '../../components/PetCard/PetCard';
import Footer from '../../components/Footer/Footer';
import SectionBorder from '../../components/SectionBorder/SectionBorder';
import PetData from '../../components/PetCard/data/PetData.json';
import AdoptionForm from '../../components/Adoption/AdoptionForm';

function PetPage() {
    return (
        <div id="pet-page" className='pets-container container'>
            <div id="pets-content" className='pets-content section grid'>
                    <PetCard 
                    key={PetData.id}
                    name={PetData.name}
                    location={PetData.location}
                    age={PetData.age}
                    breed={PetData.breed}
                    image={PetData.image}
                    specialRequirements={PetData.specialRequirements}
                    description={PetData.description} />
            </div>
            <SectionBorder/>
            <AdoptionForm />
            <SectionBorder/>
            <DogVideos />
            <SectionBorder/>
            <Footer />
        </div>);
}

export default PetPage;
