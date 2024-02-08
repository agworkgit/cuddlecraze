import React, { useState } from 'react';
import './account-page.css';
import Footer from '../../components/Footer/Footer';
import SectionBorder from '../../components/SectionBorder/SectionBorder';
import AccountHead from '../../components/AccountHead/AccountHead';
import AccountFavourite from '../../components/AccountFavourite/AccountFavourite';
import AccountAdopted from '../../components/AccountAdopted/AccountAdopted';

function AccountPage() {
    const [activeSection, setActiveSection] = useState('account'); // 'account', 'favorites', 'adopted'

    const handleSectionChange = (section) => {
        setActiveSection(section);
    };

    return (
        <div id="account-page" className='account-container'>
            <div className="section-buttons">
                <button className="btn-primary" onClick={() => handleSectionChange('account')}>My Account</button>
                <button className="btn-primary" onClick={() => handleSectionChange('favorites')}>Favorites</button>
                <button className="btn-primary" onClick={() => handleSectionChange('adopted')}>Adopted</button>
            </div>
            <div className='account-content grid'>
                {activeSection === 'account' && <AccountHead />}
                {activeSection === 'favorites' && <AccountFavourite />}
                {activeSection === 'adopted' && <AccountAdopted />}
            </div>
            <SectionBorder />
            <Footer />
        </div>
    );
}

export default AccountPage;
