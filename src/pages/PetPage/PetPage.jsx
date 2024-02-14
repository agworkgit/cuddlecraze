import './pet-page.css';
import Footer from '../../components/Footer/Footer';
import SectionBorder from '../../components/SectionBorder/SectionBorder';
import PetProfile from './PetPageCard';
import DogVideos from '../../components/DogVideos/DogVideos'
import DogFacts from '../../components/DogFacts/DogFacts';
import ConnectionEmail from '../../components/ConnectionEmail/ConnectionEmail'
import Header from '../../components/Header/Header';

function PetPage() {
    return (
        <div id="pet-profile" className='pets-container'>
            < Header />
            <div>
                <PetProfile />
            </div>
            <div>
                <ConnectionEmail />
            </div>
            <div className='row'>
                <div className='col-lg-4 col-md-12'><DogVideos /></div>
                <div className='col-lg-8 col-md-12'><DogFacts /></div>
            </div>
            <br></br>
            <SectionBorder/>
            <Footer />
        </div>
    );
}

export default PetPage;