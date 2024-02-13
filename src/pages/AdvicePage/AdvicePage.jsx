import AdviceCard from '../../components/AdviceCard/AdviceCard';
import SectionBorder from '../../components/SectionBorder/SectionBorder';
import Footer from '../../components/Footer/Footer';
import adviceData from '../../components/AdviceCard/data/advice-data.json';
import './advice-page.css';

function AdvicePage() {
  return (
    <div id="advice-page" className='advice-page section container'>
      <AdviceCard advice={adviceData} />
      <SectionBorder />
      <Footer />
    </div>
  );
}

export default AdvicePage;