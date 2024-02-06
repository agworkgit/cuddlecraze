import React from 'react';
import AdviceCard from '../../components/AdviceCard/AdviceCard';
import Footer from '../../components/Footer/Footer';
import SectionBorder from '../../components/SectionBorder/SectionBorder';
import adviceData from '../../components/AdviceCard/data/advice-data.json';

function AdvicePageMain() {
  return (
    <div id="advice-page" className='advice-container'>
      <h1> Hullo </h1>
      <div className='advice-content grid'>
        <AdviceCard advice={adviceData} />
    
      </div>
      <SectionBorder />
      <Footer />
    </div>
  );
}

export default AdvicePageMain;