import React from 'react';
import AdviceCard from '../../components/AdviceCard/AdviceCard';
import Footer from '../../components/Footer/Footer';
import SectionBorder from '../../components/SectionBorder/SectionBorder';
import adviceData from '../../components/AdviceCard/data/advice-data.json';
import './AdvicePage.css';

function AdvicePageMain() {
  return (
    <div id="advice-page" className='advice-container'>
      <SectionBorder />
      <AdviceCard advice={adviceData} />
      <SectionBorder />
      <Footer />
      <SectionBorder />
    </div>
  );
}

export default AdvicePageMain;