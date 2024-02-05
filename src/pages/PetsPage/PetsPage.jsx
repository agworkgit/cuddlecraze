import './pets-page.css';
import PetCard from '../../components/PetCard/PetCard';
import Footer from '../../components/Footer/Footer';
import SectionBorder from '../../components/SectionBorder/SectionBorder';

function PetsPage() {
    return (
        <div id="pets-page" className='pets-container'>
            <div className='pets-content grid'>
                <PetCard />
                <PetCard />
                <PetCard />
                <PetCard />
            </div>
            <SectionBorder/>
            <Footer />
        </div>
    );
}

export default PetsPage;