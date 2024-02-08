import './pets-page.css';
import PetCard from '../../components/PetCard/PetCard';
import Footer from '../../components/Footer/Footer';
import SectionBorder from '../../components/SectionBorder/SectionBorder';
import petData from '../../components/PetCard/data/petData.json';

function PetsPage() {
    const petsContent = $('#pets-content')
    
    return (
        <div id="pets-page" className='pets-container'>
            <div id="pets-content" className='pets-content grid'>
                {petData.map((petData) => (
                    <PetCard 
                    key={petData.id}
                    name={petData.name}
                    location={petData.location}
                    age={petData.age}
                    breed={petData.breed}
                    image={petData.image}
                    specialRequirements={petData.specialRequirements}
                    description={petData.description} />
                    ))}
            </div>
            <SectionBorder/>
            <Footer />
        </div>
    );
}

export default PetsPage;