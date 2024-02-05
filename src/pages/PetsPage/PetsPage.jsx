import './pets-page.css';
import PetCard from '../../components/PetCard/PetCard';
import Footer from '../../components/Footer/Footer';

function PetsPage() {
    return (
        <div id="pets-page" className='pets-container'>
            <div className='pets-content grid'>
                <PetCard />
                <PetCard />
                <PetCard />
                <PetCard />
            </div>
            <Footer />
        </div>
    );
}

export default PetsPage;