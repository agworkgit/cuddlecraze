import AccountNav from '../../components/AccountNav/AccountNav';
import SectionBorder from '../../components/SectionBorder/SectionBorder';
import FavouriteCard from '../../components/FavouriteCard/FavouriteCard';
import AdoptedCard from '../../components/AdoptedCard/AdoptedCard';
import PetData from '../../components/PetCard/data/PetData.json';
import Footer from '../../components/Footer/Footer';
import './account-page.css';

function AccountPage() {
    return (
        <div id="account-page" className='account-page section container'>
            <AccountNav />
            <SectionBorder />
            <div className='section-title'>Favourites</div>
            <div className="favourite-container">
                <div id="pets-content" className='pets-content grid'>
                    {PetData.map((PetData) => (
                        <FavouriteCard
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
            </div>
            <SectionBorder />
            <div className='section-title'>My Adoptions</div>
            <div className="adopted-container">
                <div id="pets-content" className='pets-content grid'>
                    {PetData.map((PetData) => (
                        <AdoptedCard
                            key={PetData.id}
                            name={PetData.name}
                            age={PetData.age}
                            breed={PetData.breed}
                            image={PetData.image}
                            specialRequirements={PetData.specialRequirements}
                            description={PetData.description} />
                    ))}
                </div>
            </div>
            <SectionBorder />
            <Footer />
        </div>
    );
}

export default AccountPage;