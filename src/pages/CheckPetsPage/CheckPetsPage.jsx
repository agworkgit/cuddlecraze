import './check-pets-page.css';
import PetCard from '../../components/PetCard/PetCard';
import Footer from '../../components/Footer/Footer';
import SectionBorder from '../../components/SectionBorder/SectionBorder';
import PetData from '../../components/PetCard/data/PetData.json';

function CheckPetsPage() {
    // const petsContent = $('#pets-content')
    
    return (
        <div id="check-pets-page" className='pets-container container'>
            <div id="pets-content" className='pets-content section grid'>
                {PetData.map((PetData) => (
                    <PetCard 
                    key={PetData.id}
                    name={PetData.name}
                    location={PetData.location}
                    age={PetData.age}
                    breed={PetData.breed}
                    image={PetData.image}
                    specialRequirements={PetData.specialRequirements}
                    description={PetData.description} />
                    ))}
            </div>
            <SectionBorder/>
            <Footer />
        </div>
    );
}

export default CheckPetsPage;