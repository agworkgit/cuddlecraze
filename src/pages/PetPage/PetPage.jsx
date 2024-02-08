import './pet-page.css';
import PetCard from '../../components/PetCard/PetCard';
import Footer from '../../components/Footer/Footer';
import SectionBorder from '../../components/SectionBorder/SectionBorder';
import PetProfile from './PetPageCard';

function PetPage() {
    return (
        <div id="pet-profile" className='pets-container'>
            <div>
                <PetProfile />
            </div>
            <SectionBorder/>
            <Footer />
        </div>
    );
}

export default PetPage;