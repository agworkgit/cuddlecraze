import './pets-page.css';
import Footer from '../../components/Footer/Footer';
import SectionBorder from '../../components/SectionBorder/SectionBorder';
import SearchFilters from '../../components/SearchFilters/SearchFilters';

function PetsPage() {
    

    return ( 
        <div>
            <SearchFilters />
            <SectionBorder/>
            <Footer />
        </div>
    
    );
}

export default PetsPage;