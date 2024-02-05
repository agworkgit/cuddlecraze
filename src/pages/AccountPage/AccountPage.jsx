import './account-page.css';
import Footer from '../../components/Footer/Footer';
import SectionBorder from '../../components/SectionBorder/SectionBorder';
import AccountHead from '../../components/AccountHead/AccountHead';
import AccountFavourite from '../../components/AccountFavourite/AccountFavourite';
import AccountAdopted from '../../components/AccountAdopted/AccountAdopted';

function AccountPage() {
    return (
        <div id="account-page" className='account-container'>
            <div className='account-content grid'>
            <AccountHead />
            <AccountFavourite />
            <AccountAdopted />
            </div>
            <SectionBorder/>
            <Footer />
        </div>
    );
}

export default AccountPage;