import React, { useState } from 'react';
import './account-page.css';
import Footer from '../../components/Footer/Footer';
import SectionBorder from '../../components/SectionBorder/SectionBorder';
import AccountHead from '../../components/AccountHead/AccountHead';
import AccountFavourite from '../../components/AccountFavourite/AccountFavourite';
import AccountContacted from '../../components/ContactedAdopted/ContactedAdopted';
// import AddPetListing from '../../components/AccountAddPet/AddPetListing'; // Import AddPetListing component

function AccountPage() {
  const [activeSection, setActiveSection] = useState('account');

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  return (
    <div id="account-page" className='account-container'>
      <div className="section-buttons">
        <button className="btn-primary" onClick={() => handleSectionChange('account')}>My Account</button>
        <button className="btn-primary" onClick={() => handleSectionChange('favorites')}>Favorites</button>
        <button className="btn-primary" onClick={() => handleSectionChange('contacted')}>Contacted</button>
        {/* <button className="btn-primary" onClick={() => handleSectionChange('add-pet')}>Add Pet</button> {/* Button to show AddPetListing */}
      </div>
      <div className='account-content grid'>
        {activeSection === 'account' && <AccountHead />}
        {activeSection === 'favorites' && <AccountFavourite />}
        {activeSection === 'contacted' && <AccountContacted />}
        {/* {activeSection === 'add-pet' && <AddPetListing />} {/* Conditionally render AddPetListing component */} 
      </div>
      <SectionBorder />
      <Footer />
    </div>
  );
}

export default AccountPage;
