import './pet-page.css';
import PetCard from '../../components/PetCard/PetCard';
import Footer from '../../components/Footer/Footer';
import SectionBorder from '../../components/SectionBorder/SectionBorder';
import PetProfile from './PetPageCard';
import DogVideos from '../../components/DogVideos/DogVideos'
import DogFacts from '../../components/DogFacts/DogFacts';

function PetPage() {
    return (
        <div id="pet-profile" className='pets-container'>
            <div>
                <PetProfile />
            </div>
            <div>
                <DogVideos />
            </div>
            <br></br>
            <div>
                <DogFacts />
            </div>
            <br></br>
            <SectionBorder/>
            <Footer />
        </div>
    );
}

export default PetPage;